//实现链接在新页面打开 
window,onload=function(){


function jump(){
	if(!document.getElementsByTagName()) return false;
	var jump=document.getElementById("link");
	var links=jump.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			jump_black(this);
			alert("click this link");
		}
	}
}
function jump_black(whichpage){
	var _target=whichpage.getAttribute("target");
	var old_jump=document.getElementsByTagName("a");
	old_jump.setAttribute("target","_blank");
}
}
