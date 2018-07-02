const lst=document.getElementById("myUL");

const lstEls=document.getElementsByTagName("li");
for (i = 0; i < lstEls.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  lstEls[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


const btn=document.getElementById("add");
btn.addEventListener("click",function(){
    const tfield=document.getElementById("myInput").value;
    const li=document.createElement("li");
    const t=document.createTextNode(tfield);
    li.appendChild(t);
    if (tfield===''){
    }else{
		const lst=document.getElementById("myUL");
    	
		var span = document.createElement("button");
	  var txt = document.createTextNode("\u00D7");
	  span.className = "close";
	  span.appendChild(txt);
	  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
	  li.appendChild(span);
	  document.getElementById("myUL").appendChild(li);
    }
	
	
});