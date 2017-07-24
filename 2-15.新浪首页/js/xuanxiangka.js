$(function(){
			$(".comTitle_tabs>li").click(function(){
				
				var index=$(this).index()
				
				$(this).addClass("active").siblings().removeClass("active")
//				alert(this)
				$(".videoList_newList").eq(index).show().siblings(".videoList_newList").hide()
//				$(".tabs>div").eq(index).show().siblings().hide()
			})
			
			
			$(".titBg>li").click(function(){
//				alert(123)
				var index=$(this).index();
				
				$(this).addClass("active").siblings().removeClass("active")
//				alert(this)
				$(".item").eq(index).show().siblings().hide()
			})
			
			
			
			$(".day>a").click(function(){
				
				var index=$(this).index();
//				alert(index)
				$(this).addClass("active").siblings().removeClass("active")
//				alert(this)
				$("tabs>.tabs_item").eq(index).show().siblings().hide()
			})
			
			
			$(".contNav>span").click(function(){
				var index=$(this).index();
//				alert(index)
				$(this).addClass("active").siblings().removeClass("active")
				$(".tabs .tabs_item").eq(index).show().siblings(".tabs_item").hide()
			})
			
		})