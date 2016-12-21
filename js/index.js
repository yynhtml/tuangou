$(function(){
	//轮播图
	var mySwiper = Swiper(".swiper-container",{
		loop:true,
		speed:500,
		autoplay:2000,
		pagination: '.swiper-pagination'
	})
	//总价计算
	var danjia = 78;
	jiaqian();
	$("#content .dian label").click(function(){
		
		jiaqian();
	})
	
	
	function jiaqian(){
		var count = 0;
		var goodsId = "";
		$("#content .dian label input[name='taocan']:checked").each(function(){
			count += parseInt($(this).val());
			goodsId += $(this).attr("goodsId");
		})
		
		$("#content .dian label input[name='taocanr']:checked").each(function(){
			count += parseInt($(this).val());
			goodsId += $(this).attr("goodsId");
		})
		
		
		$(".id").html(goodsId)
		$(".price b").html(count);
		danjia = count;
		var num = $("#num").val();
		$(".price b").html(danjia*num);
	}
	
	
	
	//图片点击放大
	$("#content .huaxuexianchang").on("touchend","li img",function(){
		var sty = $(this).attr("src");
		$("body").append("<div id='bigImg' style='height: 100%;width: 100%;background: rgba(0,0,0,0.8);position: fixed;top: 0;left: 0;z-index: 99;'><div style='width: 16rem;height: 9.6rem;position: absolute;top: 50%;left: 0;margin-top: -4.8rem;background:url("+sty+") no-repeat center;background-size:100% 100%;'></div></div>")
		console.log(sty);
	})
	
	$("body").on("touchend","#bigImg",function(){
		$("#bigImg").remove("#bigImg");
	})
	
	//购票数量
	$("#add").on("touchend",function(){
		var num = $("#num").val();
		if(num < 5){
			num++;
			$("#num").val(num);
			$(".price b").html(danjia*num);
		}
		
	})
	$("#sub").on("touchend",function(){
		var num = $("#num").val();
		if(num > 1){
			num--;
			$("#num").val(num);
			$(".price b").html(danjia*num);
		}
		
	})
	
})
/*$(function () {
     $('#flo li').click(function () {
         var className = $.attr(this, 'data-url').substr(1);
         $('html, body').animate({
             scrollTop: $("." + className).offset().top
         }, 700);
         return false;
     });
 })*/