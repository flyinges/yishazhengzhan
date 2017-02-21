$(function(){
	function cq(){
   var pinpaili=$("li",$(".pinpai3")[0]);
   var btnli=$("img",$(".btn")[0]);
   var now=0;
   for(var i=0;i<btnli.length;i++){
    btnli[i].index=i;
    hover(btnli[i],function(){
       btnli[this.index].id="two";
    },function(){
    	if(now!=this.index){
    		btnli[this.index].id="";
    	}
    })
      btnli[i].onclick=function(){
          for(var j=0;j<pinpaili.length;j++){
              pinpaili[j].id="";
              btnli[j].id="";
          } 
          btnli[this.index].id="two";
          pinpaili[this.index].id="first";
      }
   }  
}
cq();
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

})