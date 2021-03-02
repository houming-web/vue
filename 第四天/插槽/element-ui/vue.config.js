
module.exports={
    devServer:{
        // proxy:'http://localhost:9527',
        proxy:{
            "^/api":{
                target:'http://localhost:9527',
                pathRewrite:{
                    '^/api':''
                },
                changeOrigin:true
            }
        }
    }
    
}