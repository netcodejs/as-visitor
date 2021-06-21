"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseVisitor = void 0;
/* eslint-disable @typescript-eslint/no-empty-function */
const as_1 = require("../as");
const visitor_1 = require("./visitor");
class BaseVisitor extends visitor_1.AbstractVisitor {
    constructor() {
        super(...arguments);
        this._depth = 0;
        this.variableTypeRecordArr = [];
        this.classNode = [];
    }
    get depth() {
        return this._depth;
    }
    set depth(value) {
        var _a;
        const increment = value - this._depth;
        if (Math.abs(increment) !== 1)
            throw "Invalid operator!";
        if (increment == 1) {
            const lastRecord = (_a = this.variableTypeRecordArr[this._depth]) !== null && _a !== void 0 ? _a : null;
            this.variableTypeRecordArr[value] = Object.create(lastRecord);
        }
        else {
            this.variableTypeRecordArr[this._depth] = null;
        }
        this._depth = value;
    }
    get currentVariableTypeRecord() {
        return this.variableTypeRecordArr[this._depth];
    }
    get thisTypeNode() {
        return this.classNode[this.classNode.length - 1];
    }
    _visit(node) {
        switch (node.kind) {
            case as_1.NodeKind.SOURCE: {
                this.visitSource(node);
                break;
            }
            // types
            case as_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case as_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            case as_1.NodeKind.TYPENAME: {
                this.visitTypeName(node);
            }
            case as_1.NodeKind.TYPEPARAMETER: {
                this.visitTypeParameter(node);
                break;
            }
            // expressions
            case as_1.NodeKind.FALSE:
            case as_1.NodeKind.NULL:
            case as_1.NodeKind.SUPER:
            case as_1.NodeKind.THIS:
            case as_1.NodeKind.TRUE:
            case as_1.NodeKind.CONSTRUCTOR:
            case as_1.NodeKind.IDENTIFIER: {
                this.visitIdentifierExpression(node);
                break;
            }
            case as_1.NodeKind.ASSERTION: {
                this.visitAssertionExpression(node);
                break;
            }
            case as_1.NodeKind.BINARY: {
                this.visitBinaryExpression(node);
                break;
            }
            case as_1.NodeKind.CALL: {
                this.visitCallExpression(node);
                break;
            }
            case as_1.NodeKind.CLASS: {
                this.visitClassExpression(node);
                break;
            }
            case as_1.NodeKind.COMMA: {
                this.visitCommaExpression(node);
                break;
            }
            case as_1.NodeKind.ELEMENTACCESS: {
                this.visitElementAccessExpression(node);
                break;
            }
            case as_1.NodeKind.FUNCTION: {
                this.visitFunctionExpression(node);
                break;
            }
            case as_1.NodeKind.INSTANCEOF: {
                this.visitInstanceOfExpression(node);
                break;
            }
            case as_1.NodeKind.LITERAL: {
                this.visitLiteralExpression(node);
                break;
            }
            case as_1.NodeKind.NEW: {
                this.visitNewExpression(node);
                break;
            }
            case as_1.NodeKind.PARENTHESIZED: {
                this.visitParenthesizedExpression(node);
                break;
            }
            case as_1.NodeKind.PROPERTYACCESS: {
                this.visitPropertyAccessExpression(node);
                break;
            }
            case as_1.NodeKind.TERNARY: {
                this.visitTernaryExpression(node);
                break;
            }
            case as_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case as_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            // statements
            case as_1.NodeKind.BLOCK: {
                this.visitBlockStatement(node);
                break;
            }
            case as_1.NodeKind.BREAK: {
                this.visitBreakStatement(node);
                break;
            }
            case as_1.NodeKind.CONTINUE: {
                this.visitContinueStatement(node);
                break;
            }
            case as_1.NodeKind.DO: {
                this.visitDoStatement(node);
                break;
            }
            case as_1.NodeKind.EMPTY: {
                this.visitEmptyStatement(node);
                break;
            }
            case as_1.NodeKind.EXPORT: {
                this.visitExportStatement(node);
                break;
            }
            case as_1.NodeKind.EXPORTDEFAULT: {
                this.visitExportDefaultStatement(node);
                break;
            }
            case as_1.NodeKind.EXPORTIMPORT: {
                this.visitExportImportStatement(node);
                break;
            }
            case as_1.NodeKind.EXPRESSION: {
                this.visitExpressionStatement(node);
                break;
            }
            case as_1.NodeKind.FOR: {
                this.visitForStatement(node);
                break;
            }
            case as_1.NodeKind.IF: {
                this.visitIfStatement(node);
                break;
            }
            case as_1.NodeKind.IMPORT: {
                this.visitImportStatement(node);
                break;
            }
            case as_1.NodeKind.RETURN: {
                this.visitReturnStatement(node);
                break;
            }
            case as_1.NodeKind.SWITCH: {
                this.visitSwitchStatement(node);
                break;
            }
            case as_1.NodeKind.THROW: {
                this.visitThrowStatement(node);
                break;
            }
            case as_1.NodeKind.TRY: {
                this.visitTryStatement(node);
                break;
            }
            case as_1.NodeKind.VARIABLE: {
                this.visitVariableStatement(node);
                break;
            }
            case as_1.NodeKind.WHILE: {
                this.visitWhileStatement(node);
                break;
            }
            // declaration statements
            case as_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(node);
                break;
            }
            case as_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(node);
                break;
            }
            case as_1.NodeKind.ENUMVALUEDECLARATION: {
                this.visitEnumValueDeclaration(node);
                break;
            }
            case as_1.NodeKind.FIELDDECLARATION: {
                this.visitFieldDeclaration(node);
                break;
            }
            case as_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(node);
                break;
            }
            case as_1.NodeKind.IMPORTDECLARATION: {
                this.visitImportDeclaration(node);
                break;
            }
            case as_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(node);
                break;
            }
            case as_1.NodeKind.METHODDECLARATION: {
                this.visitMethodDeclaration(node);
                break;
            }
            case as_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(node);
                break;
            }
            case as_1.NodeKind.TYPEDECLARATION: {
                this.visitTypeDeclaration(node);
                break;
            }
            case as_1.NodeKind.VARIABLEDECLARATION: {
                this.visitVariableDeclaration(node);
                break;
            }
            // other
            case as_1.NodeKind.DECORATOR: {
                this.visitDecoratorNode(node);
                break;
            }
            case as_1.NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case as_1.NodeKind.PARAMETER: {
                this.visitParameter(node);
                break;
            }
            case as_1.NodeKind.SWITCHCASE: {
                this.visitSwitchCase(node);
                break;
            }
            case as_1.NodeKind.INDEXSIGNATURE: {
                this.visitIndexSignature(node);
                break;
            }
            default:
                assert(false);
        }
    }
    visitSource(node) {
        for (const stmt of node.statements) {
            this.depth++;
            this.visit(stmt);
            this.depth--;
        }
    }
    visitTypeNode(node) { }
    visitTypeName(node) {
        this.visit(node.identifier);
        this.visit(node.next);
    }
    visitNamedTypeNode(node) {
        this.visit(node.name);
        this.visit(node.typeArguments);
    }
    visitFunctionTypeNode(node) {
        this.visit(node.parameters);
        this.visit(node.returnType);
        this.visit(node.explicitThisType);
    }
    visitTypeParameter(node) {
        this.visit(node.name);
        this.visit(node.extendsType);
        this.visit(node.defaultType);
    }
    visitIdentifierExpression(node) { }
    visitArrayLiteralExpression(node) {
        this.visit(node.elementExpressions);
    }
    visitObjectLiteralExpression(node) {
        this.visit(node.names);
        this.visit(node.values);
    }
    visitAssertionExpression(node) {
        this.visit(node.toType);
        this.visit(node.expression);
    }
    visitBinaryExpression(node) {
        this.visit(node.left);
        this.visit(node.right);
    }
    visitCallExpression(node) {
        this.visit(node.expression);
        this.visitArguments(node.typeArguments, node.args);
    }
    visitArguments(typeArguments, args) {
        this.visit(typeArguments);
        this.visit(args);
    }
    visitClassExpression(node) {
        this.visit(node.declaration);
    }
    visitCommaExpression(node) {
        this.visit(node.expressions);
    }
    visitElementAccessExpression(node) {
        this.visit(node.elementExpression);
        this.visit(node.expression);
    }
    visitFunctionExpression(node) {
        this.visit(node.declaration);
    }
    visitLiteralExpression(node) {
        switch (node.literalKind) {
            case as_1.LiteralKind.FLOAT: {
                this.visitFloatLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.INTEGER: {
                this.visitIntegerLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.STRING: {
                this.visitStringLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.TEMPLATE: {
                this.visitTemplateLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.REGEXP: {
                this.visitRegexpLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.ARRAY: {
                this.visitArrayLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.OBJECT: {
                this.visitObjectLiteralExpression(node);
                break;
            }
            default:
                throw new Error("Invalid LiteralKind: " + node.literalKind);
        }
    }
    visitFloatLiteralExpression(node) { }
    visitInstanceOfExpression(node) {
        this.visit(node.expression);
        this.visit(node.isType);
    }
    visitIntegerLiteralExpression(node) { }
    visitStringLiteral(str, singleQuoted = false) { }
    visitStringLiteralExpression(node) {
        this.visitStringLiteral(node.value);
    }
    visitTemplateLiteralExpression(node) { }
    visitRegexpLiteralExpression(node) { }
    visitNewExpression(node) {
        this.visit(node.typeArguments);
        this.visitArguments(node.typeArguments, node.args);
        this.visit(node.args);
    }
    visitParenthesizedExpression(node) {
        this.visit(node.expression);
    }
    visitPropertyAccessExpression(node) {
        this.visit(node.property);
        this.visit(node.expression);
    }
    visitTernaryExpression(node) {
        this.visit(node.condition);
        this.visit(node.ifThen);
        this.visit(node.ifElse);
    }
    visitUnaryExpression(node) {
        this.visit(node.operand);
    }
    visitUnaryPostfixExpression(node) {
        this.visit(node.operand);
    }
    visitUnaryPrefixExpression(node) {
        this.visit(node.operand);
    }
    visitSuperExpression(node) { }
    visitFalseExpression(node) { }
    visitTrueExpression(node) { }
    visitThisExpression(node) { }
    visitNullExperssion(node) { }
    visitConstructorExpression(node) { }
    visitNodeAndTerminate(statement) { }
    visitBlockStatement(node) {
        this.depth++;
        this.visit(node.statements);
        this.depth--;
    }
    visitBreakStatement(node) {
        this.visit(node.label);
    }
    visitContinueStatement(node) {
        this.visit(node.label);
    }
    visitClassDeclaration(node, isDefault = false) {
        this.classNode.push(node);
        this.visit(node.name);
        this.depth++;
        this.visit(node.decorators);
        assert(node.isGeneric
            ? node.typeParameters != null
            : node.typeParameters == null);
        this.visit(node.typeParameters);
        this.visit(node.extendsType);
        this.visit(node.implementsTypes);
        this.visit(node.members);
        this.depth--;
        this.classNode.pop();
    }
    visitDoStatement(node) {
        this.visit(node.condition);
        this.visit(node.statement);
    }
    visitEmptyStatement(node) { }
    visitEnumDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.values);
    }
    visitEnumValueDeclaration(node) {
        this.visit(node.name);
        this.visit(node.initializer);
    }
    visitExportImportStatement(node) {
        this.visit(node.name);
        this.visit(node.externalName);
    }
    visitExportMember(node) {
        this.visit(node.localName);
        this.visit(node.exportedName);
    }
    visitExportStatement(node) {
        this.visit(node.path);
        this.visit(node.members);
    }
    visitExportDefaultStatement(node) {
        this.visit(node.declaration);
    }
    visitExpressionStatement(node) {
        this.visit(node.expression);
    }
    visitFieldDeclaration(node) {
        this.visit(node.name);
        this.visit(node.type);
        this.visit(node.initializer);
        this.visit(node.decorators);
    }
    visitForStatement(node) {
        this.depth++;
        this.visit(node.initializer);
        this.visit(node.condition);
        this.visit(node.incrementor);
        this.visit(node.statement);
        this.depth--;
    }
    visitFunctionDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.typeParameters);
        this.depth++;
        this.visit(node.signature);
        this.visit(node.body);
        this.depth--;
    }
    visitIfStatement(node) {
        this.visit(node.condition);
        this.visit(node.ifTrue);
        this.visit(node.ifFalse);
    }
    visitImportDeclaration(node) {
        this.visit(node.foreignName);
        this.visit(node.name);
        this.visit(node.decorators);
    }
    visitImportStatement(node) {
        this.visit(node.namespaceName);
        this.visit(node.declarations);
    }
    visitIndexSignature(node) {
        this.visit(node.keyType);
        this.visit(node.valueType);
    }
    visitInterfaceDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.typeParameters);
        this.visit(node.implementsTypes);
        this.visit(node.extendsType);
        this.depth++;
        this.visit(node.members);
        this.depth--;
    }
    visitMethodDeclaration(node) {
        this.visit(node.name);
        this.visit(node.typeParameters);
        this.visit(node.decorators);
        this.depth++;
        this.visit(node.signature);
        this.visit(node.body);
        this.depth--;
    }
    visitNamespaceDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.members);
    }
    visitReturnStatement(node) {
        this.visit(node.value);
    }
    visitSwitchCase(node) {
        this.visit(node.label);
        this.visit(node.statements);
    }
    visitSwitchStatement(node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.cases);
        this.depth--;
    }
    visitThrowStatement(node) {
        this.visit(node.value);
    }
    visitTryStatement(node) {
        this.visit(node.statements);
        this.visit(node.catchVariable);
        this.visit(node.catchStatements);
        this.visit(node.finallyStatements);
    }
    visitTypeDeclaration(node) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.type);
        this.visit(node.typeParameters);
    }
    visitVariableDeclaration(node) {
        this.visit(node.name);
        this.visit(node.type);
        this.visit(node.initializer);
        this.currentVariableTypeRecord[node.name.text] = node.type;
    }
    visitVariableStatement(node) {
        this.visit(node.decorators);
        this.visit(node.declarations);
    }
    visitWhileStatement(node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.statement);
        this.depth--;
    }
    visitVoidStatement(node) { }
    visitComment(node) { }
    visitDecoratorNode(node) {
        this.visit(node.name);
        this.visit(node.args);
    }
    visitParameter(node) {
        this.visit(node.name);
        this.visit(node.implicitFieldDeclaration);
        this.visit(node.initializer);
        this.visit(node.type);
        this.currentVariableTypeRecord[node.name.text] = node.type;
    }
}
exports.BaseVisitor = BaseVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUF5RDtBQUN6RCw4QkE4RWU7QUFFZix1Q0FBNEM7QUFFNUMsTUFBYSxXQUFZLFNBQVEseUJBQXFCO0lBQXREOztRQUNVLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFnQm5CLDBCQUFxQixHQUErQyxFQUFFLENBQUM7UUFNdkUsY0FBUyxHQUF1QixFQUFFLENBQUE7SUFrcUJwQyxDQUFDO0lBdnJCQyxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7O1FBQ2IsTUFBTSxTQUFTLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFBRSxNQUFNLG1CQUFtQixDQUFDO1FBQ3pELElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNsQixNQUFNLFVBQVUsU0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQ0FBSSxJQUFJLENBQUM7WUFDbkUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUdELElBQUkseUJBQXlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBR0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJ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UUFDM0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQW1CLElBQVUsQ0FBQztJQUVqRCxZQUFZLENBQUMsSUFBaUIsSUFBVSxDQUFDO0lBRXpDLGtCQUFrQixDQUFDLElBQW1CO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBbUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMseUJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQzdELENBQUM7Q0FDRjtBQXpyQkQsa0NBeXJCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvbiAqL1xyXG5pbXBvcnQge1xyXG4gIE5vZGUsXHJcbiAgTm9kZUtpbmQsXHJcbiAgU291cmNlLFxyXG4gIE5hbWVkVHlwZU5vZGUsXHJcbiAgRnVuY3Rpb25UeXBlTm9kZSxcclxuICBUeXBlTmFtZSxcclxuICBUeXBlUGFyYW1ldGVyTm9kZSxcclxuICBJZGVudGlmaWVyRXhwcmVzc2lvbixcclxuICBBc3NlcnRpb25FeHByZXNzaW9uLFxyXG4gIEJpbmFyeUV4cHJlc3Npb24sXHJcbiAgQ2FsbEV4cHJlc3Npb24sXHJcbiAgQ2xhc3NFeHByZXNzaW9uLFxyXG4gIENvbW1hRXhwcmVzc2lvbixcclxuICBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbixcclxuICBGdW5jdGlvbkV4cHJlc3Npb24sXHJcbiAgSW5zdGFuY2VPZkV4cHJlc3Npb24sXHJcbiAgTGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgTmV3RXhwcmVzc2lvbixcclxuICBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbixcclxuICBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24sXHJcbiAgVGVybmFyeUV4cHJlc3Npb24sXHJcbiAgVW5hcnlQb3N0Zml4RXhwcmVzc2lvbixcclxuICBVbmFyeVByZWZpeEV4cHJlc3Npb24sXHJcbiAgQmxvY2tTdGF0ZW1lbnQsXHJcbiAgQnJlYWtTdGF0ZW1lbnQsXHJcbiAgQ29udGludWVTdGF0ZW1lbnQsXHJcbiAgRG9TdGF0ZW1lbnQsXHJcbiAgRW1wdHlTdGF0ZW1lbnQsXHJcbiAgRXhwb3J0U3RhdGVtZW50LFxyXG4gIEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQsXHJcbiAgRXhwb3J0SW1wb3J0U3RhdGVtZW50LFxyXG4gIEV4cHJlc3Npb25TdGF0ZW1lbnQsXHJcbiAgRm9yU3RhdGVtZW50LFxyXG4gIElmU3RhdGVtZW50LFxyXG4gIEltcG9ydFN0YXRlbWVudCxcclxuICBSZXR1cm5TdGF0ZW1lbnQsXHJcbiAgU3dpdGNoU3RhdGVtZW50LFxyXG4gIFRocm93U3RhdGVtZW50LFxyXG4gIFRyeVN0YXRlbWVudCxcclxuICBWYXJpYWJsZVN0YXRlbWVudCxcclxuICBXaGlsZVN0YXRlbWVudCxcclxuICBDbGFzc0RlY2xhcmF0aW9uLFxyXG4gIEVudW1EZWNsYXJhdGlvbixcclxuICBFbnVtVmFsdWVEZWNsYXJhdGlvbixcclxuICBGaWVsZERlY2xhcmF0aW9uLFxyXG4gIEZ1bmN0aW9uRGVjbGFyYXRpb24sXHJcbiAgSW1wb3J0RGVjbGFyYXRpb24sXHJcbiAgSW50ZXJmYWNlRGVjbGFyYXRpb24sXHJcbiAgTWV0aG9kRGVjbGFyYXRpb24sXHJcbiAgTmFtZXNwYWNlRGVjbGFyYXRpb24sXHJcbiAgVHlwZURlY2xhcmF0aW9uLFxyXG4gIFZhcmlhYmxlRGVjbGFyYXRpb24sXHJcbiAgRGVjb3JhdG9yTm9kZSxcclxuICBJbmRleFNpZ25hdHVyZU5vZGUsXHJcbiAgUGFyYW1ldGVyTm9kZSxcclxuICBFeHBvcnRNZW1iZXIsXHJcbiAgU3dpdGNoQ2FzZSxcclxuICBUeXBlTm9kZSxcclxuICBBcnJheUxpdGVyYWxFeHByZXNzaW9uLFxyXG4gIEV4cHJlc3Npb24sXHJcbiAgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgRmxvYXRMaXRlcmFsRXhwcmVzc2lvbixcclxuICBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgVW5hcnlFeHByZXNzaW9uLFxyXG4gIFN1cGVyRXhwcmVzc2lvbixcclxuICBGYWxzZUV4cHJlc3Npb24sXHJcbiAgVHJ1ZUV4cHJlc3Npb24sXHJcbiAgVGhpc0V4cHJlc3Npb24sXHJcbiAgTnVsbEV4cHJlc3Npb24sXHJcbiAgQ29uc3RydWN0b3JFeHByZXNzaW9uLFxyXG4gIFN0YXRlbWVudCxcclxuICBWb2lkU3RhdGVtZW50LFxyXG4gIExpdGVyYWxLaW5kLFxyXG4gIENvbW1lbnROb2RlLFxyXG4gIFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24sXHJcbn0gZnJvbSBcIi4uL2FzXCI7XHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdFZpc2l0b3IgfSBmcm9tIFwiLi92aXNpdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVZpc2l0b3IgZXh0ZW5kcyBBYnN0cmFjdFZpc2l0b3I8Tm9kZT4ge1xyXG4gIHByaXZhdGUgX2RlcHRoID0gMDtcclxuICBnZXQgZGVwdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVwdGg7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVwdGgodmFsdWUpIHtcclxuICAgIGNvbnN0IGluY3JlbWVudCA9IHZhbHVlIC0gdGhpcy5fZGVwdGg7XHJcbiAgICBpZiAoTWF0aC5hYnMoaW5jcmVtZW50KSAhPT0gMSkgdGhyb3cgXCJJbnZhbGlkIG9wZXJhdG9yIVwiO1xyXG4gICAgaWYgKGluY3JlbWVudCA9PSAxKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RSZWNvcmQgPSB0aGlzLnZhcmlhYmxlVHlwZVJlY29yZEFyclt0aGlzLl9kZXB0aF0gPz8gbnVsbDtcclxuICAgICAgdGhpcy52YXJpYWJsZVR5cGVSZWNvcmRBcnJbdmFsdWVdID0gT2JqZWN0LmNyZWF0ZShsYXN0UmVjb3JkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFyaWFibGVUeXBlUmVjb3JkQXJyW3RoaXMuX2RlcHRoXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kZXB0aCA9IHZhbHVlO1xyXG4gIH1cclxuICB2YXJpYWJsZVR5cGVSZWNvcmRBcnI6IChSZWNvcmQ8c3RyaW5nLCBUeXBlTm9kZSB8IG51bGw+IHwgbnVsbClbXSA9IFtdO1xyXG5cclxuICBnZXQgY3VycmVudFZhcmlhYmxlVHlwZVJlY29yZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlVHlwZVJlY29yZEFyclt0aGlzLl9kZXB0aF07XHJcbiAgfVxyXG5cclxuICBjbGFzc05vZGU6IENsYXNzRGVjbGFyYXRpb25bXSA9IFtdXHJcbiAgZ2V0IHRoaXNUeXBlTm9kZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNsYXNzTm9kZVt0aGlzLmNsYXNzTm9kZS5sZW5ndGggLSAxXVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF92aXNpdChub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xyXG4gICAgICBjYXNlIE5vZGVLaW5kLlNPVVJDRToge1xyXG4gICAgICAgIHRoaXMudmlzaXRTb3VyY2UoPFNvdXJjZT5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdHlwZXNcclxuXHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRURUWVBFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdE5hbWVkVHlwZU5vZGUoPE5hbWVkVHlwZU5vZGU+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTlRZUEU6IHtcclxuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVOQU1FOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOYW1lKDxUeXBlTmFtZT5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVQQVJBTUVURVI6IHtcclxuICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcig8VHlwZVBhcmFtZXRlck5vZGU+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGV4cHJlc3Npb25zXHJcblxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZBTFNFOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLk5VTEw6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhJUzpcclxuICAgICAgY2FzZSBOb2RlS2luZC5UUlVFOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlNUUlVDVE9SOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklERU5USUZJRVI6IHtcclxuICAgICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oPElkZW50aWZpZXJFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQVNTRVJUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEFzc2VydGlvbkV4cHJlc3Npb24oPEFzc2VydGlvbkV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5CSU5BUlk6IHtcclxuICAgICAgICB0aGlzLnZpc2l0QmluYXJ5RXhwcmVzc2lvbig8QmluYXJ5RXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNBTEw6IHtcclxuICAgICAgICB0aGlzLnZpc2l0Q2FsbEV4cHJlc3Npb24oPENhbGxFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1M6IHtcclxuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NFeHByZXNzaW9uKDxDbGFzc0V4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5DT01NQToge1xyXG4gICAgICAgIHRoaXMudmlzaXRDb21tYUV4cHJlc3Npb24oPENvbW1hRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVMRU1FTlRBQ0NFU1M6IHtcclxuICAgICAgICB0aGlzLnZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oXHJcbiAgICAgICAgICA8RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvbkV4cHJlc3Npb24oPEZ1bmN0aW9uRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklOU1RBTkNFT0Y6IHtcclxuICAgICAgICB0aGlzLnZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24oPEluc3RhbmNlT2ZFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTElURVJBTDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRMaXRlcmFsRXhwcmVzc2lvbig8TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5ORVc6IHtcclxuICAgICAgICB0aGlzLnZpc2l0TmV3RXhwcmVzc2lvbig8TmV3RXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkVOVEhFU0laRUQ6IHtcclxuICAgICAgICB0aGlzLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24oXHJcbiAgICAgICAgICA8UGFyZW50aGVzaXplZEV4cHJlc3Npb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUzoge1xyXG4gICAgICAgIHRoaXMudmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24oXHJcbiAgICAgICAgICA8UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVEVSTkFSWToge1xyXG4gICAgICAgIHRoaXMudmlzaXRUZXJuYXJ5RXhwcmVzc2lvbig8VGVybmFyeUV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcclxuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbig8VW5hcnlQb3N0Zml4RXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUFJFRklYOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbig8VW5hcnlQcmVmaXhFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzdGF0ZW1lbnRzXHJcblxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkJMT0NLOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEJsb2NrU3RhdGVtZW50KDxCbG9ja1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkJSRUFLOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEJyZWFrU3RhdGVtZW50KDxCcmVha1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlRJTlVFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdENvbnRpbnVlU3RhdGVtZW50KDxDb250aW51ZVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkRPOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdERvU3RhdGVtZW50KDxEb1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVNUFRZOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEVtcHR5U3RhdGVtZW50KDxFbXB0eVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRTdGF0ZW1lbnQoPEV4cG9ydFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVERFRkFVTFQ6IHtcclxuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudCg8RXhwb3J0RGVmYXVsdFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVElNUE9SVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQoPEV4cG9ydEltcG9ydFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUFJFU1NJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0RXhwcmVzc2lvblN0YXRlbWVudCg8RXhwcmVzc2lvblN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRGb3JTdGF0ZW1lbnQoPEZvclN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklGOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdElmU3RhdGVtZW50KDxJZlN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlJFVFVSTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRSZXR1cm5TdGF0ZW1lbnQoPFJldHVyblN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRTd2l0Y2hTdGF0ZW1lbnQoPFN3aXRjaFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRIUk9XOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRSWToge1xyXG4gICAgICAgIHRoaXMudmlzaXRUcnlTdGF0ZW1lbnQoPFRyeVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlU3RhdGVtZW50KDxWYXJpYWJsZVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLldISUxFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZGVjbGFyYXRpb24gc3RhdGVtZW50c1xyXG5cclxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRGVjbGFyYXRpb24oPENsYXNzRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNREVDTEFSQVRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0RW51bURlY2xhcmF0aW9uKDxFbnVtRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNVkFMVUVERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbig8RW51bVZhbHVlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEZpZWxkRGVjbGFyYXRpb24oPEZpZWxkRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24oPEZ1bmN0aW9uRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5JTVBPUlRERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5JTlRFUkZBQ0VERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbig8SW50ZXJmYWNlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5NRVRIT0RERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRNZXRob2REZWNsYXJhdGlvbig8TWV0aG9kRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FU1BBQ0VERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbig8TmFtZXNwYWNlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFREVDTEFSQVRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0VHlwZURlY2xhcmF0aW9uKDxUeXBlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24oPFZhcmlhYmxlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG90aGVyXHJcblxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkRFQ09SQVRPUjoge1xyXG4gICAgICAgIHRoaXMudmlzaXREZWNvcmF0b3JOb2RlKDxEZWNvcmF0b3JOb2RlPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUTUVNQkVSOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcig8RXhwb3J0TWVtYmVyPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSQU1FVEVSOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFBhcmFtZXRlcig8UGFyYW1ldGVyTm9kZT5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSENBU0U6IHtcclxuICAgICAgICB0aGlzLnZpc2l0U3dpdGNoQ2FzZSg8U3dpdGNoQ2FzZT5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklOREVYU0lHTkFUVVJFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEluZGV4U2lnbmF0dXJlKDxJbmRleFNpZ25hdHVyZU5vZGU+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBhc3NlcnQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRTb3VyY2Uobm9kZTogU291cmNlKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IHN0bXQgb2Ygbm9kZS5zdGF0ZW1lbnRzKSB7XHJcbiAgICAgIHRoaXMuZGVwdGgrKztcclxuICAgICAgdGhpcy52aXNpdChzdG10KTtcclxuICAgICAgdGhpcy5kZXB0aC0tO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRUeXBlTm9kZShub2RlOiBUeXBlTm9kZSk6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0VHlwZU5hbWUobm9kZTogVHlwZU5hbWUpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pZGVudGlmaWVyKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uZXh0KTtcclxuICB9XHJcblxyXG4gIHZpc2l0TmFtZWRUeXBlTm9kZShub2RlOiBOYW1lZFR5cGVOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEZ1bmN0aW9uVHlwZU5vZGUobm9kZTogRnVuY3Rpb25UeXBlTm9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLnBhcmFtZXRlcnMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnJldHVyblR5cGUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmV4cGxpY2l0VGhpc1R5cGUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUeXBlUGFyYW1ldGVyKG5vZGU6IFR5cGVQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmRlZmF1bHRUeXBlKTtcclxuICB9XHJcblxyXG4gIHZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZTogSWRlbnRpZmllckV4cHJlc3Npb24pOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogQXJyYXlMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmVsZW1lbnRFeHByZXNzaW9ucyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IE9iamVjdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZXMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEFzc2VydGlvbkV4cHJlc3Npb24obm9kZTogQXNzZXJ0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLnRvVHlwZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XHJcbiAgfVxyXG5cclxuICB2aXNpdEJpbmFyeUV4cHJlc3Npb24obm9kZTogQmluYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmxlZnQpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnJpZ2h0KTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZTogQ2FsbEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcclxuICAgIHRoaXMudmlzaXRBcmd1bWVudHMobm9kZS50eXBlQXJndW1lbnRzLCBub2RlLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRBcmd1bWVudHModHlwZUFyZ3VtZW50czogVHlwZU5vZGVbXSB8IG51bGwsIGFyZ3M6IEV4cHJlc3Npb25bXSk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdCh0eXBlQXJndW1lbnRzKTtcclxuICAgIHRoaXMudmlzaXQoYXJncyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdENsYXNzRXhwcmVzc2lvbihub2RlOiBDbGFzc0V4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB2aXNpdENvbW1hRXhwcmVzc2lvbihub2RlOiBDb21tYUV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9ucyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZWxlbWVudEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGdW5jdGlvbkV4cHJlc3Npb24obm9kZTogRnVuY3Rpb25FeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgc3dpdGNoIChub2RlLmxpdGVyYWxLaW5kKSB7XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuRkxPQVQ6IHtcclxuICAgICAgICB0aGlzLnZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbig8RmxvYXRMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLklOVEVHRVI6IHtcclxuICAgICAgICB0aGlzLnZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgICAgICAgPEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlNUUklORzoge1xyXG4gICAgICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgICAgICAgIDxTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlRFTVBMQVRFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICA8VGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlJFR0VYUDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgICAgICAgIDxSZWdleHBMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLkFSUkFZOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24oPEFycmF5TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5PQkpFQ1Q6IHtcclxuICAgICAgICB0aGlzLnZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICA8T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIExpdGVyYWxLaW5kOiBcIiArIG5vZGUubGl0ZXJhbEtpbmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKG5vZGU6IEluc3RhbmNlT2ZFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuaXNUeXBlKTtcclxuICB9XHJcblxyXG4gIHZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbChzdHI6IHN0cmluZywgc2luZ2xlUXVvdGVkOiBib29sID0gZmFsc2UpOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbChub2RlLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHZpc2l0VGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0TmV3RXhwcmVzc2lvbihub2RlOiBOZXdFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLnZpc2l0QXJndW1lbnRzKG5vZGUudHlwZUFyZ3VtZW50cywgbm9kZS5hcmdzKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5hcmdzKTtcclxuICB9XHJcblxyXG4gIHZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24obm9kZTogUGFyZW50aGVzaXplZEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcclxuICB9XHJcblxyXG4gIHZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLnByb3BlcnR5KTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcclxuICB9XHJcblxyXG4gIHZpc2l0VGVybmFyeUV4cHJlc3Npb24obm9kZTogVGVybmFyeUV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmlmVGhlbik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZFbHNlKTtcclxuICB9XHJcblxyXG4gIHZpc2l0VW5hcnlFeHByZXNzaW9uKG5vZGU6IFVuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm9wZXJhbmQpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKG5vZGU6IFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKTtcclxuICB9XHJcblxyXG4gIHZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKG5vZGU6IFVuYXJ5UHJlZml4RXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm9wZXJhbmQpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRTdXBlckV4cHJlc3Npb24obm9kZTogU3VwZXJFeHByZXNzaW9uKTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXRGYWxzZUV4cHJlc3Npb24obm9kZTogRmFsc2VFeHByZXNzaW9uKTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXRUcnVlRXhwcmVzc2lvbihub2RlOiBUcnVlRXhwcmVzc2lvbik6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0VGhpc0V4cHJlc3Npb24obm9kZTogVGhpc0V4cHJlc3Npb24pOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdE51bGxFeHBlcnNzaW9uKG5vZGU6IE51bGxFeHByZXNzaW9uKTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXRDb25zdHJ1Y3RvckV4cHJlc3Npb24obm9kZTogQ29uc3RydWN0b3JFeHByZXNzaW9uKTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudDogU3RhdGVtZW50KTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXRCbG9ja1N0YXRlbWVudChub2RlOiBCbG9ja1N0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpO1xyXG4gICAgdGhpcy5kZXB0aC0tO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRCcmVha1N0YXRlbWVudChub2RlOiBCcmVha1N0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmxhYmVsKTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q29udGludWVTdGF0ZW1lbnQobm9kZTogQ29udGludWVTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5sYWJlbCk7XHJcbiAgfVxyXG5cclxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgaXNEZWZhdWx0ID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NOb2RlLnB1c2gobm9kZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLmRlcHRoKys7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XHJcbiAgICBhc3NlcnQoXHJcbiAgICAgIG5vZGUuaXNHZW5lcmljXHJcbiAgICAgICAgPyBub2RlLnR5cGVQYXJhbWV0ZXJzICE9IG51bGxcclxuICAgICAgICA6IG5vZGUudHlwZVBhcmFtZXRlcnMgPT0gbnVsbFxyXG4gICAgKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmltcGxlbWVudHNUeXBlcyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgICB0aGlzLmNsYXNzTm9kZS5wb3AoKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RG9TdGF0ZW1lbnQobm9kZTogRG9TdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEVtcHR5U3RhdGVtZW50KG5vZGU6IEVtcHR5U3RhdGVtZW50KTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXRFbnVtRGVjbGFyYXRpb24obm9kZTogRW51bURlY2xhcmF0aW9uLCBpc0RlZmF1bHQgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGU6IEVudW1WYWx1ZURlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0SW1wb3J0U3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXh0ZXJuYWxOYW1lKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RXhwb3J0TWVtYmVyKG5vZGU6IEV4cG9ydE1lbWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmxvY2FsTmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwb3J0ZWROYW1lKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RXhwb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydFN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLnBhdGgpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHBvcnREZWZhdWx0U3RhdGVtZW50KG5vZGU6IEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB2aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZTogRXhwcmVzc2lvblN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGaWVsZERlY2xhcmF0aW9uKG5vZGU6IEZpZWxkRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS50eXBlKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEZvclN0YXRlbWVudChub2RlOiBGb3JTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVwdGgrKztcclxuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pbmNyZW1lbnRvcik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KTtcclxuICAgIHRoaXMuZGVwdGgtLTtcclxuICB9XHJcblxyXG4gIHZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbihcclxuICAgIG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24sXHJcbiAgICBpc0RlZmF1bHQgPSBmYWxzZVxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcclxuICAgIHRoaXMuZGVwdGgrKztcclxuICAgIHRoaXMudmlzaXQobm9kZS5zaWduYXR1cmUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmJvZHkpO1xyXG4gICAgdGhpcy5kZXB0aC0tO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJZlN0YXRlbWVudChub2RlOiBJZlN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZUcnVlKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pZkZhbHNlKTtcclxuICB9XHJcblxyXG4gIHZpc2l0SW1wb3J0RGVjbGFyYXRpb24obm9kZTogSW1wb3J0RGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5mb3JlaWduTmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEltcG9ydFN0YXRlbWVudChub2RlOiBJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lc3BhY2VOYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJbmRleFNpZ25hdHVyZShub2RlOiBJbmRleFNpZ25hdHVyZU5vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5rZXlUeXBlKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZVR5cGUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbihcclxuICAgIG5vZGU6IEludGVyZmFjZURlY2xhcmF0aW9uLFxyXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuaW1wbGVtZW50c1R5cGVzKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5leHRlbmRzVHlwZSk7XHJcbiAgICB0aGlzLmRlcHRoKys7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgfVxyXG5cclxuICB2aXNpdE1ldGhvZERlY2xhcmF0aW9uKG5vZGU6IE1ldGhvZERlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xyXG4gICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgfVxyXG5cclxuICB2aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKFxyXG4gICAgbm9kZTogTmFtZXNwYWNlRGVjbGFyYXRpb24sXHJcbiAgICBpc0RlZmF1bHQgPSBmYWxzZVxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRSZXR1cm5TdGF0ZW1lbnQobm9kZTogUmV0dXJuU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRTd2l0Y2hDYXNlKG5vZGU6IFN3aXRjaENhc2UpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5sYWJlbCk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFN3aXRjaFN0YXRlbWVudChub2RlOiBTd2l0Y2hTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xyXG4gICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmNhc2VzKTtcclxuICAgIHRoaXMuZGVwdGgtLTtcclxuICB9XHJcblxyXG4gIHZpc2l0VGhyb3dTdGF0ZW1lbnQobm9kZTogVGhyb3dTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFRyeVN0YXRlbWVudChub2RlOiBUcnlTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5jYXRjaFZhcmlhYmxlKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5jYXRjaFN0YXRlbWVudHMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmZpbmFsbHlTdGF0ZW1lbnRzKTtcclxuICB9XHJcblxyXG4gIHZpc2l0VHlwZURlY2xhcmF0aW9uKG5vZGU6IFR5cGVEZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcclxuICB9XHJcblxyXG4gIHZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlOiBWYXJpYWJsZURlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xyXG4gICAgdGhpcy5jdXJyZW50VmFyaWFibGVUeXBlUmVjb3JkIVtub2RlLm5hbWUudGV4dF0gPSBub2RlLnR5cGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFZhcmlhYmxlU3RhdGVtZW50KG5vZGU6IFZhcmlhYmxlU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKTtcclxuICB9XHJcblxyXG4gIHZpc2l0V2hpbGVTdGF0ZW1lbnQobm9kZTogV2hpbGVTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xyXG4gICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCk7XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgfVxyXG5cclxuICB2aXNpdFZvaWRTdGF0ZW1lbnQobm9kZTogVm9pZFN0YXRlbWVudCk6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0Q29tbWVudChub2RlOiBDb21tZW50Tm9kZSk6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0RGVjb3JhdG9yTm9kZShub2RlOiBEZWNvcmF0b3JOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuYXJncyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFBhcmFtZXRlcihub2RlOiBQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRWYXJpYWJsZVR5cGVSZWNvcmQhW25vZGUubmFtZS50ZXh0XSA9IG5vZGUudHlwZVxyXG4gIH1cclxufVxyXG4iXX0=