var buttonEle=document.getElementById("SetLS");
buttonEle.addEventListener("click",function(){
	localStorage.setItem(document.getElementById("key").value,document.getElementById("pair").value);
alert("Set Item in Local Session")
});

var buttonEleSS=document.getElementById("SetSS");
buttonEleSS.addEventListener("click",function(){
	sessionStorage.setItem(document.getElementById("key").value,document.getElementById("pair").value);
alert("Set Item in Session Storage")
});

var buttonEleGetLS=document.getElementById("GetLS");
buttonEleGetLS.addEventListener("click",function(){
	var i=localStorage.length;
	while(i--){
		var key=localStorage.key(i);
		console.log(localStorage.getItem(key));
	}
	

	//localStorage.setItem(document.getElementById("key").value,document.getElementById("pair").value);
alert("Get All Item from Local Storage")
});


var buttonEleGetSS=document.getElementById("GetSS");
buttonEleGetSS.addEventListener("click",function(){
	var i=sessionStorage.length;
	while(i--){
		var key=sessionStorage.key(i);
		console.log(sessionStorage.getItem(key));
	}
	
alert("Get All Item from Session Storage")
});


var buttonDelLS=document.getElementById("DeleteLS");
buttonDelLS.addEventListener("click",function(){
	var i=localStorage.length;
	while(i--){
		var key=localStorage.key(i);
		localStorage.removeItem(key);
	}
	
alert("Delete All Item from Local Storage")
});

var buttonDelSS=document.getElementById("DeleteSS");
buttonDelSS.addEventListener("click",function(){
	var i=sessionStorage.length;
	while(i--){
		var key=sessionStorage.key(i);
		sessionStorage.removeItem(key);
	}
	
alert("Delete All Item from Session Storage")
});

