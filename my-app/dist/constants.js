"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LANGUAGE_VERSIONS = exports.CODE_SNIPPETS = void 0;
var LANGUAGE_VERSIONS = exports.LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3"
};
var CODE_SNIPPETS = exports.CODE_SNIPPETS = {
  javascript: "\nfunction greet(name) {\n\tconsole.log(\"Hello, \" + name + \"!\");\n}\n\ngreet(\"Zina\");\n",
  typescript: "\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log(\"Hello, \" + data.name + \"!\");\n}\n\ngreet({ name: \"Zina\" });\n",
  python: "\ndef greet(name):\n\tprint(\"Hello, \" + name + \"!\")\n\ngreet(\"Zina\")\n",
  java: "\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello World\");\n\t}\n}\n",
  csharp: 'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Zina';\necho $name;\n"
};