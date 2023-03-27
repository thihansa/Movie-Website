function validation_form(){
	var ex = document.getElementById('excellent').checked;
	var gd = document.getElementById('good').checked;
	var ave = document.getElementById('average').checked;
	var pr = document.getElementById('poor').checked;
	var vp = document.getElementById("verypoor").checked;
	if (document.getElementById('name').value == "") {
		alert('Please enter you name');
		return false;
	}
	if ((ex == false) && (gd == false) && (ave == false) && (pr == false) && (vp == false)){
		alert("Please rate our page");
		return false;
	}
	if (true) {
		var cR = document.getElementsByName("feedback");
		var len = cR.length;
		for (var i = 0; i < len; i++) {
			if(cR[i].checked){
				alert("Dear " + document.getElementById("name").value + 
				", Thank you very much for your feedback. You have rated our site as " + cR[i].value + 
				" and your comment was " +"' "+ document.getElementById("com").value +" '" + "." );
			}
		}
	}

}
