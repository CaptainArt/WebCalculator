window.onload = init;

	FirstValue;
	sign;
	
	function init () {
		start ();
		document.getElementById("0").onclick = zero;
		document.getElementById("1").onclick = one;
		document.getElementById("2").onclick = two;
		document.getElementById("3").onclick = three;
		document.getElementById("4").onclick = four;
		document.getElementById("5").onclick = five;
		document.getElementById("6").onclick = six;
		document.getElementById("7").onclick = seven;
		document.getElementById("8").onclick = eight;
		document.getElementById("9").onclick = nine;
		document.getElementById("pluss").onclick = pluss;
		document.getElementById("minuss").onclick = minuss;
		document.getElementById("multiplication").onclick = multiplication;
		document.getElementById("equally").onclick = result;
		document.getElementById("division").onclick = division;
		document.getElementById("deleting").onclick = deleting;
		document.getElementById("point").onclick = point;
		document.getElementById("PlussMinuss").onclick = PlussMinuss;
		document.getElementById("sqrt").onclick = sqrt;
		document.getElementById("power").onclick = power;
	}
	
	function start () {
		document.getElementById("InOut").value = "0";
	}
	
	function one () {
		var a = document.getElementById("InOut").value;
		if((a == "-" || a == "+") || ((a == "X" || a == "/") || (a == "^")))
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "1";
			return false;
		}
		else if(a == "0")
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "1";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = a + "1";
			return false;
		}
	}
	
	function two () {
		var a = document.getElementById("InOut").value;
		if((a == "-" || a == "+") || ((a == "X" || a == "/") || (a == "^")))
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "2";
			return false;
		}
		else if(a == "0")
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "2";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = a + "2";
			return false;
		}
	}
	
	function three () {
		var a = document.getElementById("InOut").value;
		if((a == "-" || a == "+") || ((a == "X" || a == "/") || (a == "^")))
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "3";
			return false;
		}
		else if(a == "0")
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "3";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = a + "3";
			return false;
		}
	}
	
	function four () {
		var a = document.getElementById("InOut").value;
		if((a == "-" || a == "+") || ((a == "X" || a == "/") || (a == "^")))
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "4";
			return false;
		}
		else if(a == "0")
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "4";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = a + "4";
			return false;
		}
	}
	
	function five () {
		var a = document.getElementById("InOut").value;
		if((a == "-" || a == "+") || ((a === "X" || a == "/") || (a == "^")))
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "5";
			return false;
		}
		else if(a == "0")
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "5";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = a + "5";
			return false;
		}
	}
	
	function six () {
		var a = document.getElementById("InOut").value;
		if((a == "-" || a == "+") || ((a == "X" || a == "/") || (a == "^")))
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "6";
			return false;
		}
		else if(a == "0")
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "6";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = a + "6";
			return false;
		}
	}
	
	function seven () {
		var a = document.getElementById("InOut").value;
		if((a == "-" || a == "+") || ((a == "X" || a == "/") || (a == "^")))
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "7";
			return false;
		}
		else if(a == "0")
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "7";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = a + "7";
			return false;
		}
	}
	
	function eight () {
		var a = document.getElementById("InOut").value;
		if((a == "-" || a == "+") || ((a == "X" || a == "/") || (a == "^")))
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "8";
			return false;
		}
		else if(a == "0")
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "8";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = a + "8";
			return false;
		}
	}
	
	function nine () {
		var a = document.getElementById("InOut").value;
		if((a == "-" || a == "+") || ((a == "X" || a == "/") || (a == "^")))
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "9";
			return false;
		}
		else if(a == "0")
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "9";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = a + "9";
			return false;
		}
	}
	
	function zero () {
		var a = document.getElementById("InOut").value;
		if((a == "-" || a == "+") || ((a == "X" || a == "/") || (a == "^")))
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "0";
			return false;
		}
		else if(a == "0")
		{
			document.getElementById("InOut").value = "";
			document.getElementById("InOut").value = "0";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = a + "0";
			return false;
		}
	}
	
	function point () {
		var a = document.getElementById("InOut").value;
		document.getElementById("InOut").value = a + ".";
		return false;
	}
	
	function PlussMinuss () {
		var a = document.getElementById("InOut").value;
		if(a == "0")
		{
			return false;
		}
		else if(Number(a) < 0)
		{
			var c = document.getElementById("InOut").value;
			var massive = c.split("-");
			massive[0] = "";
			document.getElementById("InOut").value = massive[0] + massive[1];
		}
		else
		{
		document.getElementById("InOut").value = "-" + a;
		return false;
		}
	}
	
	function pluss () {
		FirstValue = document.getElementById("InOut").value;
		sign = "1";
		document.getElementById("InOut").value = "+";
		return false;
	}
	
	function minuss () {
		FirstValue = document.getElementById("InOut").value;
		sign = "2";
		document.getElementById("InOut").value = "-";
		return false;
	}
	
	function multiplication () {
		FirstValue = document.getElementById("InOut").value;
		sign = "3";
		document.getElementById("InOut").value = "X";
		return false;
	}
	
	function division () {
		FirstValue = document.getElementById("InOut").value;
		sign = "4";
		document.getElementById("InOut").value = "/";
		return false;
	}
	
	function sqrt () {
		FirstValue = document.getElementById("InOut").value;
		if((Number(FirstValue)) < 0)
		{
			document.getElementById("InOut").value = "No value";
			return false;
		}
		else
		{
			document.getElementById("InOut").value = Math.sqrt(FirstValue);
			return false;
		}
	}
	
	function power () {
		FirstValue = document.getElementById("InOut").value;
		sign = "5";
		document.getElementById("InOut").value = "^";
		return false;
	}
	
	function deleting () {
		document.getElementById("InOut").value = "0";
		return false;
	}
	
	function result () {
		var SecondValue = document.getElementById("InOut").value;
		var MathResult;
		
		switch(sign)
		{
			case "1":
				MathResult = Number(FirstValue) + Number(SecondValue);
				break;
				
			case "2":
				MathResult = Number(FirstValue) - Number(SecondValue);
				break;
				
			case "3":
				MathResult = Number(FirstValue) * Number(SecondValue);
				break;
				
			case "4":
				MathResult = Number(FirstValue) / Number(SecondValue);
				break;
				
			case "5":
				MathResult = Math.pow(Number(FirstValue), Number(SecondValue));
				break;
			default:
				break;
			
		}
		document.getElementById("InOut").value = MathResult;
		return false;
	}