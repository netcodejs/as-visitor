"use strict";
const decorator_1 = require("../decorator");
const utils_1 = require("../utils");
class ListMembers extends decorator_1.ClassDecorator {
    visitFieldDeclaration(node) {
        if (!node.name)
            console.log(utils_1.getName(node) + "\n");
        const name = utils_1.getName(node);
        const _type = utils_1.getName(node.type);
        this.stdout.write(name + ": " + _type + "\n");
    }
    visitMethodDeclaration(node) {
        const name = utils_1.getName(node);
        if (name == "constructor") {
            return;
        }
        const sig = utils_1.getName(node.signature);
        this.stdout.write(name + ": " + sig + "\n");
    }
    visitClassDeclaration(node) {
        this.visit(node.members);
    }
    get name() { return "list"; }
}
module.exports = decorator_1.registerDecorator(new ListMembers());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSw0Q0FBaUU7QUFDakUsb0NBQW1DO0FBRW5DLE1BQU0sV0FBWSxTQUFRLDBCQUFjO0lBQ3RDLHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxJQUF1QjtRQUM1QyxNQUFNLElBQUksR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLElBQUksYUFBYSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELE1BQU0sR0FBRyxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLElBQUksS0FBYSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FFdEM7QUFFRCxpQkFBUyw2QkFBaUIsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDbGFzc0RlY2xhcmF0aW9uLFxuICBEZWNvcmF0b3JOb2RlLFxuICBGaWVsZERlY2xhcmF0aW9uLFxuICBNZXRob2REZWNsYXJhdGlvbixcbn0gZnJvbSBcIi4uLy4uL2FzXCI7XG5pbXBvcnQgeyBDbGFzc0RlY29yYXRvciwgcmVnaXN0ZXJEZWNvcmF0b3IgfSBmcm9tIFwiLi4vZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBnZXROYW1lIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmNsYXNzIExpc3RNZW1iZXJzIGV4dGVuZHMgQ2xhc3NEZWNvcmF0b3Ige1xuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIGlmICghbm9kZS5uYW1lKSBjb25zb2xlLmxvZyhnZXROYW1lKG5vZGUpICsgXCJcXG5cIik7XG4gICAgY29uc3QgbmFtZSA9IGdldE5hbWUobm9kZSk7XG4gICAgY29uc3QgX3R5cGUgPSBnZXROYW1lKG5vZGUudHlwZSEpO1xuICAgIHRoaXMuc3Rkb3V0LndyaXRlKG5hbWUgKyBcIjogXCIgKyBfdHlwZSArIFwiXFxuXCIpO1xuICB9XG5cbiAgdmlzaXRNZXRob2REZWNsYXJhdGlvbihub2RlOiBNZXRob2REZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IG5hbWUgPSBnZXROYW1lKG5vZGUpO1xuICAgIGlmIChuYW1lID09IFwiY29uc3RydWN0b3JcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzaWcgPSBnZXROYW1lKG5vZGUuc2lnbmF0dXJlKTtcbiAgICB0aGlzLnN0ZG91dC53cml0ZShuYW1lICsgXCI6IFwiICsgc2lnICsgXCJcXG5cIik7XG4gIH1cblxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcImxpc3RcIjsgfVxuXG59XG5cbmV4cG9ydCA9IHJlZ2lzdGVyRGVjb3JhdG9yKG5ldyBMaXN0TWVtYmVycygpKTtcbiJdfQ==