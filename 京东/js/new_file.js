window.onload = function() {
	var oWrapper = document.getElementsByClassName("wrapper")[0];
	var oUl = document.getElementsByClassName("banner")[0];
	var aLi = oUl.children;
	var curindex = -1;
	var timer, timer1;
	var oBtn = document.getElementsByClassName("btn")[0];
	var oList = document.getElementsByClassName("list")[0];
	var oList_li = oList.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var oBtn_left = document.getElementsByClassName("left_btn")[0];
	var oBtn_right = document.getElementsByClassName("right_btn")[0];
	move();

	function move() {
		curindex < aLi.length - 1 ? curindex++ : curindex = 0;
		for(var i = 0; i < aLi.length; i++) {
			aLi[i].style.display = "none";
			aLi[curindex].style.display = "block";
			oList_li[i].style.background = "white";
			oList_li[curindex].style.background = "#C81623";
		}
	}
	timer = setInterval(move, 2000);
	oWrapper.onmouseover = function() {
		clearInterval(timer);
		oBtn.style.display = "block";
	}
	oWrapper.onmouseout = function() {
		oBtn.style.display = "none";
		timer = setInterval(move, 2000);
	}
	oBtn_left.onclick = function() {
		curindex > 0 ? curindex-- : curindex = aLi.length - 1;
		for(var i = 0; i < aLi.length; i++) {
			aLi[i].style.display = "none";
			aLi[curindex].style.display = "block";
			oList_li[i].style.background = "white";
			oList_li[curindex].style.background = "#C81623";
		}
	}
	oBtn_right.onclick = function() {
		move();
	}
	for(var i = 0; i < oList_li.length; i++) {
		oList_li[i].index = i;
		oList_li[i].onmouseover = function() {
			for(var i = 0; i < aLi.length; i++) {
				aLi[i].style.display = "none";
				aLi[this.index].style.display = "block";
				oList_li[i].style.background = "white";
				oList_li[this.index].style.background = "#C81623";
			}
		}
	}


var ull1=document.getElementsByClassName("ull1")[0];
var ull2=document.getElementsByClassName("ull2")[0];
var ull1L=ull1.offsetLeft;
var ull2L=ull2.offsetLeft;
var tim1,tim2;
var paL=document.getElementsByClassName("pa2")[0];
var paR=document.getElementsByClassName("pa1")[0];
		paL.onclick=function(){
			if(ull1L==0){
				tim1=setInterval(function(){
					ull1L-=20;
					ull2L-=20;
					ull1.style.left=ull1L+"px";
					ull2.style.left=ull2L+"px";
					console.log(ull1L)
					if (ull2L<=0) {
						clearInterval(tim1)
					}
				},25)
			}else{
				alert("没有了亲！")
			}
	
		}
		paR.onclick=function(){
			if(ull2L==-10){
				tim2=setInterval(function(){
					ull1L+=20;
					ull2L+=20;
					ull1.style.left=ull1L+"px";
					ull2.style.left=ull2L+"px";
					console.log(ull1L)
					if (ull1L==0) {
						clearInterval(tim2)
					}
				},25)
			}else{
				alert("没有了亲！")
			}
	
		}
		
		
	window.onscroll=function(){
	var Dao=document.getElementsByClassName("sco")[0];
	var top=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
	var DaoH=Dao.offsetHeight;
	if(top>=550){
		Dao.style.display="block"
	var	ti1=setInterval(function(){
			DaoH=DaoH+2
			if(DaoH>=48){
				DaoH=48;
				clearInterval(ti1);
			}
			Dao.style.height=DaoH+"px";
		},10)
		

	}else{
	
		Dao.style.display="none"
	}
//	var fhdb=document.getElementsByClassName("ttt")[0];
//	var 
//	top.onclick=function(){
//		if(top>1000){
//		var time5=setInterval(function(){
//				top-=10;
//				if(top=0){
//					clearInterval(time5);
//				}
//				
//			},100)
//		}
//		
//		
//	}
//}
	}



	var H=document.getElementsByClassName("houer")[0];
	var m=document.getElementsByClassName("mins")[0];
	var s=document.getElementsByClassName("ss")[0];
	setInterval(function(){
		if(parseInt(H.innerHTML)>0){
			H.innerHTML=parseInt(H.innerHTML)-1;
		}else{
			alert("秒杀结束");
		}
	},3600000)
	setInterval(function(){
		if (parseInt(m.innerHTML)>0) {
			m.innerHTML=parseInt(m.innerHTML)-1;
		}else{
			H.innerHTML=parseInt(H.innerHTML)-1;
		}
	},60000)
	setInterval(function(){
		if(parseInt(s.innerHTML)>0){
			s.innerHTML=parseInt(s.innerHTML)-1;
			if(Number(s.innerHTML)<10&&Number(s.innerHTML)>0) s.innerHTML="0"+s.innerHTML;
			
		}else{
			m.innerHTML=parseInt(m.innerHTML)-1;
			s.innerHTML=60;
		}
	},1000)
	
	
	var ul1=document.getElementsByClassName("ul11")[0];
	var ul2=document.getElementsByClassName("ul22")[0];
	var lst=document.getElementsByClassName("lists");
	var so=document.getElementsByClassName("soan")[0];
	var ul2L=ul2.offsetTop;
	for (var i=0;i<lst.length;i++) {
		lst[i].index=i;
		lst[i].onmouseover=function(){
			var t1=setInterval(function(){
				ul2L-=10
				ul2.style.top=ul2L+"px"
				if(ul2L<=0){
					ul2L=0;
					clearInterval(t1);
				}
			},20)

		}

	}
		so.onclick=function(){
			var t1=setInterval(function(){
				ul2L+=10
				ul2.style.top=ul2L+"px"
				if(ul2L>200){
					ul2L=200;
					clearInterval(t1);
				}
			},20)
			}
		
		var gb=document.getElementsByClassName("immm_span")[0];
		var imgg=document.getElementsByClassName("immm")[0];
		gb.onclick=function(){
			imgg.style.display="none";
			
		}
	
}
