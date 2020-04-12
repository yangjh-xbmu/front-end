# Jupyter 使用笔记

## 如何使用markdown语法

将单元格切换到markdown，快捷键为`m`，切换到代码为`y`

## 单元格相关操作

* 回车 编辑
* shift+enter 运行

## jupyter note 优势

* 将代码块分别运行，提高开发效率
* 方便记录笔记

## 如何安装插件

## 如何更改主题

默认颜色太亮，安装主题管理工具

```bash
pip install jupyterthemes
jt -t monokai
```

重启jupyter服务

更彻底的办法是自定义样式表，如：

```css
/* Body */
/* #notebook-container {
    width: 60%
} */

/* Markdown */
div#notebook {
    font-family: san francisco, "PingFangSC-Medium", "Microsoft YaHei";
    line-height: 20px;
    -webkit-font-smoothing: antialiased !important;
}

/* Markdown - h2 */
div#notebook h2 {
    color: #007aff;
}

/* Markdown - quote */
div#notebook blockquote{
    background-color: #f8f8f8;
    color: #505050;
    padding: 8.5px;
    margin: 0.5em -0.5em 0.5em -0.4em;
}

/* Markdown - code in paragraph */
div#notebook p code, div#notebook li code {
    font-family: Consolas, "PingFangSC-Medium", "Microsoft YaHei";
    font-size: 1em !important;
    color: #111111;
    border: 0.5px solid #cfcfcf;
    border-radius: 2px;
    background-color: #f7f7f7;
    padding: .1em .2em;
    margin: 0px 2px;
}

/* Markdown - code */
div.text_cell_render pre {
    border: 1px solid #cfcfcf;
    border-radius: 2px;
    background: #f7f7f7;
    line-height: 1.21429em;
    padding: 8.5px;
    margin: 0.5em -0.5em 0.5em -0.4em;
}
div.text_cell_render code {
    background: #f7f7f7;
}

/* Code */
div.CodeMirror pre {
    font-family: Consolas, "PingFangSC-Medium", "Microsoft YaHei";
    font-size: 11pt;
    line-height: 140%;
    -webkit-font-smoothing: antialiased !important;
}

/* Code - output */
div.output pre {
    font-family: Consolas, "PingFangSC-Medium", "Microsoft YaHei";
    line-height: 20px;
    -webkit-font-smoothing: antialiased !important;
}

/* Code - comment */
span.cm-comment {
    font-family: san francisco, "PingFangSC-Medium", "Microsoft YaHei" !important;
    font-style: normal !important;
}



/* Code - highlighting (grade3)*/
.cm-s-ipython .CodeMirror-cursor {
    border-left: 1px solid #ff711a !important;
}
.cm-s-ipython span.cm-comment {
    color: #8d8d8d;
    font-style: italic;
}
.cm-s-ipython span.cm-atom {
    color: #055be0;
}
.cm-s-ipython span.cm-number {
    color: #ff8132;
}
.cm-s-ipython span.cm-property {
    color: #303030;
}
.cm-s-ipython span.cm-attribute {
    color: #303030;
}
.cm-s-ipython span.cm-keyword {
    color: #713bc5;
    font-weight: bold;
}
.cm-s-ipython span.cm-string {
    color: #009e07;
}
.cm-s-ipython span.cm-meta {
    color: #aa22ff;
}
.cm-s-ipython span.cm-operator {
    color: #055be0;
}
.cm-s-ipython span.cm-builtin {
    color: #e22978;
}
.cm-s-ipython span.cm-variable {
    color: #303030;
}
.cm-s-ipython span.cm-variable-2 {
    color: #de143d;
}
.cm-s-ipython span.cm-variable-3 {
    color: #aa22ff;
}
.cm-s-ipython span.cm-def {
    color: #e22978;
    font-weight: bold;
}
.cm-s-ipython span.cm-error {
    background: rgba(191, 97, 106, .40);
}
.cm-s-ipython span.cm-tag {
    color: #e22978;
}
.cm-s-ipython span.cm-link {
    color: #ff8132;
}
.cm-s-ipython span.cm-storage {
    color: #055be0;
}
.cm-s-ipython span.cm-entity {
    color: #e22978;
}
.cm-s-ipython span.cm-quote {
    color: #009e07;
}
div.CodeMirror span.CodeMirror-matchingbracket {
    color: #1c1c1c;
    background-color: rgba(30, 112, 199, .30);
}
div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #1c1c1c;
    background: rgba(191, 97, 106, .40) !important;
}
.cm-s-default .cm-hr {
    color: #055be0;
}
```


 




```javascript
var a = null
```


```javascript
a = [0,3,4]
```


```javascript

```
