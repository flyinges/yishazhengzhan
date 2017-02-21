$(function(){
	function  ma(){
	var mainleft=$(".mainleft")[0];
	var mainleftL=$(".maintitle",mainleft);
	var mainleftbox=$(".mainleftbox");
	for (var i = 0; i < mainleftL.length; i++) {
		mainleftL[i].aa=i;
		hover(mainleftL[i],function(){
			for (var j = 0; j < mainleftbox.length; j++){
				mainleftbox[this.aa].style.display="block";
			}

		},function(){
			for (var j = 0; j < mainleftbox.length; j++){
				mainleftbox[this.aa].style.display="none";
			}

		});
	}
}
ma();
function  ma1(){
	var mainleftL=$(".maintitle1")[0];
	var mainleftbox10=$(".mainleftbox10")[0];
		hover(mainleftL,function(){
				mainleftbox10.style.display="block";
		},function(){
				mainleftbox10.style.display="none";

		});
}
ma1();
	function louceng(){
	var floor=$(".floor");
	var floors=floor[0].offsetTop;
	var floorbox=$(".floorbox")[0];
	var fl=$("li",floorbox);
	var fls=$(".first2");
	var nowindex=0;
	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrollTops=obj.scrollTop;
		for (var i = 0; i < floor.length; i++) {
			if(scrollTops>=floor[i].offsetTop-400){
				for (var j = 0; j < fl.length; j++){
					fl[j].className="";
					fls[j].style.display="none";
				}
				fl[i].className="first";
				fls[i].style.display="block";
				nowindex=i;
			}			
		}
	}
	for (var i = 0; i < fl.length; i++) {//遍历小楼层的房间
		fl[i].aa=i;
		fl[i].onclick=function(){
			for (var j = 0; j < floor.length; j++) {
				fl[j].className="";
				// fls[j].style.display="none";
			}
			fl[this.aa].className="first";
			fls[this.aa].style.display="block";
			animate(document.body,{scrollTop:floor[this.aa].offsetTop},500);
			animate(document.documentElement,{scrollTop:floor[this.aa].offsetTop},500);
		}
		fl[i].onmouseover=function(){
			if(this.aa!=nowindex){
				this.className="first";
				this.style.background="#c4b182";
				fls[this.aa].style.display="block";
			}	
		}
		fl[i].onmouseout=function(){
			if(this.aa!=nowindex){
				this.className="";
				this.style.background="";
				fls[this.aa].style.display="none";
			}else{
				this.style.background="";
			}	
		}
	}
	for (var i = 0; i < floor.length; i++) {
		floor[i].bb=i;
		var floorimg=$("img",floor[this.bb]);
		for (var j = 0; j < floorimg.length; j++) {
			floorimg[j].aa=j;
			hover(floorimg[j],function(){
				floorimg[this.aa].style.top=-440+"px";
			},function(){
				floorimg[this.aa].style.top=0;
			})
		}
	}	
}
louceng();
})