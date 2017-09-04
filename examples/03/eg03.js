/*
* @Author: YAN7
* @Date:   2017-09-04 18:15:28
* @Last Modified by:   YAN7
* @Last Modified time: 2017-09-04 22:28:17
*/

const _ = require("underscore");

// 测试词法作用域
a = "outer";
function afun() {
	var a = "middle";
	return _.map([1,2,3], i=> {
		var a = "inner";
		console.log(`${a}${i}`)
	})
}

// afun();

function add (a) {
	return function (b) {
		console.log(a+b);
		return a + b;
	}
}

// const add = a => b => a + b;
// console.log(add(1)(2));

// 返回“!”
// ({f: function(){return this}}).f.call("!")

// 闭包的经典题目
// const closure = n => {
// 	for (var i = 0; i < n; i++ )
// 		return i
// };

function closure(n) {
	for (var i = 0; i < n; i++);
	return a;
}

// console.log(closure(5));

// 闭包

const sayHi = ()=> {
	const hi = "hello";
	return function () {
		console.log(hi);
	}
}

// sayhi执行完应该销毁，但是因为里面的函数有引用sayHi作用域内的hi变量，所以hi变量并不会被回收，这就是闭包
const say = sayHi();
// say();

/*
* 闭包不但可以捕获变量，还可以捕获参数
* 像这种利用箭头函数实现的链式编程也是利用闭包可以捕获函数参数的特性，每次只传一个参数，在最后的函数中统一处理
* 这种函数也叫函数的柯里化
* 这种函数还有一种好处，就是像一种工厂函数，每个阶段都可以传入不同的参数，以生成不同的函数留给后续调用；
*/

const createScaleFunction = factory => v => v.map(n=> n * factory);
const scale = createScaleFunction(3);
const end = scale([1,2,3]);
console.log(end);

/*
* 模拟闭包，捕获变量
*/

