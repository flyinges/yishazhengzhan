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
var now=0;
$(".btn li img").each(function(index,dom){
	$(".btn li img").eq(index).hover(function(){
			$(this).attr("id","two");
	}
	,function(){
		if(now!=index){
			$(this).removeAttr("id");
		}	
	})
	$(".btn li img").eq(index).click(function(){
		$(".pinpai3 li").each(function(index,dom){
			$(this).removeAttr("id","first");
		    $(".btn li img").eq(index).removeAttr("id");
		})
		$(".pinpai3 li").eq(index).attr("id","first");
		$(this).attr("id","two");
		now=index;	
})
})
})
