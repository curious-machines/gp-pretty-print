export default class Printer {
    constructor() {
        this.indent = "";
    }

    print(node) {
        const result = [];

        switch (node.type) {
            case "source":
                node.children.forEach(child => {
                    result.push(this.print(child));
                });
                break;

            case "line":
                node.children.forEach(child => {
                    result.push(this.print(child));
                });
                result.push("\n");
                break;

            case "indent":
                this.indent += "    ";

                node.children.forEach(child => {
                    if (child.type !== "indent") {
                        result.push(this.indent);
                    }
                    result.push(this.print(child));
                });

                this.indent = this.indent.substring(0, this.indent.length - 4);
                break;

            case "text":
                return node.value;

            default:
                throw new TypeError(`unrecognized node type: ${node.type}`);
        }

        return result.join("");
    }
}
