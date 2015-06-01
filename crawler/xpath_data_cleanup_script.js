function cleanup(xpath_string){

	var array_xpath = xpath_string.split(" ");
	console.log(array_xpath)

	// var matches = /in/g.exec(xpath_string)

	var results = "";

	var reg1 = /\/in\//g
	var reg2 = /\/pub\//g

	
	for(var i = 0; i < array_xpath.length; i++){

		var indexMatch;

		if(reg1.test(array_xpath[i])){
			// indexMatch = array_xpath[i].indexOf("/in/")
			results+= array_xpath[i].slice(24)+"|"
		} else if(reg2.test(array_xpath[i])){
			results+= array_xpath[i].slice(24)+"|"
		}

		results = results.slice(0, results.length)


	}

	console.log("results", results);

}

(cleanup("https://www.linkedin.com/in/gandalfhernandez https://www.linkedin.com/in/pvatala https://www.linkedin.com/in/tleef https://www.linkedin.com/pub/jonathan-jengo/4/542/b07"))