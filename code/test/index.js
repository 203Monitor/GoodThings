window.onload = function(){
	document.getElementById("btn").onclick = function(){
		document.getElementById("test").innerHTML = "hello,test";
	}
	
	document.getElementById("div").innerHTML = "你好，div";	
	document.getElementById("div").style.color = "red";
	
	document.getElementsByTagName("h1")[0].innerHTML = "你好，h1----";
	document.getElementsByTagName("h1")[1].innerHTML = "你好，h1 2----";
	
	document.getElementsByClassName("demo")[0].style.color = "blue";
	
	document.getElementsByName("p")[0].style.background = "yellow";

	//获取本文档的第一个元素
	document.querySelector("#h").innerHTML = "hello hhh";
	document.querySelector(".h").innerHTML = "hello aaa";
	document.querySelector("p").innerHTML = "hello aaa";
	 
	document.querySelectorAll("p")[1].innerHTML = "hello all all all";


}