function music()
{ var a=document.getElementById("music");
	a.id="music1";
	a.innerHTML="";
	var b=document.createElement("form");
	var c=document.createElement("input");
	var d=document.createElement("div");
	c.type="button";
	b.id="button";
	c.id="button";
	d.id="left";
	a.appendChild(d);
	d.appendChild(b);
	b.appendChild(c);
	c.setAttribute("onclick","music1()");
 	var text=document.createTextNode("您感觉本网站还不错的话就分享出去吧:");
 	var br=document.createElement("br");
 	var img1=document.createElement("img");
    img1.src="./img/qwb.png";
 	img1.setAttribute("onclick","sharetoqwb('我发现了一个不错的网站，一起来看看吧')");
 	a.appendChild(text);
 	a.appendChild(br);
 	a.appendChild(img1);
 	img1.id="qwb";
 	var img2=document.createElement("img");
    img2.src="./img/xwb.png";
 	img2.setAttribute("onclick","sharetoxwb('我发现了一个不错的网站，一起来看看吧')");
 	a.appendChild(img2);
 	img2.id="qwb";
 	var img3=document.createElement("img");
    img3.src="./img/qzone.png";
 	img3.setAttribute("onclick","sharetoqzone('我发现了一个不错的网站，一起来看看吧')");
 	a.appendChild(img3);
 	img3.id="qwb";
 	var fankui=document.createElement("a");
 	fankui.href="./feedback/Feedback.html";
 	var text1=document.createTextNode("有意见请于此处反馈");
 	fankui.style.display="block";
 	fankui.style.top="5px";
 	fankui.style.fontSize="25px";
 	fankui.appendChild(text1);
 	a.appendChild(fankui);
}
function music1()
{
	var a=document.getElementById("music1");
	a.innerHTML="";
	var c=document.createElement("form");
	var d=document.createElement("input");
	a.id="music2";
	d.type="button";
	d.className="button";
	c.appendChild(d);
	a.appendChild(c);
	
	d.setAttribute("onclick","music2()");
}
function music2()
{ var a=document.getElementById("music2");
	a.id="music1";
	a.innerHTML="";
	var b=document.createElement("form");
	var c=document.createElement("input");
	var d=document.createElement("div");
	c.type="button";
	b.id="button";
	c.id="button";
	d.id="left";
	a.appendChild(d);
	d.appendChild(b);
	b.appendChild(c);
	c.setAttribute("onclick","music1()");
  	var text=document.createTextNode("您感觉本网站还不错的话就分享出去吧:");
 	var br=document.createElement("br");
 	var img1=document.createElement("img");
    img1.src="./img/qwb.png";
 	img1.setAttribute("onclick","sharetoqwb('我发现了一个不错的网站，一起来看看吧')");
 	a.appendChild(text);
 	a.appendChild(br);
 	a.appendChild(img1);
 	img1.id="qwb";
 	var img2=document.createElement("img");
    img2.src="./img/xwb.png";
 	img2.setAttribute("onclick","sharetoxwb('我发现了一个不错的网站，一起来看看吧')");
 	a.appendChild(img2);
 	img2.id="qwb";
 	var img3=document.createElement("img");
    img3.src="./img/qzone.png";
 	img3.setAttribute("onclick","sharetoqzone('我发现了一个不错的网站，一起来看看吧')");
 	a.appendChild(img3);
 	img3.id="qwb";
  	var fankui=document.createElement("a");
 	fankui.href="./feedback/Feedback.html";
 	var text1=document.createTextNode("有意见请于此处反馈");
 	fankui.style.display="block";
 	fankui.style.top="5px";
 	fankui.style.fontSize="25px";
 	fankui.appendChild(text1);
 	a.appendChild(fankui);
}
function chuxian(id)
{
	var a=document.getElementById(id);
	switch(id)
		{
			case "learn":
			a.style.height=0.32*screen.availHeight;
			var b=screen.availHeight;
			setTimeout(scrollTo(0,b),1000);
			break;
			case "entertainment":
			a.style.height=0.28*screen.availHeight;
			var b=screen.availHeight*2;
			setTimeout(scrollTo(0,b),1000);
			break;
			default:
			a.style.height=0.25*screen.availHeight;
			var b=screen.availHeight*3;
			setTimeout(scrollTo(0,b),1000);}
}
function xiaoshi(id)
{
	var a=document.getElementById(id);
	a.style.height=0.04*screen.availHeight;
}
function wai(id)
{
	var a=document.getElementById(id);
	a.style.left=0;
	a.style.top=0;
	a.style.width=screen.availWidth;
	a.style.height=screen.availHeight;
	var b=document.getElementById('header');
	b.style.height=screen.availHeight*0.1;
	b.style.width=screen.availWidth*0.7;
	b.style.left=screen.availWidth*0.15;
	var learn=document.getElementById('learn');
	learn.style.height=screen.availHeight*0.04;
	learn.style.top=screen.availHeight*0.03;
	learn.style.left=screen.availWidth*0.3;
	learn.style.width=screen.availWidth*0.15;
	var entertainment=document.getElementById('entertainment');
	entertainment.style.height=screen.availHeight*0.04;
	entertainment.style.top=screen.availHeight*0.03;
	entertainment.style.left=screen.availWidth*0.5;
	entertainment.style.width=screen.availWidth*0.15;
	var life=document.getElementById('life');
	life.style.height=screen.availHeight*0.04;
	life.style.top=screen.availHeight*0.03;
	life.style.left=screen.availWidth*0.7;
	life.style.width=screen.availWidth*0.15;
}
function fenlei(lei)
{
	var a="./page/"+lei+".html";
	var newwin=open('./page/'+lei+'.html',"_blank");
}
function sharetoqwb(content)
{
	var str='http://v.t.qq.com/share/share.php?title='+content;
	window.open(str);
}
function sharetoxwb(title)
{
	var str='http://v.t.sina.com.cn/share/share.php?title='+title;
	window.open(str);
}
function sharetoqzone(title)
{
	var str='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+title;
	window.open(str);
}

	