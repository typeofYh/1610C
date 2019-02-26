props:[key] || {
    key:String|Object|Number|Boolean|Function|Array,
    key:{
        type:String|Object|Number|Boolean|Function|Array,
        default:默认值, 如果是对象或数组default变成函数返回对应值
        required:必填项,
        validator:自定义校验
    }
}