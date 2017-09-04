/*
* @Author: YAN7
* @Date:   2017-09-04 15:24:59
* @Last Modified by:   YAN7
* @Last Modified time: 2017-09-04 22:28:10
*/
// import _ from "underscore";
const _ = require("underscore");

// 返回一个封装的对象. 在封装的对象上调用方法会返回封装的对象本身,使对象可以使用_的各种api,直到 value 方法调用为止.

// 编写一个程序来为"10瓶啤酒"作词;

// 命令式编程


const command = ()=> {
	let commandLyrics = [];
	for (len = 20; len > 0; len--) {
		commandLyrics.push(`墙上有${len}瓶啤酒`);
		commandLyrics.push(`${len}瓶啤酒`);
		commandLyrics.push(`拿一个下来，分给大家`);
		len > 1 ?	commandLyrics.push(`墙上还有${len-1}瓶啤酒`) : commandLyrics.push(`墙上已经没有啤酒了`);
	}
	return commandLyrics;
}

// console.log(command());

// 函数式编程

const lyricsSegment = n => _.chain([])
	.push(`墙上有${n}瓶啤酒`)
	.push(`${n}瓶啤酒`)
	.push(`拿一个下来，分给大家`)
	.tap(lyrics=> {
		n > 1 ? lyrics.push(`墙上还有${n-1}瓶啤酒`) : lyrics.push(`墙上已经没有啤酒了`);
	})
	.value();

// console.log(commandFunc(10));

const song = (start, end, lyricGen)=> _.reduce(_.range(start, end, -1), (acc, n)=> acc.concat(lyricGen(n)), []);
const singSong = song(10, 4, lyricsSegment);

// this指向调用时的上下文
const bFunc = function() {return this};
const b = {a: 12, fun: bFunc};

// 元编程
function Point2D(x, y) {
	this._x = x;
	this._y = y;
}

const point2d = new Point2D(10, 20);

function Point3D(x, y, z) {
	Point2D.call(this, x, y);
	this._z = z;
}

const point3d = new Point3D(1, 2, 3);
// console.log(point3d);

// applicative编程--函数A作为参数提供给函数B， 函数B也叫高阶函数
// 高阶函数的三个典型例子--reduce,map,filter

let arr = [1,2,3,4,5,6,7,8,9,10];

arr.map(i=> i + 1);
arr.reduce((a, b)=> a + b);
arr.filter(i=> i % 2 === 0);

/*
console.log(arr.map(i=> i + 1));
console.log(arr.reduce((a, b)=> a + b));
console.log(arr.filter(i=> i % 2 === 0));
*/

let arr1 = {a: 1, b: 2};
// Object.keys 等同与 Reflect.ownKeys, 都是返回目标对象的键的组成的数组
// console.log(Reflect.ownKeys(arr1))
console.log(Object.values(arr1));