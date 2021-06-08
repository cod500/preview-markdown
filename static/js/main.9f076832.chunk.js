(this["webpackJsonppreview-mkdwn"]=this["webpackJsonppreview-mkdwn"]||[]).push([[0],{13:function(n,e,t){},14:function(n,e,t){},16:function(n,e,t){},17:function(n,e,t){},18:function(n,e,t){},19:function(n,e,t){},231:function(n,e,t){},232:function(n,e,t){"use strict";t.r(e);var i=t(1),a=t.n(i),r=t(8),s=t.n(r),o=(t(13),t(14),t(0)),d=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"Preview Markdown"})})},l=t(6),c=t(5),u=t.n(c),h=(t(16),t.p+"static/media/copy.835b9534.svg"),g=t.p+"static/media/clear.597a8daa.svg",b=function(n){var e=n.initialValue,t=n.changedText,i=function(){var n=document.querySelector("#clear-btn"),e=document.querySelector("#copy-btn"),i=document.querySelector("#input").value;t(i),""===i?(n.style.display="none",e.style.display="none"):(n.style.display="block",e.style.display="block")};return Object(o.jsxs)("div",{className:"input-area",children:[Object(o.jsx)("h2",{className:"input-area-title",children:"Input"}),Object(o.jsx)("textarea",{title:"Input",id:"input",defaultValue:e,onChange:i,placeholder:"## Enter some text!"}),Object(o.jsx)("button",{id:"clear-btn",className:"action-btn",title:"Clear text",onClick:function(){document.querySelector("#input").value="",i()},children:Object(o.jsx)("img",{src:g,alt:"Clear text"})}),Object(o.jsx)("button",{id:"copy-btn",className:"action-btn",title:"Copy text",onClick:function(){var n=document.querySelector("#input");n.select(),n.setSelectionRange(0,n.value.length),document.execCommand("copy")},children:Object(o.jsx)("img",{src:h,alt:"Copy text"})})]})},m=(t(17),function(n){var e=n.innerHtml;return Object(o.jsxs)("div",{className:"output-area",children:[Object(o.jsx)("h2",{className:"output-area-title",children:"Output"}),Object(o.jsx)("div",{id:"output",title:"Output",dangerouslySetInnerHTML:e?{__html:e}:{__html:"<h2>Enter some text!</h2>"}})]})});t(18),t(19);u.a.setOptions({xhtml:!0,highlight:function(n,e){var i=t(20),a=i.getLanguage(e)?e:"plaintext";return i.highlight(n,{language:a}).value}});var p=function(){var n=Object(i.useState)('# Preview Markdown\n\n- [Markdown tutorial](https://www.youtube.com/watch?v=HUBNt18RFbo)\n- [General Markdown syntax](https://gist.github.com/safe1981/2019322)\n- [GitHub\'s Markdown syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)\n- [Common Markdown mistakes](https://gist.github.com/DavidAnson/006a6c2a2d9d7b21b025)\n\n\n## Markdown Syntax\n\n### 1. Headings\n\n# Largest Heading\n## Second Largest Heading\n### Third Largest Heading\n###### Smallest Heading\n\n---\n\n### 2. Styling Text\n\n`Inline code`\n\n*Italic text* or _Italic text_\n\n**Bold text** or __Bold text__\n\n_**Bold and italic text**_\n\nor\n\n***Bold and italic text***\n\n**Bold with _italic nesting_**\n\n~~Strikethrough text~~\n\n> NOTE: Text is rendered on a new line only if there is an empty line in between.\n\n---\n\n### 3. Lists\n\n- Unordered list\n* Unordered list\n\n1. Ordered list\n1. Ordered list\n\n- **Writing under the same list item**\n\n  Add two to three whitespaces below a list item to render a paragraph under the list item\n\n- **Unordered list nesting**\n   - Unordered nested list item\n   - Unordered nested list item\n      - Unordered nested list item\n\n1. **Ordered list nesting**\n   1. Ordered nested list item\n   1. Ordered nested list item\n      1. Ordered nested list item\n\n1. **Ordered and unordered list nesting**\n   - Unordered nested list item\n      1. Ordered nested list item\n      1. Ordered nested list item\n   - Unordered nested list item\n\n> NOTE: Keep adding 3 whitespaces before hyphen for every level of nesting.\n\n---\n\n### 4. Hyperlinks\n\n- Contribute to [Preview Markdown](https://harshkapadia2.github.io/preview-markdown/) on [GitHub](https://github.com/HarshKapadia2/preview-markdown)!\n- Do [raise issues](https://github.com/HarshKapadia2/preview-markdown/issues) if any bugs are found.\n- [Relative link to the `Images` section below.](#5-images)\n- [Relative link to Preview Markdown\'s logo.](/preview-markdown/logo.svg)\n\n---\n\n### 5. Images\n\n![Alt text]()\n\n![Absolute link](https://user-images.githubusercontent.com/50140864/121142987-2ba86480-c85a-11eb-82bf-16621156b329.png)\n\n![Relative link](/preview-markdown/logo.svg)\n\n<img src="/preview-markdown/logo.svg" alt="Relative link to logo" width="50%" />\n\n---\n\n### 6. Quoting Text\n\nIn the words of [Selena Gomez](https://www.selenagomez.com/):\n\n> "Kindness always wins."\n\nAlso,\n\n> Quoted text\n>\n>> Nested quote\n\n---\n\n### 7. Quoting Code\n\n```javascript\nlet message = "Thank you for using Preview Markdown!";\nconsole.log(message);\n```\n\n---\n\n### 8. Task Lists\n\n- [x] Complete task\n   - [x] Complete task\n   - [x] Complete task\n- [ ] Incomplete task\n\n---\n\n### 9. Escaping Markdown Syntax\n\n*The asterisks should be rendered.*\n\nThis is how it is done: *The asterisks should be rendered.*\n\n\nCharacters that can be escaped with a backslash (`\\`) before them:\n- \\   backslash\n- `   backtick\n- \\*   asterisk\n- _   underscore\n- {}  curly braces\n- []  square brackets\n- ()  parentheses\n- \\#   hash mark\n- \\+   plus sign\n- \\-   minus sign (hyphen)\n- .   dot\n- !   exclamation mark\n\n---\n\n### 10. Tables\n\nTable head | Table head\n---------- | ----------\nfoo | bar\n| bar\nfoo\nbar | foo\n\n---\n\n### 11. Misc\n\n#### Horizontal Rule\n\n---\nor\n***\nor\n<hr />\ncan be used.\n\n#### Line Break\n\nText can rendered on a new line\n\nby adding an empty line in between.\n\nLines can also be broken and images can be spaced<br />using the `<br />` tag.\n\n#### Bold And Italic Tags\n\nThis text is <b>bold</b>, just like **this text**.\n\nThis text is in <i>italics</i>, just like *this text*.\n\n#### Paragraph Tag\n\nThe paragraph tag (`<p></p>`) can be used with the `align` attribute to align items to the center.\n\nEg:\n\n<p align="center">\n   This text is center aligned!\n   <br />\n   **Markdown syntax** will <b>not</b> work within a \'p\' tag.\n   <br />\n   <img src="/preview-markdown/logo.svg" alt="Relative link to logo" width="50%" />\n</p>\n\n---\n\nEnjoy writing Markdown! Thank you for using Preview Markdown!\n'),e=Object(l.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)(),s=Object(l.a)(r,2),d=s[0],c=s[1];Object(i.useEffect)((function(){c(u()(t))}),[t]);return Object(o.jsxs)("main",{children:[Object(o.jsx)(b,{initialValue:t,changedText:function(n){a(n)}}),Object(o.jsx)(m,{innerHtml:d})]})},w=(t(231),function(){return Object(o.jsxs)("footer",{children:["Made by\xa0",Object(o.jsx)("a",{href:"https://linktr.ee/harshgkapadia",target:"_blank",rel:"noreferrer",children:"Harsh Kapadia"}),"\xa0|\xa0",Object(o.jsx)("a",{href:"https://github.com/HarshKapadia2/preview-mkdwn",target:"_blank",rel:"noreferrer",children:"GitHub repo"})]})}),k=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(p,{}),Object(o.jsx)(w,{})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[232,1,2]]]);
//# sourceMappingURL=main.9f076832.chunk.js.map