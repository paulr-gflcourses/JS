function checkStorage(){
	if (localStorage.length!=0){
		let entry = JSON.parse(localStorage.getItem('entry'));
		showOnTable(entry);
	}
}


function sendRequest(){
	
	let selectCat=document.getElementById("select");
	let category=selectCat[selectCat.selectedIndex].text;
	let num=document.getElementById("input").value;
	let url="";
	if (num==""){
		url=`https://jsonplaceholder.typicode.com/${category}`;
	}else{
		url=`https://jsonplaceholder.typicode.com/${category}/${num}`
	}

	  fetch(url)
	  .then(response => response.json())
	  .then(json=>{
		  localStorage.setItem('entry', JSON.stringify(json));
		  showOnTable(json);
	  });

}

function showOnTable(entry){
	let t = document.getElementById("table");
	let table=objToTable(entry);
	t.innerHTML=objToTable(entry);
}

function objToTable(o){
	let table='';
	if (o.length){
		table+='<tr>';
		for(key in o[0]){
			table+='<th>'+key+'</th>';
		}
		table+='</tr>';
		
		for(row in o){
			table+='<tr>';
			for (cell in o[row]){
				table+='<td>'+o[row][cell]+'</td>';
			}
			
			table+='</tr>';
		}
	}else{
		
		table+='<tr>';
		for(key in o){
			table+='<th>'+key+'</th>';
		}
		table+='</tr>';
		
		table+='<tr>';
		for(key in o){
			table+='<td>'+o[key]+'</td>';
		}
		table+='</tr>';
	}
	return table;
}






