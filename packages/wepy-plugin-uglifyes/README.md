# wepy JS压缩插件

## 安装

```
npm i -D wepy-plugin-uglifyes
```

## 配置`wepy.config.js`

```
module.exports.plugins = {
    'uglifyes': {
        filter: /\.js$/,
        config: {
        }
    },
};
```


## 参数说明

[uglify-es](https://github.com/mishoo/UglifyJS2/tree/harmony)