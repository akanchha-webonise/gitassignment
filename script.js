 var set=function() {
	if(document.getElementById("key").value=="" || document.getElementById("pair").value==""){
		alert("Enter in both fields")
	}	
	else{
		 this.name.setItem(document.getElementById("key").value,document.getElementById("pair").value);
		 alert("Added");
	}
}
 
var get=function() {
	if(this.name.getItem(document.getElementById("key").value)==null){
		alert("Not present in Storage")
				
	}
	else{
		console.log(this.name.getItem(document.getElementById("key").value));
		//alert("See console!")
	}
}

var getAll=function() {
	var i=this.name.length;
	while(i--){
		var key=this.name.key(i);
		console.log(this.name.getItem(key));
	}
	alert("Get All Item from Storage")
}	

var deleteAll=function(){
		this.name.clear();
		alert("Deleted All Item from Storage")	
		
}

var obj1={
	name: localStorage
	
}

var obj2={
	name: sessionStorage
	
}
var set_local_storage=set.bind(obj1);
var set_session_storage=set.bind(obj2);
var get_local_storage=get.bind(obj1);
var get_session_storage=get.bind(obj2);
var getAll_local_storage=getAll.bind(obj1);
var getAll_session_storage=getAll.bind(obj2);
var delete_local_storage=deleteAll.bind(obj1);
var delete_session_storage=deleteAll.bind(obj2);



document.getElementById("SetLS").onclick = set_local_storage;
document.getElementById("SetSS").onclick = set_session_storage;
document.getElementById("GetLS").onclick=get_local_storage;
document.getElementById("GetSS").onclick=get_session_storage;
document.getElementById("GetAllLS").onclick=getAll_local_storage;
document.getElementById("GetAllSS").onclick=getAll_session_storage;
document.getElementById("DeleteLS").onclick=delete_local_storage;
document.getElementById("DeleteSS").onclick=delete_session_storage;
document.getElementById("AddCookie").onclick=function(){ 
	if(document.getElementById("key").value=="" || document.getElementById("pair").value==""){
		alert("Enter in both fields")
	}
	else{
		console.log(document.cookie=document.getElementById("key").value,document.getElementById("pair").value);
		alert("Added");
	}
};

