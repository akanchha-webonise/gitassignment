 function set() {
	if(document.getElementById("key").value=="" || document.getElementById("pair").value==""){
		alert("Enter in both fields")
	}	
	else{
		 this.name.setItem(document.getElementById("key").value,document.getElementById("pair").value);
		 alert("Added");
	}

}
 
function get() {
	if(this.name.getItem(document.getElementById("key").value)==null){
		alert("Not present in Storage")
				
	}
	else{
		console.log(this.name.getItem(document.getElementById("key").value));
		alert("See console!")
	}
}

function getAll() {
	var i=this.name.length;
	while(i--){
		var key=this.name.key(i);
		console.log(this.name.getItem(key));
	}
	alert("Get All Item from Storage")
}	

function deleteAll(){
		this.name.clear();
		alert("Deleted All Item from Storage")	
		
}

var obj1={
	name: localStorage
	
}

var obj2={
	name: sessionStorage
	
}

document.getElementById("SetLS").onclick = function() {set.call(obj1)};
document.getElementById("SetSS").onclick = function() {set.call(obj2)};
document.getElementById("GetLS").onclick=function() { get.apply(obj1)};
document.getElementById("GetSS").onclick=function() { get.call(obj2)};
document.getElementById("GetAllLS").onclick=function() { getAll.apply(obj1)};
document.getElementById("GetAllSS").onclick=function() { getAll.call(obj2)};
document.getElementById("DeleteLS").onclick=function() { deleteAll.call(obj1)};
document.getElementById("DeleteSS").onclick=function() { deleteAll.call(obj2)};
document.getElementById("AddCookie").onclick=function(){ 
	if(document.getElementById("key").value=="" || document.getElementById("pair").value==""){
		alert("Enter in both fields")
	}
	else{
		console.log(document.cookie=document.getElementById("key").value,document.getElementById("pair").value);
		alert("Added");
	}
};

