// 填写订单
var choseItem={
	data:[{
			item:['官方','QQ','微信','微博'],
			title:'登录方式'
		},{
			item:['电信一区','电信二区','电信三区'],
			title:'选择游戏区服'
		},{
			item:['60元宝','100元宝','200元宝'],
			title:'选择充值面额'
		}],
	select:function(obj,data)
	{
		obj.select({
	        title: data.title,
	        items: data.item,
	        onChange: function(d) {
	          console.log(this, d);
	        },
	        onClose: function() {
	          console.log("close");
	        },
	        onOpen: function() {
	          console.log("open");
	        },
        });
	}
}
$.each($('.weui-s'), function(index, val) {
	 choseItem.select($('.weui-s').eq(index),choseItem.data[index]);
});

// 充值
$('#charge').on('click',function(e)
{
	if(Number($('#currency').text())==0)
	{
		e.preventDefault();
		$.toast("请选择面额", "forbidden");
	}
})
$('.op-wrap').on('click','li',function()
{
	$('.op-wrap li').removeClass('on')&&$(this).addClass('on');
	$('#currency').html(parseInt($(this).text()));
})
