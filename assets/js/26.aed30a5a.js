(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{676:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Solidity源文件中可以包含任意多个合约定义、导入源文件指令、版本标识指令，结构体、枚举和函数定义.")]),s._v(" "),t("h3",{attrs:{id:"spdx-许可证标识符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spdx-许可证标识符"}},[s._v("#")]),s._v(" SPDX 许可证标识符")]),s._v(" "),t("p",[s._v("如果源代码可用，则可以更好地建立对智能合约的信任。由于提供源代码总是会涉及版权方面的法律问题，因此 Solidity 编译器鼓励使用机器可读的SPDX 许可证标识符。每个源文件都应以说明其许可证的注释开头：")]),s._v(" "),t("div",{staticClass:"language-sol line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sol"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// SPDX-License-Identifier: MIT")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("编译器不会验证许可证是否是SPDX 允许的 列表的一部分，但它会在:ref:"),t("code",[s._v("bytecode 元数据 <metadata>")]),s._v("_中包含提供的字符串。")]),s._v(" "),t("p",[s._v("如果您不想指定许可证或源代码不是开源的，请使用特殊值UNLICENSED。")]),s._v(" "),t("p",[s._v("当然，提供此评论并不能免除您与许可相关的其他义务，例如必须在每个源文件或原始版权所有者中提及特定的许可标头。")]),s._v(" "),t("p",[s._v("编译器可以在文件级别的文件中的任何位置识别注释，但建议将其放在文件的顶部。")]),s._v(" "),t("p",[s._v("有关如何使用 SPDX 许可证标识符的更多信息，请访问 SPDX 网站。")]),s._v(" "),t("h3",{attrs:{id:"pragmas关键字和版本标识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pragmas关键字和版本标识"}},[s._v("#")]),s._v(" Pragmas关键字和版本标识")]),s._v(" "),t("p",[s._v("关键字 pragma 版本标识指令，用来启用某些编译器检查，版本标识 pragma 指令通常只对本文件有效，所以我们需要把这个版本标识 pragma 添加到项目中所有的源文件。如果使用了 import 导入其他的文件, 标识 pragma 并不会从被导入的文件，加入到导入的文件中。")]),s._v(" "),t("p",[s._v("为了避免未来被可能引入不兼容更新的编译器所编译，源文件可以（也应该）使用版本标识 pragma 所注解。 我们力图把这类不兼容变更做到尽可能小，但是，Solidity 本身就处在快速的发展之中，所以我们很难保证不引入修改语法的变更。 因此对含重大变更的版本，通读变更日志永远是好办法，变更日志通常会有版本号表明更新点。")]),s._v(" "),t("p",[s._v("版本号的形式通常是 0.x.0 或者 x.0.0。")]),s._v(" "),t("p",[s._v("版本标识使用如下:")]),s._v(" "),t("div",{staticClass:"language-sol line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sol"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pragma")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("solidity")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),t("span",{pre:!0,attrs:{class:"token version number"}},[s._v("0.5.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样，源文件将既不允许低于 0.5.2 版本的编译器编译， 也不允许高于（包含） 0.6.0 版本的编译器编译（第二个条件因使用 ^ 被添加）。 这种做法的考虑是，编译器在 0.6.0 版本之前不会有重大变更，所以可确保源代码始终按预期被编译。 上面例子中不固定编译器的具体版本号，因此编译器的补丁版也可以使用。")]),s._v(" "),t("p",[s._v("可以使用更复杂的规则来指定编译器的版本，表达式遵循 npm 版本语义。")]),s._v(" "),t("blockquote",[t("p",[s._v("Pragma 是 pragmatic information 的简称，微软 Visual C++ 文档 中译为标识。 Solidity 中沿用 C ，C++ 等中的编译指令概念，用于告知编译器 如何 编译。 ——译者注")])]),s._v(" "),t("blockquote",[t("p",[s._v("使用版本标准不会改变编译器的版本，它不会启用或关闭任何编译器的功能。 他仅仅是告知编译器去检查版本是否匹配， 如果不匹配，编译器就会提示一个错误。")])]),s._v(" "),t("h3",{attrs:{id:"abi-编码器编译指示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abi-编码器编译指示"}},[s._v("#")]),s._v(" ABI 编码器编译指示")]),s._v(" "),t("p",[s._v("通过使用或您可以在 ABI 编码器和解码器的两种实现之间进行选择。pragma abicoder v1pragma abicoder v2")]),s._v(" "),t("p",[s._v("新的 ABI 编码器 (v2) 能够对任意嵌套的数组和结构进行编码和解码。它可能会产生不太理想的代码，并且没有像旧编码器那样接受那么多的测试，但从 Solidity 0.6.0 开始，它被认为是非实验性的。您仍然必须使用. 由于它将默认从 Solidity 0.8.0 开始激活，因此可以选择使用.pragma abicoder v2;pragma abicoder v1;")]),s._v(" "),t("p",[s._v("新编码器支持的类型集是旧编码器支持的类型的严格超集。使用它的合约可以与没有限制的合约进行交互。只有当非合约不尝试进行需要仅由新编码器支持的解码类型的调用时，反向才是可能的。编译器可以检测到这一点，并会发出错误。简单地为您的合约启用就足以使错误消失。abicoder v2abicoder v2")]),s._v(" "),t("blockquote",[t("p",[s._v("此编译指示适用于激活它的文件中定义的所有代码，无论该代码最终在哪里结束。这意味着选择使用 ABI 编码器 v1 编译源文件的合约仍然可以包含通过从另一个合约继承新编码器的代码。如果新类型仅在内部使用而不在外部函数签名中使用，则允许这样做。")])]),s._v(" "),t("blockquote",[t("p",[s._v("在 Solidity 0.7.4 之前，可以使用 选择 ABI 编码器 v2 ，但无法明确选择编码器 v1，因为它是默认设置。pragma experimental ABIEncoderV2")])]),s._v(" "),t("h3",{attrs:{id:"标注实验性功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标注实验性功能"}},[s._v("#")]),s._v(" 标注实验性功能")]),s._v(" "),t("p",[s._v("第2个标注是用来标注实验性阶段的功能，它可以用来启用一些新的编译器功能或语法特性。 当前支持下面的一些实验性标注:")]),s._v(" "),t("p",[s._v("ABIEncoderV2\n从Solidity 0.7.4开始， ABI coder v2 不在作为实验特性，而是可以通过"),t("code",[s._v("pragma abicoder v2")]),s._v(" 启用，查看上面。")]),s._v(" "),t("h3",{attrs:{id:"smtchecker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smtchecker"}},[s._v("#")]),s._v(" SMTChecker")]),s._v(" "),t("p",[s._v("当我们使用自己编译的 Solidity 编译器（ 参考 build instructions） 的时候，这个模块可以启用。 在 Ubuntu PPA 发布的编译器的版本里 SMT solver 功能是启用的，但是其他版本如：solc-js, Docker 镜像版本, Windows 二进制版本，静态编译的 Linux 二进制版本 是没有启用的。")]),s._v(" "),t("blockquote",[t("p",[s._v("译者注： SMT 全称是：Satisfiability modulo theories，用来“验证程序等价性”。")])]),s._v(" "),t("p",[s._v("使用 pragma experimental SMTChecker;, 就可以获得 SMT solver 额外的安全检查。但是这个模块目前不支持 Solidity 的全部语法特性，因此有可能输出一些警告信息。")]),s._v(" "),t("h2",{attrs:{id:"导入其他源文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入其他源文件"}},[s._v("#")]),s._v(" 导入其他源文件")]),s._v(" "),t("h3",{attrs:{id:"语法与语义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法与语义"}},[s._v("#")]),s._v(" 语法与语义")]),s._v(" "),t("p",[s._v("Solidity 支持的导入语句来模块化代码，其语法跟 JavaScript（从 ES6 起）非常类似。 尽管 Solidity 不支持 default export 。")]),s._v(" "),t("blockquote",[t("p",[s._v("ES6 即 ECMAScript 6.0，ES6是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布。 ——译者注")])]),s._v(" "),t("p",[s._v("在全局层面上，可使用如下格式的导入语句：")]),s._v(" "),t("div",{staticClass:"language-sol line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sol"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filename"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("此语句将从 “filename” 中"),t("strong",[s._v("导入所有的全局符号到当前全局作用域")]),s._v("中（不同于 ES6，Solidity 是向后兼容的）。")]),s._v(" "),t("p",[s._v("这种形式已经不建议使用，因为它会无法预测地污染当前命名空间。 如果在“filename”中添加新的符号，则会自动添加出现在所有导入 “filename” 的文件中。 更好的方式是明确导入的具体 符号。")]),s._v(" "),t("p",[s._v('向下面这样，创建了新的 symbolName 全局符号，他的成员都来自与导入的 "filename" 文件中的全局符号，如：')]),s._v(" "),t("div",{staticClass:"language-sol line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sol"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" symbolName "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filename"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后所有全局符号都以"),t("code",[s._v("symbolName.symbol")]),s._v("格式提供。 此语法的变体不属于ES6，但可能有用：")]),s._v(" "),t("div",{staticClass:"language-sol line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sol"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filename"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" symbolName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("它等价于 "),t("strong",[s._v('import * as symbolName from "filename";')]),s._v("。")]),s._v(" "),t("p",[s._v("如果存在命名冲突，则可以在导入时重命名符号。例如，下面的代码创建了新的全局符号 alias 和 symbol2 ，引用的 symbol1 和 symbol2 来自 “filename” 。")]),s._v(" "),t("div",{staticClass:"language-sol line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sol"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("symbol1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" alias"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" symbol2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filename"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径"}},[s._v("#")]),s._v(" 路径")]),s._v(" "),t("p",[s._v("上文中的 filename 总是会按路径来处理，以 / 作为目录分割符、以 . 标示当前目录、以 .. 表示父目录。 当 . 或 .. 后面跟随的字符是 / 时，它们才能被当做当前目录或父目录。 只有路径以当前目录 . 或父目录 .. 开头时，才能被视为相对路径。")]),s._v(" "),t("p",[s._v("用 "),t("strong",[s._v('import "./filename" as symbolName;')]),s._v(" 语句导入当前源文件同目录下的文件 filename 。 如果用 "),t("strong",[s._v('import "filename" as symbolName;')]),s._v(" 代替，可能会引入不同的（如在全局 include directory 中）文件。")]),s._v(" "),t("p",[s._v("最终导入哪个文件取决于编译器（见下文 在实际的编译器中使用）到底是怎样解析路径的。 通常，目录层次不必严格映射到本地文件系统， 它也可以映射到能通过诸如 ipfs，http 或者 git 发现的资源。")]),s._v(" "),t("blockquote",[t("p",[s._v("通常使用相对引用 "),t("strong",[s._v('import "./filename.sol";')]),s._v(" 并且避免使用 .. ，后面这种方式可以使用全局路径并设置映射，下面会有解释。")])]),s._v(" "),t("h3",{attrs:{id:"在实际的编译器中使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在实际的编译器中使用"}},[s._v("#")]),s._v(" 在实际的编译器中使用")]),s._v(" "),t("p",[s._v('当运行编译器时，它不仅能指定如何发现路径的第一个元素，还可指定路径前缀 重映射remapping。 例如，github.com/ethereum/dapp-bin/library 会被重映射到 /usr/local/dapp-bin/library ， 此时编译器将从重映射位置读取文件。如果重映射到多个路径，优先尝试重映射路径最长的一个。 这允许将比如 "" 被映射到 "/usr/local/include/solidity" 来进行“回退重映射”。 同时，这些重映射可取决于上下文，允许你配置要导入的包，比如同一个库的不同版本。')]),s._v(" "),t("p",[s._v("solc:")]),s._v(" "),t("p",[s._v("对于 solc（命令行编译器），这些重映射以 context:prefix=target 形式的参数提供。 其中，context: 和 =target 部分是可选的（此时 target 默认为 prefix ）。 所有重映射的值都是被编译过的常规文件（包括他们的依赖），这个机制完全是向后兼容的（只要文件名不包含 = 或 : ）， 因此这不是一个破坏性修改。 在 content 目录或其子目录中的源码文件中，所有导入语句里以 prefix 开头的导入文件都将被用 target 替换 prefix 来重定向。")]),s._v(" "),t("p",[s._v("举个例子，如果你已克隆 github.com/ethereum/dapp-bin/ 到本地 /usr/local/dapp-bin ， 可在源文件中使用：")]),s._v(" "),t("div",{staticClass:"language-sol line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sol"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/ethereum/dapp-bin/library/iterable_mapping.sol"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" it_mapping"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后运行编译器：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("solc github.com/ethereum/dapp-bin/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/dapp-bin/ source.sol\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("举个更复杂的例子，假设你依赖了一些使用了非常旧版本的 dapp-bin 的模块。 旧版本的 dapp-bin 已经被 checkout 到 /usr/local/dapp-bin_old ，此时你可使用：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("solc module1:github.com/ethereum/dapp-bin/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/dapp-bin/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nmodule2:github.com/ethereum/dapp-bin/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/dapp-bin_old/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsource.sol\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这样， module2 中的所有导入都指向旧版本，而 module1 中的导入则获取新版本。")]),s._v(" "),t("blockquote",[t("p",[s._v("solc 只允许包含来自特定目录的文件：它们必须位于显式地指定的源文件目录（或子目录）中，或者重映射的目标目录（或子目录）中。 如果你想直接用绝对路径来包含文件，只需添加重映射 /=/。")])]),s._v(" "),t("p",[s._v("如果有多个重映射指向一个有效文件，那么具有最长公共前缀的重映射会被选用。")]),s._v(" "),t("p",[s._v("Remix:")]),s._v(" "),t("p",[s._v("Remix 提供一个为 github 源代码平台的自动重映射，它将通过网络自动获取文件： 比如，你可以使用:")]),s._v(" "),t("p",[s._v("导入一个 map 迭代器。")]),s._v(" "),t("p",[s._v("未来， Remix 可能支持其他源代码平台。")]),s._v(" "),t("h3",{attrs:{id:"注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[s._v("#")]),s._v(" 注释")]),s._v(" "),t("p",[s._v("可以使用单行注释（//）和多行注释（/"),t("em",[s._v("...")]),s._v("/）")]),s._v(" "),t("div",{staticClass:"language-sol line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sol"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是一个单行注释。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n这是一个\n多行注释。\n*/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[s._v("#")]),s._v(" 注解")]),s._v(" "),t("p",[s._v("单行注释由任何 unicode 行终止符(如采用utf8编码的：LF，VF，FF，CR，NEL，LS或PS) 终止。 在注释之后终止符代码仍然是源码的一部分。如果它不是ascii符号（NEL，LS和PS），它会导致解析器错误。")]),s._v(" "),t("p",[s._v("此外，有另一种注释称为 natspec 注释，可参考 风格指南- 描述注释。")]),s._v(" "),t("p",[s._v("它们是用三个反斜杠（///）或双星号开头的块（/** ... */）书写，它们应该直接在函数声明或语句上使用。 可在注释中使用 Doxygen 样式的标签来文档化函数、 标注形式校验通过的条件，和提供一个当用户试图调用一个函数时显示给用户的 确认性文字。")]),s._v(" "),t("p",[s._v("在下面的例子中，我们记录了合约的标题，并解释了两个传入参书和两个返回值的翻译。")]),s._v(" "),t("div",{staticClass:"language-sol line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sol"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// SPDX-License-Identifier: GPL-3.0 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pragma")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("solidity")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token version number"}},[s._v("0.4.21")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token version number"}},[s._v("0.9.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** @title 形状计算器。 */")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("contract")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("tinyCalculator")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** @dev 求矩形表明面积与周长。 * @param w 矩形宽度。 * @param h 矩形高度。 * @return s 求得表面积。 * @return p 求得周长。 */")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rectangle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint")]),s._v(" w"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" w "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("w "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);