"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserEntry = exports.cloneNode = exports.toString = exports.not = exports.isLibrary = exports.getDecorator = exports.hasDecorator = exports.isDecorator = exports.decorates = void 0;
const as_1 = require("../as");
const astBuilder_1 = require("./astBuilder");
const cloneDeep = require("lodash.clonedeep");
function decorates(node, name) {
    return node.name.text === name;
}
exports.decorates = decorates;
function isDecorator(name) {
    return (node) => decorates(node, name);
}
exports.isDecorator = isDecorator;
function hasDecorator(node, name) {
    var _a;
    let decl;
    if (node instanceof as_1.DeclarationStatement) {
        decl = node;
    }
    else {
        decl = node.declaration;
    }
    // because it could be undefined
    return ((_a = decl.decorators) === null || _a === void 0 ? void 0 : _a.some(isDecorator(name))) == true;
}
exports.hasDecorator = hasDecorator;
function getDecorator(node, name) {
    var _a;
    return (_a = node.decorators) === null || _a === void 0 ? void 0 : _a.find(isDecorator(name));
}
exports.getDecorator = getDecorator;
function isLibrary(node) {
    return node.isLibrary || node.internalPath.startsWith("~lib/rt/");
}
exports.isLibrary = isLibrary;
function not(fn) {
    return (t) => !fn(t);
}
exports.not = not;
function toString(node) {
    return astBuilder_1.ASTBuilder.build(node);
}
exports.toString = toString;
function cloneNode(node) {
    return cloneDeep(node);
}
exports.cloneNode = cloneNode;
function isUserEntry(source) {
    return source.sourceKind == as_1.SourceKind.USER_ENTRY;
}
exports.isUserEntry = isUserEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOEJBT2U7QUFDZiw2Q0FBMEM7QUFFMUMsTUFBTSxTQUFTLEdBQW1CLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTlELFNBQWdCLFNBQVMsQ0FBQyxJQUFtQixFQUFFLElBQVk7SUFDekQsT0FBOEIsSUFBSSxDQUFDLElBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ3pELENBQUM7QUFGRCw4QkFFQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxJQUFZO0lBQ3RDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZELGtDQUVDO0FBR0QsU0FBZ0IsWUFBWSxDQUMxQixJQUFnRSxFQUNoRSxJQUFZOztJQUVaLElBQUksSUFBSSxDQUFDO0lBQ1QsSUFBSSxJQUFJLFlBQVkseUJBQW9CLEVBQUU7UUFDeEMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNiO1NBQU07UUFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6QjtJQUNELGdDQUFnQztJQUNoQyxPQUFPLE9BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBSyxJQUFJLENBQUM7QUFDMUQsQ0FBQztBQVpELG9DQVlDO0FBRUQsU0FBZ0IsWUFBWSxDQUMxQixJQUEwQixFQUMxQixJQUFZOztJQUVaLE9BQU8sTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7QUFDbkQsQ0FBQztBQUxELG9DQUtDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLElBQVk7SUFDcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BFLENBQUM7QUFGRCw4QkFFQztBQUVELFNBQWdCLEdBQUcsQ0FBSSxFQUFxQjtJQUMxQyxPQUFPLENBQUMsQ0FBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBRkQsa0JBRUM7QUFFRCxTQUFnQixRQUFRLENBQUMsSUFBVTtJQUNqQyxPQUFPLHVCQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLFNBQVMsQ0FBaUIsSUFBTztJQUMvQyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsTUFBYztJQUN4QyxPQUFPLE1BQU0sQ0FBQyxVQUFVLElBQUksZUFBVSxDQUFDLFVBQVUsQ0FBQztBQUNwRCxDQUFDO0FBRkQsa0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEZWNvcmF0b3JOb2RlLFxuICBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgRGVjbGFyYXRpb25TdGF0ZW1lbnQsXG4gIFNvdXJjZSxcbiAgTm9kZSxcbiAgU291cmNlS2luZCxcbn0gZnJvbSBcIi4uL2FzXCI7XG5pbXBvcnQgeyBBU1RCdWlsZGVyIH0gZnJvbSBcIi4vYXN0QnVpbGRlclwiO1xuXG5jb25zdCBjbG9uZURlZXA6IDxUPih0OiBUKSA9PiBUID0gcmVxdWlyZShcImxvZGFzaC5jbG9uZWRlZXBcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvcmF0ZXMobm9kZTogRGVjb3JhdG9yTm9kZSwgbmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAoPElkZW50aWZpZXJFeHByZXNzaW9uPm5vZGUubmFtZSkudGV4dCA9PT0gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVjb3JhdG9yKG5hbWU6IHN0cmluZyk6IChub2RlOiBEZWNvcmF0b3JOb2RlKSA9PiBib29sZWFuIHtcbiAgcmV0dXJuIChub2RlKSA9PiBkZWNvcmF0ZXMobm9kZSwgbmFtZSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0RlY29yYXRvcihcbiAgbm9kZTogRGVjbGFyYXRpb25TdGF0ZW1lbnQgfCB7ZGVjbGFyYXRpb246IERlY2xhcmF0aW9uU3RhdGVtZW50fSxcbiAgbmFtZTogc3RyaW5nXG4pOiBib29sZWFuIHtcbiAgbGV0IGRlY2w7XG4gIGlmIChub2RlIGluc3RhbmNlb2YgRGVjbGFyYXRpb25TdGF0ZW1lbnQpIHtcbiAgICBkZWNsID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBkZWNsID0gbm9kZS5kZWNsYXJhdGlvbjsgXG4gIH0gXG4gIC8vIGJlY2F1c2UgaXQgY291bGQgYmUgdW5kZWZpbmVkXG4gIHJldHVybiBkZWNsLmRlY29yYXRvcnM/LnNvbWUoaXNEZWNvcmF0b3IobmFtZSkpID09IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWNvcmF0b3IoXG4gIG5vZGU6IERlY2xhcmF0aW9uU3RhdGVtZW50LFxuICBuYW1lOiBzdHJpbmdcbik6IERlY29yYXRvck5vZGUge1xuICByZXR1cm4gbm9kZS5kZWNvcmF0b3JzPy5maW5kKGlzRGVjb3JhdG9yKG5hbWUpKSE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xpYnJhcnkobm9kZTogU291cmNlKTogYm9vbGVhbiB7XG4gIHJldHVybiBub2RlLmlzTGlicmFyeSB8fCBub2RlLmludGVybmFsUGF0aC5zdGFydHNXaXRoKFwifmxpYi9ydC9cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3Q8VD4oZm46ICh0OiBUKSA9PiBib29sZWFuKTogKHQ6IFQpID0+IGJvb2xlYW4ge1xuICByZXR1cm4gKHQ6IFQpID0+ICFmbih0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKG5vZGU6IE5vZGUpOiBzdHJpbmcge1xuICByZXR1cm4gQVNUQnVpbGRlci5idWlsZChub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lTm9kZTxUIGV4dGVuZHMgTm9kZT4obm9kZTogVCk6IFQge1xuICByZXR1cm4gY2xvbmVEZWVwKG5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyRW50cnkoc291cmNlOiBTb3VyY2UpOiBib29sZWFuIHtcbiAgcmV0dXJuIHNvdXJjZS5zb3VyY2VLaW5kID09IFNvdXJjZUtpbmQuVVNFUl9FTlRSWTtcbn1cbiJdfQ==