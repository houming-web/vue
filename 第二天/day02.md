## 总结所有指令
<!-- v-text : 更新元素的 textContent
  v-html : 更新元素的 innerHTML
  v-if : 如果为true, 当前标签才会输出到页面
  v-else: 如果为false, 当前标签才会输出到页面
  v-show : 通过控制display样式来控制显示/隐藏
  v-for : 遍历数组/对象
  v-on : 绑定事件监听, 一般简写为@
  v-bind : 强制绑定解析表达式, 可以省略v-bind
  v-model : 双向数据绑定
  v-cloak : 使用它防止闪现表达式, 与css配合: [v-cloak] { display: none }
  v-pre 跳过解析当前元素
  v-once 只渲染元素和组件一次, 后续渲染会跳过
  ref : 为某个元素注册一个唯一标识, vue对象通过$els属性访问这个元素对象
    获取DOM元素或组件实例对象 -->
## 谈谈生命周期函数
 <!-- vue对象的生命周期
  1). 初始化显示
    * beforeCreate()
    * created()
    * beforeMount()
    * mounted()
  2). 更新状态
    * beforeUpdate()
    * updated()
  3). 销毁vue实例: vm.$destory()
    * beforeDestory()
    * destoryed()
2. 常用的生命周期方法
  created()/mounted(): 发送ajax请求, 启动定时器等异步任务
  beforeDestory(): 做收尾工作, 如: 清除定时器 -->


## 请自定义一个指令（定义和使用）
Vue.directive('split',function(el,binding){
    return el.textContent=binding.value.split('e')
})

## 请自定义一个过滤器（定义和使用）
Vue.filter('time',function(data,value){
    return dayjs(data).format(value)
})

## 谈谈闭包
闭包产生的条件：1.函数嵌套函数
               2.内部函数使用外部函数变量
               3. 外部函数调用

               闭包的特点：1. 可以在全局间接操作局部变量
                        2.局部变量生命周期变长

                闭包的出生：当内部函数使用外部函数的变量时闭包就产生了
                闭包的死亡：当内部函数没有被调用时成为垃圾对象时

                闭包的缺点：容易造成内存泄漏

                解决方法：手动释放闭包，减少使用闭包



