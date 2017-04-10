var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
script.onreadystatechange = docLoaded;
script.onload = docLoaded;

var head = document.getElementsByTagName('head')[0];
head.appendChild(script);

function docLoaded(){
	// LOAD STYLESHEET
	//$('head').append('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">');
	$('head').append('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">');
	
	// LOAD MESSAGE.TXT
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			$('body').prepend( this.responseText ); 
			//var target = $('a[href*="DR"]' , 'td.midbodyText')[0].text;
			var drmsg = $('a[href*="DR"]' , 'td.midbodyText')[0].text;
			if ( /[0-9]+/.exec(drmsg) ) {
				$( 'span#drnumber' ).text( /[0-9]+/.exec(drmsg) );
			}else {
				$( 'span#drnumber' ).text( "1" );
			}
			

		}
	};
	xhttp.open("GET", "//www.sciserver.org/messages/messagedr1to7.txt", true);
	xhttp.send();
}