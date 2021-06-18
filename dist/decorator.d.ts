/// <reference types="assemblyscript/std/portable" />
import { PathTransformVisitor } from "./transformer";
import { ClassDeclaration, FieldDeclaration, MethodDeclaration, Parser, VariableDeclaration, FunctionDeclaration, Source, DecoratorNode, DeclarationStatement, Program, Module } from "../as";
export declare function registerDecorator(decorator: Decorator): typeof TopLevelDecorator;
export declare class TopLevelDecorator extends PathTransformVisitor {
    private static _visitors;
    static registerVisitor(...visitors: Decorator[]): void;
    visitDecoratorNode(node: DecoratorNode): void;
    afterParse(_: Parser): void;
    afterInitialize(_: Program): void;
    afterCompile(_: Module): void;
}
export declare abstract class Decorator extends PathTransformVisitor {
    /**
     * Default filter that removes library files
     */
    get sourceFilter(): (s: Source) => bool;
    get decoratorMatcher(): (node: DecoratorNode) => boolean;
    get name(): string;
    getDecorator(node: DeclarationStatement): DecoratorNode | null;
}
export declare abstract class ClassDecorator extends Decorator {
    abstract visitFieldDeclaration(node: FieldDeclaration): void;
    abstract visitMethodDeclaration(node: MethodDeclaration): void;
    abstract visitClassDeclaration(node: ClassDeclaration): void;
}
export declare abstract class FunctionDecorator extends Decorator {
    abstract visitFunctionDeclaration(node: FunctionDeclaration): void;
}
export declare abstract class VariableDecorator extends Decorator {
    abstract visitVariableDeclaration(node: VariableDeclaration): void;
}
