// 1.获取类名
// 2.构造函数
function getClass(classname,obj){//函数 类名 参数是类名和范围
      var obj=obj||document;//声明范围在整篇文档或者某一范围，隐式调用boolean类型判断
      if(obj.getElementsByClassName){//判断浏览器有无其属性
      	return obj.getElementsByClassName(classname);//有，用其输出
      }else{
      	 var newarr=[];
      	 var objs=obj.getElementsByTagName("*");//声明某个文档的标签用*
      	 for (var i = 0; i < objs.length; i++) {//遍历
                  if(checkClass(objs[i].className,classname)){
      	 	// if(objs[i].classname===classname){//如果objs中的某个类名等于原类名
      	 		newarr.push(objs[i]);//将obj加入到数组中
      	 	}
      	 }
      	 return newarr;//返回arr
      }
} 
//box one two  classname
//two  val
function checkClass(classname,val){
      var arr=classname.split(" ");//将字符串转化为数组
      for (var i = 0; i < arr.length; i++) {//遍历
            if(arr[i]==val){//相等
                  return 1;
            }
      }
      return  0;
}
// 获取样式的兼容函数
//currentStyle  IE
//getComputedStyle   w3c
//return    具体的值
//obj  对象    pro   css具体的属性
 function getStyle(obj,pro){
      if(obj.currentStyle){//判断属性
            return obj.currentStyle[pro]; //ie
      }else{
            return getComputedStyle(obj,null)[pro];//w3c
      }
}
//$函数的封装
//目的是要获得  div  .box   #box
//$("div")   $(".box")   $("#box")   $(function(){})
function $(selector,obj){//参数 第一个为传入的，要检测的   第二个为范围
      var obj=obj||document;//判断范围
      if(typeof selector=="string"){//检测结果类型为字符串
            selector=selector.replace(("/^\s*|\s*$/g"),"");//将空格去掉，用字符串的替代，空格用正则
            if(selector.charAt(0)=="."){//判断第一个字符是什么，用字符串返回指定位置的字符
                  return getClass(selector.slice(1),obj);//调用getClass函数，selector.slice(1)是截取字符串
            }else if(selector.charAt(0)=="#"){//判断第一个字符是什么，用字符串返回指定位置的字符
                  return document.getElementById(selector.slice(1));
            }else if(/^[a-zA-Z][a-zA-Z0-8]{0,8}$/.test(selector)){
                  return obj.getElementsByTagName(selector);
            }else if(/^<[a-zA-Z][a-zA-Z0-8]{0,8}>$/.test(selector)){//将<div>换成div
            	return obj.createElement(selector.slice(1,-1));

            }
      }else if(typeof selector=="function"){//检测结果类型为函数
            window.onload=function(){
                  selector();//也就是调用函数
            }
      }
}
//获取子节点的兼容函数
//定义两个参数  obj 对象  type 判断的类型，只要元素节点，还是 元素节点与有效的文本节点都要    no  表示 只要元素节点   yes  表示元素节点与有效的文本节点都要
//用childNodes 获取到的是一个集合
function getChilds(obj,type){
      var arr=[];//因为用childNodes 获取到的是一个集合，所以声明一个数组来放其元素
      var type=type||"no";// 判断类型，默认为“no”，也就是不要有效的文本节点
      var childs=obj.childNodes;//获取所有的孩子
      for (var i = 0; i < childs.length; i++) {//遍历孩子，一个一个判断
            if(type=="no"){//  类型为no，则只要元素节点
                  if(childs[i].nodeType==1){// 元素的类型为1.则为元素节点
                        arr.push(childs[i]);// 将其加入到数组中
                  }
            }else if(type=="yes"){// 类型为yes，则要元素节点与有效的文本节点
                  if(childs[i].nodeType==1||childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,"")){//元素的类型为元素节点或者类型为文本节点并且将其节点值的空格替换为“”
                        arr.push(childs[i]);//将其加入到数组中
                  }
            }
      }
      return arr;//返回数组
}
//获取第一个子节点
//两个参数   obj 对象 type 类型
//第一个子节点的下标是0
function getFirst(obj,type){
      var type=type||"no";
      if(type=="no"){
            return getChilds(obj,"no")[0];
      }else if(type=="yes"){
            return getChilds(obj,"yes")[0];
      }
}
//获取第一个子节点
//两个参数   obj 对象 type 类型
//最后一个子节点的下标是长度-1
function getLast(obj,type){
      var type=type||"no";
      if(type=="no"){
            return getChilds(obj,"no")[getChilds(obj,"no").length-1];
      }else if(type=="yes"){
            return getChilds(obj,"yes")[getChilds(obj,"yes").length-1];
      }
}
//获取第n个子节点
///两个参数   obj 对象 type 类型
//第n个子节点的下标是长度n-1
function getNum(obj,num,type){
      var type=type||"no";
      if(type=="no"){
            return getChilds(obj,"no")[num-1];
      }else if(type=="yes"){
            return getChilds(obj,"yes")[num-1];
      }
}
//获取下一个兄弟节点
//两个参数 obj 对象   type 类型
//分为两种情况  no ，只找元素节点    yes  找文本节点
function  getNext(obj,type){// 定义一个函数，声明两个变量
      var type=type||"no";// 默认为no
      var next=obj.nextSibling;//声明一个变量，将对象的下一个兄弟节点赋值给了变量next
      if(next==null){//查找，如果为空，证明没有，返回false  这种情况不管是no或者yes都可以判断
            return false;//返回false
      }
      if(type=="no"){//类型如果为no，则说明要的是下一个元素为元素节点
            while(next.nodeType==3||next.nodeType==8){//循环，用while循环是因为不知道循环次数，如果为文本节点或者注释节点，则，进入循环，
                  next=next.nextSibling;// 将下一个兄弟节点给了下一个，继续判断
                        if(next==null){//如果找不到，为空
                              return false; //返回false
                  }
            }

      }else if(type=="yes"){//类型如果为yes，则说明要的是下一个元素为元素节点或者文本节点
            while(next.nodeType==3&&!next.nodeValue.replace(/^\s*|\s*$/g,"")||next.nodeType==8){//next.nodeValue.replace(/^\s*|\s*$/g,"")是假的，非的话为真，进入循环，如果为文本类型，且有空格，也就是不要，那么符合我们的条件，不进入循环
                  next=next.nextSibling;//将下一个兄弟节点给了下一个，继续判断
                  if(next==null){//如果找不到，为空
                        return false; //返回false
                  }
            }
      }
      return next;//返回 next
}
//获取上一个兄弟节点的兼容函数、
//与获得下一个兄弟节点类似
function  getPrev(obj,type){
      var type=type||"no";
      var prev=obj.previoueSibling;
      if(prev==null){
            return false;
      }
      if(type=="no"){
            while(prev.nodeType==3||prev.nodeType==8){
                  prev=prev.previoueSibling;
                        if(prev==null){
                              return false; 
                  }
            }

      }else if(type=="yes"){
            while(prev.nodeType==3&&!prev.nodeValue.replace(/^\s*|\s*$/g,"")||prev.nodeType==8){
                  prev=prev.previoueSibling;
                  if(prev==null){
                        return false; 
                  }
            }
      }
      return prev;
}
// 封装insertBefore
// 两个参数  第一个为要插入的新对象     第二个为要插入到哪个对象之前
function insertBefore(newobj,beforeobj){
      var parent=beforeobj.parentNode;//父节点
      parent.insertBefore(newobj,beforeobj);
}
// 插入到某个对象之后，也就是插入到对象兄弟的前面
// 两个参数  第一个为要插入的新对象     第二个为要插入到哪个对象之前
function  insertAfter(newobj,beforeobj){
      var next=getNext(beforeobj,"yes");//下一个孩子，要元素节点及有效的文本节点
      var parent=beforeobj.parentNode;//父节点
      if(next){
            insertBefore(newobj,next);//下一个兄弟节点有
      }else{
            parent.appendChild(newobj);//没有，追加到网页中
      }
}
// 添加事件的兼容函数
// attachEvent   IE
// addEventListener   w3c
// obj 对象  event 事件类型  fun 函数
// 在哪个对象身上添加哪个属性，要运行什么
function addEvent(obj,event,fun){
      if(obj.attachEvent){//判断  如果浏览器有这种属性
            obj.attachEvent("on"+event,funEvent);//绑定在obj身上的是funEvent
      }else{//判断  如果浏览器有这种属性
            obj.addEventListener(event,funEvent,false);//绑定在obj身上的是funEvent
      }
      return funEvent;
      function funEvent(e){
            //兼容事件对象
            var ev=e||window.event;
            //改变this指针，并且传递事件对象
            fun.call(obj,ev);
      }
}
// 删除事件的兼容函数
// 只要删除就好，不用管其函数以及指向问题 
function removeEvent(obj,event,fun){
      if(obj.attachEvent){
            obj.detachEvent("on"+event,fun);//删除的事件是funEvent,也就是真正添加在obj身上的对象
      }else{
            obj.removeEventListener(event,fun,false);
      }
}
//鼠标滚轮
function mousewheel(obj,upFun,downFun){
      if(obj.attachEvent){
            obj.attachEvent("onmousewheel",fun);
      }else{
            obj.addEventListener("mousewheel",fun,false);
            obj.addEventListener("DOMMouseScroll",fun,false);
      }
      function fun(e){
            var eve=e||window.event;
            if(eve.returnValue){
                  eve.returnValue=false;
            }else{
                  eve.preventDefault();
            }
            var num=eve.wheelDelta||eve.detail;
            if(num==120||num==-3){
                  upFun.call(obj);
            }
            if(num==-120||num==3){
                  downFun.call(obj);
            }
      }
}









/*****************************************************/
//2016.8.16
//15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/






///*******************************************/
//cookie
//设置cookie
function setCookie(attr,value,time){//定义三个三参数   第一个为键   第二个为值 ，第三个为时间
		if(time){//如果有时间，则到一定的时间在销毁其中的键值
		var newtime=new Date();// 现在的时间
		newtime.setTime(newtime.getTime()+time*1000);//设定时间，现在的时间+存在的时间
		document.cookie=attr+"="+value+";expires="+newtime.toGMTString();//写入到cookie中
	}else{
		document.cookie=attr+"="+value;// 没有存活时间，写入到cookie中
	}
}
//"aa=bb; bb=cc; cc=dd "
//获取cookie
function getCookie(attr){//获取cookie的值     定义键
	var cookies=document.cookie;//遍历cookie中的所有，
	var arr=cookies.split("; ");//分割,用； 将其分开，转化为数组
	for(var i=0;i<arr.length;i++){//遍历所有的数组
		var brr=arr[i].split("=");//每个下表的分割用等号分开
		if(brr[0]==attr){//如果与键值一样
			return brr[1];//输出他的值
		}
	}
	return false;//找不到，则返回false  
}

//删除cookie
function delCookie(attr){//删除cookie    传入键值  要删除，则必须有时间 才能删除，让他是在的前一秒 就不在了，
		var newtime=new Date();
		newtime.setTime(newtime.getTime()-1);
		document.cookie=attr+"=lue;expires="+newtime.toGMTString();
}
/***********************************************/