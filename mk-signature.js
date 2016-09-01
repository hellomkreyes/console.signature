/*
* Console Signature Script
* Provides an HTML signature in the browser's console!
* Chrome/Firefox/Safari/IE Edge Compatible.
* MUST declare UTF-8 character encoding to enable Emojicon use.
*/

(function() {

	//declare variables for text - text string must start with %c
	//to enable styles to be applied. Else, both variables will
	//output to strings.
	var top_box = '%cଘ(੭*ˊᵕˋ)੭* ̀ˋ';
	var link = '%cwww.hellomkreyes.com';
	var bottom_box = '%c(◡ ‿ ◡ ✿)';
	var konami = '%cdo you know the konami code?';

	//declare variables for styling
	//broken down to individual lines to make more legible
	var top_box_style = 'margin: 0;'+
	'padding: 18px 49px;'+
	'color: #252A34;'+
	'background: #DE4057;'+
	'font-family: Arial, sans-serif;'+
	'font-size: 16px;' +
	'font-weight: 300;'+
	'line-height: 50px';

	var link_style = 'margin: 0;' +
	'padding: 18px 14px;'+
	'text-decoration: none;' +
	'color: #FFF;' +
	'background: #252A34;' +
	'letter-spacing: 1px;' +
	'font-family: Arial, sans-serif;' +
	'font-size: 11px;' +
	'font-weight: 300;' +
	'line-height: 50px'; 

	var bottom_box_style = 'margin: 0;'+
	'padding: 18px 53.5px;'+
	'color: #252A34;'+
	'background: #DE4057;'+
	'font-family: Arial, sans-serif;'+
	'font-size: 16px;' +
	'font-weight: 300;'+
	'line-height: 50px';

	var konami_style = 'margin: 0;' +
	'padding: 19px 30.5px;'+
	'color: #DE4057;' +
	'background: #252A34;' +
	'letter-spacing: 1px;' +
	'font-family: Arial, sans-serif;' +
	'font-size: 8px;' +
	'font-weight: 300;' +
	'line-height: 50px'; 

	//output text and style variables w/ console.log
	console.log(top_box, top_box_style);
	console.log(link, link_style);
	console.log(bottom_box, bottom_box_style);
	console.log(konami, konami_style);

})(window, document);