
var beautify = require('js-beautify');
function htmlFormat(content){
    return beautify.html_beautify(content)
    console.log('jdf format ['+filename+'] success');
}

function cssFormat(content){
    return beautify.css_beautify(content)

    f.write(filename, beautify.css_beautify(content));
    console.log('jdf format ['+filename+'] success');
}

function jsFormat(content){
    return beautify.js_beautify(content)
    f.write(filename, beautify.js_beautify(content));
    console.log('jdf format ['+filename+'] success');
}
module.exports = function (content, file, settings) {
    // 只对 js 类文件进行处理
    var result=false;
    if(file.ext=='.html'){
        result= htmlFormat(content)
    }else if(file.ext=='.css'){
        result= cssFormat(content);
    }else if(file.ext=='.js'){
        result=jsFormat(content)
    }
    return result;

}