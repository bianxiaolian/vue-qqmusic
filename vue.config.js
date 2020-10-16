module.exports = {
    // configureWebpack: {
    //     externals: {
    //         BMap: 'BMap'
    //     }
    // },
    devServer: {
        historyApiFallback: true,
        proxy: { // 配置跨域
            '/api': {
                target: 'https://thdvuyup.lc-cn-n1-shared.com', // 这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true, // 允许跨域
                pathRewrite: {
                    /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
                          实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
                         */
                    '^/apis': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/styles/base.scss";'

            }
            // postcss: {
            //     plugins: [
            //         require('postcss-px-to-viewport')({
            //             viewportWidth: 750,
            //             viewportHeight: 1334,
            //             unitPrecision: 3,
            //             viewportUnit: 'vw',
            //             "selectorBlackList": [".ignore", ".hairlines"], // 这里是过滤不转换的css，支持正则，如果框架本身把单位写死支持移动端，可以通过这个过滤掉，比如vux UI框架需要过滤掉['.ignore', '.hairlines', /^\.weui/, /^\.dp/, /^\.scroller/, /^\.ignore/],
            //             minPixelValue: 1,
            //             mediaQuery: false
            //         })
            //     ]
            // }

        }
    }
}