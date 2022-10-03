const path = require('path')

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['js', 'jsx']
    },
    entry: {
        app: ['./client.jsx']
    }, // 입력
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    } // 출력
}