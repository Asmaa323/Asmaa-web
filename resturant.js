$(document).ready(function(){
	$(".div1").slideDown(2000,function()
	{
		$(".section").fadeIn(1000);
		$(".warpper").fadeIn(1000);
		$(".btn1").fadeIn(1000);
	});
	$(".btn1").click(function()
	{
		$('.div1').slideUp(2500);
		$('.Box').fadeIn(4000);
		$('.warpper').fadeOut(2000);
	});
	var click=1;
	$(".btn").click(function(){
		var imgs=["url('1.jpg')","url('images/img3 (2).jpg')","url('images/img3 (3).jpg')"],
		title=["Beef Burger","Pizza","Sweets"],
		main =["1 burger 200g","meduim","2 sweets"],
		cont1=["1meduum fries","hot","chocalate"],
		cont2=["Can","sweet","tea"],
		cont3=["1 Salad","",""],
		price=["10$","12$","15$"];

		if(click > imgs.length-1)
		{
			click =0;
		}
		$('.img').css('background-image',imgs[click]);
		$('.title').html(title[click]);
		$('.main').html(main[click]);
		$('.cont1').html(cont1[click]);
		$('.cont2').html(cont2[click]);
		$('.cont3').html(cont3[click]);
		$('.price').html(price[click]);
		click++;
	});
});
