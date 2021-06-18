import { PathTransformVisitor, mergeTransformer } from "./transformer";
import {
  ClassDeclaration,
  FieldDeclaration,
  MethodDeclaration,
  Parser,
  VariableDeclaration,
  FunctionDeclaration,
  Source,
  DecoratorNode,
  DeclarationStatement,
  Program,
  Module,
} from "../as";
import { decorates, not, isLibrary, getDecorator } from "./utils";
import { BaseVisitor } from "./base";

export function registerDecorator(decorator: Decorator) {
  TopLevelDecorator.registerVisitor(decorator);
  return TopLevelDecorator;
}

export class TopLevelDecorator extends PathTransformVisitor {
  private static _visitors: Decorator[];

  static registerVisitor(...visitors: Decorator[]): void {
    TopLevelDecorator._visitors = visitors;
  }

  visitDecoratorNode(node: DecoratorNode) {
    TopLevelDecorator._visitors.forEach(visitor => {
      if (visitor.decoratorMatcher(node)) {
        visitor.currentPath = this.currentParentPath;
        visitor._visit(this.currentParent);
      }
    })
  }

  afterParse(_: Parser): void {
    TopLevelDecorator._visitors.forEach(visitor => mergeTransformer(this, visitor));
    this.visit(this.program.sources.filter(not(isLibrary)));
    TopLevelDecorator._visitors.forEach(v => v.afterParse && v.afterParse(_))
  }

  afterInitialize(_: Program) {
    TopLevelDecorator._visitors.forEach(v => v.afterInitialize && v.afterInitialize(_))
  }

  afterCompile(_: Module) {
    TopLevelDecorator._visitors.forEach(v => v.afterCompile && v.afterCompile(_))
  }
}

export abstract class Decorator extends PathTransformVisitor {
  /**
   * Default filter that removes library files
   */
  get sourceFilter(): (s: Source) => bool {
    return not(isLibrary);
  }

  get decoratorMatcher(): (node: DecoratorNode) => boolean {
    return (node: DecoratorNode) => decorates(node, this.name)
  }

  get name(): string { return ""; }

  getDecorator(node: DeclarationStatement): DecoratorNode | null {
    return node.decorators && node.decorators.find(this.decoratorMatcher) || null;
  }
}

export abstract class ClassDecorator extends Decorator {
  abstract visitFieldDeclaration(node: FieldDeclaration): void;
  abstract visitMethodDeclaration(node: MethodDeclaration): void;
  abstract visitClassDeclaration(node: ClassDeclaration): void;
}

export abstract class FunctionDecorator extends Decorator {
  abstract visitFunctionDeclaration(node: FunctionDeclaration): void;
}

export abstract class VariableDecorator extends Decorator {
  abstract visitVariableDeclaration(node: VariableDeclaration): void;
}
