import {
    Glob
} from "_@types_glob@7.1.1@@types/glob"

// // <!-- 关于Vue.js -->
// var data = {
//     a: 1,
// };

// // Vue实例化,包括el指向,data数据绑定methods方法绑定,
// // created生命周期钩子(钩子在实例被创建之后执行)

// var vm = new Vue({
//     el: '#newvm',
//     data: {
//         a: "原来的值",
//         b: '',
//         c: '',
//         d: "不可以改变那",
//         seen: false,
//         msg: '页面加载于 ' + new Date().toLocaleString(),
//         todos: [{
//             text: "这是第一个元素.",
//             id: "1"
//         }, {
//             text: "这是第二个元素.",
//             id: "2"
//         }, {
//             text: "这是第三个元素.",
//             id: "3"
//         }]
//     },
//     methods: {
//         submitButton: function () {
//             this.seen = true
//             this.a = '点击后,新的值'
//             alert('this is a alert for html index.')
//         }
//     },
//     // created: function () {
//     //     alert('实例已经被创建成功!')
//     // },

// })

// // 更新操作,重新赋值等.
// vm.msg = "只是一条隐藏的新消息啊"
// vm.todos.push({
//     text: "这是新添加的第四个项目"
// })
// vm.$watch('a', function (newValue, oldValue) {
//     vm.c = newValue;
//     vm.b = oldValue;
//     vm.d = "这个是一次的插值,不会改变"
//     vm.msg = '本次点击button后会出现新的信息'
// })


// // 确认
// var isConfirm = confirm('Are you ready?')

// // 判断
// if (isConfirm) {
//     alert('you choice OK!')
// } else {
//     alert('you choice cancel!')
// }

// // 函数提示
// var pointOut = function () {
//     alert('the time pass 10000ms')
// }
// setTimeout(pointOut, 5000)

// // 立即执行函数
// (function () {
//     document.write('aaa')
// })