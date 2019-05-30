import Printer from "../lib/Printer.js";

const printer = new Printer();

const tree = {
    type: "source",
    children: [
        { type: "line", children: [
            { type: "text", value: "while" },
            { type: "text", value: " " },
            { type: "text", value: "(" },
            { type: "text", value: "true" },
            { type: "text", value: ")" },
            { type: "text", value: " " },
            { type: "text", value: "{" }
        ]},
        { type: "indent", children: [
            {
                type: "line",
                children: [
                    {type: "text", value: "5"},
                    {type: "text", value: " "},
                    {type: "text", value: "+"},
                    {type: "text", value: " "},
                    {type: "text", value: "3"},
                    {type: "text", value: ";"}
                ]
            },
            { type: "indent", children: [
                {
                    type: "line",
                    children: [
                        {type: "text", value: "5"},
                        {type: "text", value: " "},
                        {type: "text", value: "+"},
                        {type: "text", value: " "},
                        {type: "text", value: "3"},
                        {type: "text", value: ";"}
                    ]
                },
                {
                    type: "line",
                    children: [
                        {type: "text", value: "5"},
                        {type: "text", value: " "},
                        {type: "text", value: "+"},
                        {type: "text", value: " "},
                        {type: "text", value: "3"},
                        {type: "text", value: ";"}
                    ]
                }
            ]},
            {
                type: "line",
                children: [
                    {type: "text", value: "5"},
                    {type: "text", value: " "},
                    {type: "text", value: "+"},
                    {type: "text", value: " "},
                    {type: "text", value: "3"},
                    {type: "text", value: ";"}
                ]
            }
        ]},
        { type: "line", children: [
            { type: "text", value: "}" }
        ]}
    ]
};

console.log(printer.print(tree));
