$(function(){
	$(".mainleft .maintitle").hover(function(){
	$(".mainleftbox").eq($(this).index()).css("display","block");
}
	,function(){
		$(".mainleftbox").eq($(this).index()).css("display","none");
	})
$(".maintitle1").hover(function(){
	$(".mainleftbox10").css("display","block");
},function(){
	$(".mainleftbox10").css("display","none");
})
// 	function louceng(){
// 	var floor=$(".floor");
// 	var floors=floor[0].offsetTop;
// 	var floorbox=$(".floorbox")[0];
// 	var fl=$("li",floorbox);
// 	var fls=$(".first2");
// 	var nowindex=0;
// 	window.onscroll=function(){
// 		var obj=document.body.scrollTop?document.body:document.documentElement;
// 		var scrollTops=obj.scrollTop;
// 		for (var i = 0; i < floor.length; i++) {
// 			if(scrollTops>=floor[i].offsetTop-400){
// 				for (var j = 0; j < fl.length; j++){
// 					fl[j].className="";
// 					fls[j].style.display="none";
// 				}
// 				fl[i].className="first";
// 				fls[i].style.display="block";
// 				nowindex=i;
// 			}			
// 		}
// 	}
// 	for (var i = 0; i < fl.length; i++) {//遍历小楼层的房间
// 		fl[i].aa=i;
// 		fl[i].onclick=function(){
// 			for (var j = 0; j < floor.length; j++) {
// 				fl[j].className="";
// 				// fls[j].style.display="none";
// 			}
// 			fl[this.aa].className="first";
// 			fls[this.aa].style.display="block";
// 			animate(document.body,{scrollTop:floor[this.aa].offsetTop},500);
// 			animate(document.documentElement,{scrollTop:floor[this.aa].offsetTop},500);
// 		}
// 		fl[i].onmouseover=function(){
// 			if(this.aa!=nowindex){
// 				this.className="first";
// 				this.style.background="#c4b182";
// 				fls[this.aa].style.display="block";
// 			}	
// 		}
// 		fl[i].onmouseout=function(){
// 			if(this.aa!=nowindex){
// 				this.className="";
// 				this.style.background="";
// 				fls[this.aa].style.display="none";
// 			}else{
// 				this.style.background="";
// 			}	
// 		}
// 	}
// 	for (var i = 0; i < floor.length; i++) {
// 		floor[i].bb=i;
// 		var floorimg=$("img",floor[this.bb]);
// 		for (var j = 0; j < floorimg.length; j++) {
// 			floorimg[j].aa=j;
// 			hover(floorimg[j],function(){
// 				floorimg[this.aa].style.top=-440+"px";
// 			},function(){
// 				floorimg[this.aa].style.top=0;
// 			})
// 		}
// 	}	
// }
// louceng();
$(".floor img").hover(function(){
	$(this).eq($(this).index()).css("top",-440+"px");
},function(){
	$(this).eq($(this).index()).css("top",0);

})


$(".floor").each(function(index,dom){
 	$(this).data("aa",$(this).offset().top);
 })
 var now=0;
window.onscroll=function(){
	$(".floor").each(function(index,dom){      
		if($(document).scrollTop()+300>=$(this).data("aa")){
			$(".floorbox li").removeClass().eq($(dom).index()).addClass("first");
         now=$(this).index();
		}
	})
}
$(".floorbox li").hover(function(){
   if(now!=$(this).index()){
    $(".floorbox li").removeClass().eq($(this).index()).addClass("first2");
     $(".floorbox li").eq(now).addClass("first");
   } 
},function(){
   if(now!=$(this).index()){
    $(".floorbox li").removeClass();
   }
   $(".floorbox li").eq(now).addClass("first");
})
$(".floorbox li").click(function(){
	$("html,body").animate({scrollTop:$(".floor").eq($(this).index()).data("aa")-300})
})
})