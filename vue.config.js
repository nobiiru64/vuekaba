module.exports = {
    runtimeCompiler: true,
    devServer: {
        proxy: {
            "^/api": {
                target: "https://2ch.hk/",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
        }
    }
}
