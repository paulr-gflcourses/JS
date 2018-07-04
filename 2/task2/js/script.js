function send(){
	
	console.log("sending!");
	/*
	fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json));
  */
  
  /*writing();*/
  getting();
}

function objToTable(o){
	
	let table='<tr>';
	for(key in o){
		table+='<th>'+key+'</th>';
	}
	table+='</tr>';
	
	table+='<tr>';
	for(key in o){
		table+='<td>'+o[key]+'</td>';
	}
	table+='</tr>';

	return table;
}

function getting(){
	let restoredObj = JSON.parse(localStorage.getItem('entry'));
	console.log(restoredObj);
	let tables = document.getElementById("results");
	
	let t = document.createElement("table");
	t.className="table";
	let table=objToTable(restoredObj);
	t.innerHTML=objToTable(restoredObj);
	
	tables.appendChild(t);
	
	
}


function writing(){
	let entry={
	  "userId": 1,
	  "id": 1,
	  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
	  "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
	};
	localStorage.setItem('entry', JSON.stringify(entry));

}



