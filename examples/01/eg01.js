/*
* @Author: YAN7
* @Date:   2017-08-31 22:21:02
* @Last Modified by:   YAN7
* @Last Modified time: 2017-09-04 22:24:58
*/

// node 没有import api
// import _ from "underscore";
const _ = require("underscore");

/*
	函数式第一个特点： 利用箭头函数实现链式编程
*/

// 常规写法
function spalt(func) {
	return function(arr) {
		return func.apply(null, arr);
	}
}

const foo = spalt((x,y)=> x+y);
const result = foo([1,2]); // 3

// 函数式编程写法为
const spaltFunc = func => arr => func.apply(null, arr);
const foo1 = spaltFunc((x,y)=> x + y);
const result1 = foo1([2, 3]); // 5

/*
	函数式编程的第二个特点：以函数为抽象单元，将函数粒子化
*/

// 一个方法的常规写法,将所有功能写在一个函数中
const parseAge = age => {
	if (!_.isstring(age)) {
		throw new Error("Expecting a string")
	}
	let a;
	console.log("Attempting to parse an age");
	a = parseIng(age);
	if(isNaN(a)) {
		console.log(`Could not parseage: ${age}`)
	}
	return a;
}

// 函数式写法，将输出错误，警报，信息的功能抽离出来作为一个独立的函数

const fail = err => {
	throw new Error(thing);
}

const warn = warn => {
	console.log(`WARNING: ${warn}`)
}

const note = note => {
	console.log(`NOTE: ${note}`)
}

const parseAgeFunc = age => {
	if (_.isString(age)) {
		fail("Expecting a string");
	}
	let a;
	note("Attempting to parse an age")
	a = parseInt(age, 10);
	if (isNaN(a)) {
		warn(`Could not parse age: ${age}`)
		a = 0;
	}
	return a;
}


/*
	给数据排序
 */

const compareElement = (x, y)=> {
	if (x - y > 0) {
		return 1;
	} else {
		return -1;
	}
}

// 更好的写法
const compareElementFunc = (x, y)=> x < y;

const arr = [1,2,3,4,5,6,1,2,123,124,45,67];
const arr2 = arr.sort(compareElement);
// sort会改变原数组
// console.log(`${arr == arr2}`);

const performTask = arr => {
	_.each(arr, elem=> {
		console.log(arr[i]);
	})
}

// performTask([1,2,3,4,5,6]);
