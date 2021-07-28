data_array = [];
function submitData() {
	var data_1 = document.getElementById('data_type_1').value;
	var data_2 = document.getElementById('data_type_2').value;
	var data_3 = document.getElementById('data_type_3').value;
	var data_4 = document.getElementById('data_type_4').value;
	data_array.push(data_1);
	data_array.push(data_2);
	data_array.push(data_3);
	data_array.push(data_4);
	console.log(data_array);
	document.getElementById("data_display").innerHTML=data_array;
	document.getElementById("data_submit").style.display="none";
	document.getElementById("data_sort").style.display="inline-block";
}
function sortData() {
	data_array.sort();
	console.log(data_array);
	document.getElementById("data_display").innerHTML=data_array;
}