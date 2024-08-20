const path = require("path")

module.exports = {
    mode: "development",
    entry: [path.join(__dirname, "packages/core/src", "index.ts")], // 入口文件
    output: {
        path: path.resolve(__dirname, "build"), // 输出目录的绝对路径，这里是根目录下的build
        filename: "bundle.js" // 输出文件的名称
    },
    resolve: { // 配置模块解析，在导入模块时可以省略这些扩展名
        extensions: [".tsx", ".ts", ".js"]  // 顺序定义Webpack 在解析文件时会考虑的扩展名
    },
    devtool: false, // 不生成源映射文件
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: "assets/resource"
            }
        ]
    }
}