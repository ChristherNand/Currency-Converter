function Currency(){
	var currencies = document.getElementById("converter").value;
	return currencies;  
	}
function Calculate(){
	var currencies = Currency(); 
	var value = document.getElementById("value1").value; 
  const usaDollar = 3300;
  const euro = 3400;
  const ausDollar = 2400;
	if(value == ""){
		alert("Please Introduce the amount in pesos to be converted")
	}
  else{
		switch(currencies){
			case "Dollar":
				document.getElementById("value2").value = (value / usaDollar).toFixed(2);
			break; 
			case "Euro":
				document.getElementById("value2").value = (value / euro).toFixed(2);
			break; 
			case "Aus":
				document.getElementById("value2").value = (value / ausDollar).toFixed(2);
			break; 
		}
	}
}