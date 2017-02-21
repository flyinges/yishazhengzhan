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
	var shang=$(".shang")[0];
	var xia=$(".xia")[0];
	var chanpin2=$(".chanpin2")[0];
	var n1=100;
	var n2=-100;
	shang.onclick=function(){
		var chanpin=parseInt(getStyle(chanpin2,"top"));
		console.log(chanpin);
		if(chanpin<0){

			animate(chanpin2,{top:chanpin+n1});		
		}
	}
	xia.onclick=function(){
		var chanpin=parseInt(getStyle(chanpin2,"top"));
		if(chanpin>-900){
			animate(chanpin2,{top:chanpin+n2});		
		}
	}
})
