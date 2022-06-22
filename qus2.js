var n = prompt("Please enter a number", "Any Number 1-9");
if(!isNaN(n)){
  
	var x = ((parseInt(n)+1) *n) /2;
  if(x % 5 == 0 || x % 3 == 0){
  	alert(x);
  }else{
    alert('Not a multiple');
  }
}else{
  alert('Please enter a number');
}
