/**

 * 用js来实现所有算法逻辑

 * 队列、栈的实现

 * 队列是一种先进先出的集合类型，栈是一种先进后出的集合类型

 * 首先定义要实现的队列、栈的API

 */





/**

 * Queue说明

 * Queue()创建空队列

 * enqueue(item)添加一个元素

 * dequeue()删除最近添加的元素

 * isEmpty()队列是否为空

 * size（）队列中元素的数量

 * iterator()返回一个可迭代对象

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

/**

 * Stack说明

 * Stack()创建空栈

 * push(item)添加一个元素

 * pop()删除最近添加的元素

 * isEmpty()栈是否为空

 * size（）栈中元素的数量

 * iterator()返回一个可迭代对象

 */







/**

 * Iterator说明

 * hasNext()是否还有下一个元素

 * next()返回下一个元素

 */








