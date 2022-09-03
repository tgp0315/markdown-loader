
//引入库
const hljs = require('highlight.js')
const { marked } = require('marked')
module.exports = source => {
  const rendererMD = new marked.Renderer();
  marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });
  marked.setOptions({
      highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
  const html = marked(source)
  return html
}
