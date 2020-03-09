function Ploshad(){
	var a = parseInt(document.myform.storona1.value);
	var b = parseInt(document.myform.storona2.value);
	var c = parseInt(document.myform.storona3.value);
	var p = (a+b+c)/2;
	var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
	// document.myform.otvet.value=s;
	if ( ((a+b)>c) && ((a+c)>b) && ((b+c)>a) ){
		document.myform.otvet.value=s;
	}
	else{
		document.myform.otvet.value="Нельзя построить треугольник из этих отрезков";
	}
}