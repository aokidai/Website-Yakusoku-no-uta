window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-145011510-1');
const ww = window.innerWidth;
var max_news = 0;
var crt_cat = 1;
var crt_count = 1;
$(document).ready( function(){
	max_news = $('#NewsData .news-data').length;
	var anc = location.hash;
	//console.log(anc);
	if (anc == "#All"){
		sortNews(1);
	}else if (anc == "#Info"){
		sortNews(2);
	}else if (anc == "#Media"){
		sortNews(3);
	}else if (anc == "#Event"){
		sortNews(4);
	}else if (anc == "#Onair"){
		sortNews(5);
	}else{
		sortNews(1);
	}
});
function sortNews(num){
	crt_cat = num;
	$('#NewsCont').attr('data-news-cat',crt_cat);
	crt_count = 1;
	$('#NewsCont').attr('data-news-count',crt_count);
	//navi
	$('#NewsNavi ul li').removeClass("crt");
	$('#NewsNavi ul li:eq('+(num-1)+')').addClass("crt");
	//for sp
	var offset_nv = $('#NewsNavi ul li.crt').position().left;
	var w_nv = $('#NewsNavi ul li.crt').outerWidth();
	var scrl_nv =  (ww / 2) - (w_nv/2) - offset_nv;
	$('#NewsNavi .news-navi').animate({scrollLeft: scrl_nv * -1} , 500);
	//console.log( offset_nv + "/" +  w_nv + "/" +  scrl_nv);
	//cursor
	$('#NewsPls').removeClass("off");
	$('.cont-news-cursor').hide();
	//data
	$('#NewsData .news-data').addClass("off");
	if(num == 1){ 
		//$('#NewsData .news-data').removeClass("off");
		addNewsView();
	}else{
		$('#NewsData .news-data.cat'+num).removeClass("off").addClass("crt");
	}
}
function addNewsView(num){
	var max_view = Number($('#NewsCont').attr('data-news-count'));
	if(num){
		max_view += num;
		crt_count = max_view; 
		$('#NewsCont').attr('data-news-count',crt_count);
	}

	$('#NewsData .news-data').each(function(index, value) {
		if(index === max_view * 10){return false;}
		$(this).removeClass("off").addClass("crt");
	})

	if((max_view*10) > max_news ){ 
		$('.cont-news-cursor').hide();
	}else{
		$('.cont-news-cursor').show();
	}
	//console.log(max_view + " / "+ max_news );
}