$(function(){
$(".mainleft .maintitle").hover(function(){
	$(".mainleftbox").eq($(this).index()).css("display","block");
	},function(){
		$(".mainleftbox").eq($(this).index()).css("display","none");
	})
$(".maintitle1").hover(function(){
	$(".mainleftbox10").css("display","block");
},function(){
	$(".mainleftbox10").css("display","none");
})
	// var shang=$(".shang")[0];
	// var xia=$(".xia")[0];
	// var chanpin2=$(".chanpin2")[0];
	// var n1=100;
	// var n2=-100;
	// shang.onclick=function(){
	// 	var chanpin=parseInt(getStyle(chanpin2,"top"));
	// 	if(chanpin<0){

	// 		animate(chanpin2,{top:chanpin+n1});		
	// 	}
	// }
	// xia.onclick=function(){
	// 	var chanpin=parseInt(getStyle(chanpin2,"top"));
	// 	if(chanpin>-900){
	// 		animate(chanpin2,{top:chanpin+n2});		
	// 	}
	// }
	var n1=100;
	var n2=-100;
	$(".shang").click(function(){
		var chanpin=$(".chanpin2").position().top;
		if(chanpin<0){
			$(".chanpin2").animate({top:chanpin+n1});		
		}
	})
	$(".xia").click(function(){
		var chanpin=$(".chanpin2").position().top;
		console.log(chanpin)
		if(chanpin>-900){
			$(".chanpin2").animate({top:chanpin+n2});		
		}
	})
})
