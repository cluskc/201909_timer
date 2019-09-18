
var counter = setInterval(Gogogo,1000);
var a = 0;
function Gogogo() {
	a = a + 1;
	document.getElementById("a").innerHTML = a;
	if(a==10){
		document.getElementById("c").style.display = 'block';
	}
	if(a==20){
		document.getElementById("b").style.display = 'block';
		document.getElementById("c").style.float = 'left';
	}
}
