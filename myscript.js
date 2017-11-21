
document.getElementById("SetLS").onclick = function() {set("SetLS")};
document.getElementById("SetSS").onclick= function() {set("SetSS")};
document.getElementById("GetLS").onclick=function() { get("GetLS")};
document.getElementById("GetSS").onclick=function() { get("GetSS")};
document.getElementById("GetAllLS").onclick=function() { getAll("GetAllLS")};
document.getElementById("GetAllSS").onclick=function() { getAll("GetAllSS")};
document.getElementById("DeleteLS").onclick=function() { deleteAll("DeleteLS")};
document.getElementById("DeleteSS").onclick=function() { deleteAll("DeleteSS")};


function set(buttonID){
	if(buttonID=="SetLS"){
		localStorage.setItem(document.getElementById("key").value,document.getElementById("pair").value);
		alert("Set Item in Local Session");
		
	}
	else if(buttonID=="SetSS"){

		sessionStorage.setItem(document.getElementById("key").value,document.getElementById("pair").value);
		alert("Set Item in Session Storage");
	}
}


function get(buttonID){
	if(buttonID=="GetLS"){
		if(localStorage.getItem(document.getElementById("key").value)==null){
				
				alert("Not present in Local Storage")
				
		}
		else{
			document.getElementById("pair").value=localStorage.getItem(document.getElementById("key").value);
			//console.log(localStorage.getItem(document.getElementById("key").value));
			//alert("Get from Local Storage")
		}
	}
	else if(buttonID=="GetSS"){
		if(sessionStorage.getItem(document.getElementById("key").value)==null){
				
				alert("Not present in Session Storage")
				
		}
		else {
			//document.getElementById("pair").value=sessionStorage.getItem(document.getElementById("key").value);
			console.log(sessionStorage.getItem(document.getElementById("key").value));
			alert("Get from Session Storage")
		}
	}
}



function getAll(buttonID){
	if(buttonID=="GetAllLS"){
		var i=localStorage.length;
		while(i--){
			var key=localStorage.key(i);
			console.log(localStorage.getItem(key));
		}
		alert("Get All Item from Local Storage")
	}
	else if(buttonID=="GetAllSS"){
		
		var i=sessionStorage.length;
		while(i--){
			var key=sessionStorage.key(i);
			console.log(sessionStorage.getItem(key));
		}

		alert("Get All Item from Session Storage")
	}
}



function deleteAll(buttonID){
	if(buttonID=="DeleteLS"){
		localStorage.clear();
		alert("Delete All Item from Local Storage")
		
	}

	else if(buttonID=="DeleteSS"){
		
		sessionStorage.clear();
		alert("Delete All Item from Session Storage")
		
	}

}

