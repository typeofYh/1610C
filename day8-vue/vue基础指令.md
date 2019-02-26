vue所有的指令都是v-开始

v-show
控制元素显示隐藏 display属性

v-on
注册事件
缩写@
事件修饰符
    .prevent  => ev.preventDefault
    .stop => ev.stopPropagation()
    .capture => 添加事件使用capture模式
    .self => 只触发自己本身的事件
    .keyCode => 键码
    .enter ctrl => 别名
    
methods
    添加自定义方法

v-bind:属性名
:属性名
动态属性

v-for="(val,index) in array"
val 数组每一项
index 下标
v-for="(val,key) in object"
val 键值
key 键名


:class={
    classname:open
}


