# 算法

---

&emsp;&emsp;同一问题可用不同算法解决，而一个算法的质量优劣将影响到算法乃至程序的效率。算法分析的目的在于选择合适算法和改进算法。一个算法的评价主要从时间复杂度和空间复杂度来考虑。

### 时间复杂度
&emsp;&emsp;算法的时间复杂度是指执行算法所需要的计算工作量。一般来说，计算机算法是问题规模n的函数f(n)，算法的时间复杂度也因此记做。   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;T(n)=Ο(f(n))&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;因此，问题的规模n 越大，算法执行的时间的增长率与f(n) 的增长率正相关，称作渐进时间复杂度（Asymptotic Time Complexity）。

### 空间复杂度
&emsp;&emsp;算法的空间复杂度是指算法需要消耗的内存空间。其计算和表示方法与时间复杂度类似，一般都用复杂度的渐近性来表示。同时间复杂度相比，空间复杂度的分析要简单得多。

## 一个算法应该具有以下五个重要的特征：


---

### 有穷性（Finiteness）
&emsp;&emsp;算法的有穷性是指算法必须能在执行有限个步骤之后终止；
### 确切性(Definiteness)
&emsp;&emsp;算法的每一步骤必须有确切的定义；
### 输入项(Input)
&emsp;&emsp;一个算法有0个或多个输入，以刻画运算对象的初始情况，所谓0个输入是指算法本身定出了初始条件；
### 输出项(Output)
&emsp;&emsp;一个算法有一个或多个输出，以反映对输入数据加工后的结果。没有输出的算法是毫无意义的；
### 可行性(Effectiveness)
&emsp;&emsp;算法中执行的任何计算步骤都是可以被分解为基本的可执行的操作步，即每个计算步都可以在有限时间内完成（也称之为有效性）。

## 要素 

---

一，数据对象的运算和操作：

&emsp;&emsp;计算机可以执行的基本操作是以指令的形式描述的。一个计算机系统能执行的所有指令的集合，成为该计算机系统的指令系统。一个计算机的基本运算和操作有如下四类： 

&emsp;&emsp;&emsp;&emsp;1，算术运算：加减乘除等运算

&emsp;&emsp;&emsp;&emsp;2，逻辑运算：或、且、非等运算

&emsp;&emsp;&emsp;&emsp;3，关系运算：大于、小于、等于、不等于等运算

&emsp;&emsp;&emsp;&emsp;4，数据传输：输入、输出、赋值等运算 [1] 

二，算法的控制结构：

&emsp;&emsp;一个算法的功能结构不仅取决于所选用的操作，而且还与各操作之间的执行顺序有关。  

## 用js来实现所有算法逻辑

---

&emsp;&emsp;主要也是靠队列、栈的实现。

&emsp;&emsp;队列是一种先进先出的集合类型,栈是一种先进后出的集合类型

&emsp;&emsp;首先定义要实现的队列、栈的API

&emsp;&emsp;由于JS语言的特殊性,采用数组的方式来实现队列、栈是非常容易的&nbsp;,&nbsp;js中数组本来就提供了从头部插入、删除元素、从尾部插入、删除元素的功能。

&emsp;&emsp;这里只需要简单的封装一下(js的弱类型特点,不需要像JAVA那样采用泛型来声明可以储存任意类型的数据,同时,js中数组是不定长的，可以动态扩展)。




