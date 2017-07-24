$(function(){
	$(".quanxuan").click(function(){
		$(".list_item_box .list_item li label input").prop("checked",true)
	})
	$('.quanbuxuan').click(function(){
		$(".list_item_box .list_item li label input").prop("checked",false)
	})
})