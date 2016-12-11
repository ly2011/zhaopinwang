# zhaopinwang

> zhaopinwang

##技术栈

- webpack2

- react

- react-router

- redux

##升级

### 2016/12/11

- 优化 webpack2 压缩

主要是 `AggressiveMergingPlugin`

### 2016/12/06

- `mouse` 事件

```css

mouseover与mouseenter

不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。

只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。


mouseout与mouseleave

不论鼠标指针离开被选元素还是任何子元素，都会触发 mouseout 事件。

只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件。
```

##BUG

### 2016/12/06

- css modules `composes` 只能用在局部环境下

- webpack2 `extract-text-webpack-plugin` 插件BUG(没法和 `sass-loader`, `less-loader` 使用)

### 2016/11/17

- 1.
在 `webpack2` 升级后, `It's no longer allowed to omit the '-loader' prefix when using loaders`

当使用加载器时，不再允许省略'-loader'前缀

- 在 `webpack2` 升级后, `react-tap-event-plugin` 报错了, 暂时处理方法: 将其禁用

- 2.
~~原因：`Webpack 2.1.0-beta23` 之后的config里不能直接包含自定义配置项
解决：将`postcss`和`devServer`替换成以下写法即可~~

```js
plugins: {
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: function () {
        return [precss, autoprefixer];
      },
      devServer: {
        contentBase: "src", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
      }
    }
  })
}
```
