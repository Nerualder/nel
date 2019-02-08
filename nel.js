// nel.js
// 0.0.7 in Development
// nel is a set of tools that hopefully aid web developers with a variety of time saving features
// INTENTIONALLY LEFT COMMENTING OUT

// Notes
// * Add path ability to cookie and default
// * Check for defaults on all functions
// * need x button to close out centerBlock
// * would like to make function calls more consistent
// * would like to have ability to add text of id or class to element called by highlight


// support functions for nel() ---------------------------------------------------------------------------------------------

// remove a DOM element by classname
// https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
function nel_RemoveClass_JDWSA(className) { 
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// cycle through DOM CLASS ELEMENTS
// https://stackoverflow.com/questions/18927025/getelementsbyclassname-to-change-the-style-of-elements-when-event-occurs and adapted
function nel_loopelements_JWDSA(coll, color, aname){
let x = document.createElement("span");                     
let t = document.createTextNode(aname);    // Create a text node
    for(var i=0, len=coll.length; i<len; i++)
    {
        coll[i].style["border"] = "thick solid " + color;
		coll[i].appendChild(x)
    }
}

// nel - nel is an acronym - what do you think it stands for? --------------------------------------------------------------
var nel = {
	// UI ------------------------------------------------------------------------------------------------------------------
	centerBlock: function(displayme=true,message='',bColor='#ADD8E6'){
		if (displayme == false){
			nel_RemoveClass_JDWSA('nel_centerBlock');
			return false
		}
		nel_RemoveClass_JDWSA('nel_centerBlock');
		let div = document.createElement('div');
		document.body.insertBefore(div, document.body.firstChild); 
		div.style.height = '150px'; div.className = 'nel_centerBlock';
		div.style.backgroundColor = bColor; 
		div.style.borderRadius = '12px'; div.style.width = "90%";
		div.style.margin= "auto"; div.style.position= "absolute";
		div.style.top= "0"; div.style.left= "0";
		div.style.right= "0"; div.style.bottom= "0";
		let inlineStyle = "text-align:center;font-size:1.3em;transform:translateY(-50%);top:50%;position:relative";
		div.innerHTML = " <div style='" + inlineStyle + "' class='nel_centerBlock_inner'>"  + message + "</div>";
	},
	anyBlock: function({id,className,message,bColor,top,left,height,width,zindex}){
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.id = `${id}`; div.className = `${className}`;
		div.innerHTML = `${message}`; div.style.backgroundColor = bColor;
		div.style.top = `${top}`; div.style.left = `${left}`;
		div.style.width= `${width}`; div.style.height = `${height}`;
		div.style.zIndex = `$(zindex}`;	
		if(top !== 'undefined') div.style.position = "absolute"
		},
	highlight: function(selector,color='yellow'){
		let tmp = ''
		let aname = selector.substring(1);
		if(selector.charAt(0)=="#"){tmp = document.getElementById(aname);tmp.style.border = "thick solid " + color}
		if(selector.charAt(0)=="."){tmp = document.getElementsByClassName(aname);nel_loopelements_JWDSA(tmp, color,aname)}	
	},
	// UI TOOLS ------------------------------------------------------------------------------------------------------------
    listenWidth: function(){
		window.addEventListener("resize", function(){console.log(document.documentElement.clientWidth)})	
	},
	listenHeight: function(){
		window.addEventListener("resize", function(){console.log(document.documentElement.clientHeight)})	
	},
	size: function(orientation) {
		return (orientation === "width" ? document.documentElement.clientWidth : document.documentElement.clientHeight)
	},
	read: function(idc){
		// return selected target
		let tmp = document.querySelector(`${idc}`);
		return(tmp)
		},
	// GENERAL TOOLS --------------------------------------------------------------------------------------------------------
    displayCookies: function(){
		console.log("**nel: Displaying all cookies******");
		let cookies = document.cookie.split(";");
		for (const nelCook of cookies) 
			{
				let nelMini = nelCook.split("=");
				console.log("--> Name = " + nelMini[0] + " || " + "Value = " + nelMini[1]);
			}
		console.log("**END nel: Displaying all cookies**");
    },
	setCookie: function({name, value}, days, secure) {
		let sec = secure ? "secure" : "";
		var d = new Date;
		d.setTime(d.getTime() + 24*60*60*1000*days);
		document.cookie = `${name}=${value};path=/;expires=` + d.toGMTString() + ";" + sec
	},
	delCookie: function(name) {
		document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';			
	},
	r: function(leng=6,UPPER=false) {
		leng = 	(leng > 10) ? 10 : (leng < 1) ? 1 : leng;
		let tmath = Math.random().toString(36).slice(3,leng+3)
		return x = (UPPER) ? tmath.toUpperCase() : tmath
	},
	backit: function(id="",variable = "backupviasessionStorage",HTML = true) { // EXPERIMENTAL
		let bringit = "";
		if (id=="") {bringit = new XMLSerializer().serializeToString(document)} else {
		bringit = (HTML) ? document.getElementById(id).innerHTML : document.getElementById(id).innerText}
		sessionStorage.setItem(variable, bringit);
	}
}
