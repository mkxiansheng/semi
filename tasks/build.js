const fs = require('fs')
const path = require('path')
const sass = require('node-sass')

const configs = {
    file: path.resolve(__dirname, '..', 'src/index.scss'),
    outFile: path.resolve(__dirname, '..', 'dist/index.css')
}

sass.render({
    ...configs,
    outputStyle: 'expanded', // 压缩 compressed
    sourceMap: true,
    precision: 6,
    sourceMapContents: true
}, (err, res) => {
    if (err) {
        throw err;
    }
    fs.writeFile(configs.outFile, res.css, (err) => {
        if (err) {
            throw err;
        }
        console.log('编译完成')
    })
})