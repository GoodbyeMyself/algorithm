/**

 * 队列、栈的实现

 * 队列是一种先进先出的集合类型,栈是一种先进后出的集合类型

 * 首先定义要实现的队列、栈的API

 * 由于JS语言的特殊性,采用数组的方式来实现队列、栈是非常容易的,js中数组本来就提供了从头部插入、删除元素、从尾部插入、删除元素的功能。

 * 这里只需要简单的封装一下(js的弱类型特点,不需要像JAVA那样采用泛型来声明可以储存任意类型的数据,同时,js中数组是不定长的，可以动态扩展)

 */



/**

 * Queue说明

 * Queue()创建空队列

 * enqueue(item)添加一个元素

 * dequeue()删除最近添加的元素

 * isEmpty()队列是否为空

 * size（）队列中元素的数量

 * iterator()返回一个可迭代对象

 * Iterator说明 : 

 * 	hasNext()是否还有下一个元素

 * 	next()返回下一个元素 

 */

	function Queue() {
		this.container = []
	}

	Queue.prototype.enqueue = function (ele) {
		this.container.push(ele)
	}

	Queue.prototype.dequeue = function () {
		return this.container.shift()
	}

	Queue.prototype.isEmpty = function () {
		return !this.container.length
	}

	Queue.prototype.size = function () {
		return this.container.length
	}

	Queue.prototype.iterator = function () {
		var container = this.container;
		var current = 0;
		return {
			hasNext: function () {
				return current !== container.length
			},
			next: function () {
				return container[current++]
			}
		}
	}


/**

 * Stack说明

 * Stack()创建空栈

 * push(item)添加一个元素

 * pop()删除最近添加的元素

 * isEmpty()栈是否为空

 * size（）栈中元素的数量

 * iterator()返回一个可迭代对象

 * Iterator说明 : 

 * 	hasNext()是否还有下一个元素

 * 	next()返回下一个元素 


 */

	class Stack {

		constructor() {
			this.container = [];
		}

		push(ele) {
			this.container.unshift(ele)
		}

		pop() {
			return this.container.shift()
		}

		isEmpty() {
			return !this.container.length
		}

		size() {
			return this.container.length
		}

		iterator() {
			const container = this.container;
			let current = 0;
			return {
				hasNext: function () {
					return current !== container.length
				},
				next: function () {
					return container[current++]
				}
			}
		}
	}


/**

 * 链表方式实现

 * 链表是一种递归的数据结构，它或者为空(null)，或者是指向一个结点(node)的引用，该结点含有一个泛型的元素和一个指向另一个链表的引用。

 * 在这个定义中，结点是一个可能含有任意类型数据的抽象实体，它所包含的指向结点的应用显示了它在构造链表之中的作用。

 */

	function Node(){     // 结点表示:

		this.item=null;

		this.next=null;

	}

 




















