
# nel() Javascript Library
---
Tools for Web Developers

Version 0.0.6 - 02/07/2019

> javascript library for implementing ES6 and testing techniques with Chrome
> various tools to build upon and grow a homebrew kit

## UI

### centerBlock(options)
**(DISPLAYME, message, bgcolor)**
* true/false : *Remove any previously declared block*  - default = true
* "message"  : *Message to be displayed* - default = ""
* "red"      : *Background color* - default = "#ADD8E6"

> centerBlock creates a modal like window with a custom message and color (hex is fine)
> the classname for the div is nel_centerBlock if you want to customize the default appearance
```javascript
nel.centerBlock(true,"Hello World", "red") // displays a message with text 'Hello World' and a bgcolor of red 
nel.centerBlock(false) // remove any previously declared block
nel.centerBlock(true,"Hello") // displays a light blue (default) message with hello
nel.centerBlock(true) // just displays a light blue box  (not very useful)
```

### anyBlock(options)
- options:{id,className,message,bColor,top,left,height,width,zindex
- has more options than centerBlock and you can abandon the styling if you want to use your own class
* id: id of your div
* className: class you wish to assign
* message: this can include html
* bColor: background color
* top: top y
* left: left x
* height: height of div
* width: width of div
* zindex: apply a zindex
- currently anyBlock uses position: absolute if you don't use your own class
```javascript
// you dont have to use inline options - just make your own css class
// this avoids having the position: absolute forced upon you
var options = {
	id:'main',
	className:'fruits',
	message:'<h2>These are the times</h2>',
}
nel.anyBlock(options)

// create a div with id main and class fruits - contains <h2>These are the times</h2>, with a background color of red, top position of 40px and left of 50px
// a height of 300px and width of 500px, finally a zindex of 40.
nel.anyBlock({id:'main',className:'fruits',message:'<h2>These are the times</h2>',bColor:'red',top:'40px',left:'50px',height:'300px',width:'500px',zindex:'40'})

// you can use an options object for everything if you want
var options = {
	id:'main',
	className:'fruits',
	message:'<h2>These are the times</h2>',
	bColor:'red',
	top:'40px',
	left:'50px',
	height:'300px',
	width:'500px',
	zindex:'40'
}
nel.anyBlock(options)
```

### highlight(options)
- options: selector,color
- highlight any div (or technically element) via id or class. If you use class, nel will highlight every element with a default border color of yellow.
- you can change the color. 
```
// highlights every elem contains classname parrot (preset color - yellow border)
nel.highlight(".parrot")

// same as above but with a red border
nel.highlight(".parrot", "red") 
```

## UI TOOLS

### **listenWidth()**
- via the console, display every width size upon resize of your viewpanel
```
nel.listenWidth() 
```

### **listenHeight()**
- via the console, display every height size upon resize of your viewpanel
```
nel.listenHeight() 
```

### **size(value)**
- this will console.log the width or height of the viewpanel
```
nel.size("width"); 
nel.size("height"); 
```

### **read(selector)**
- this is simply document.querySelector() - only tested with the following
```
nel.read("#id") // returns the html contents of any element id
nel.read(".class") // returns the html contents of the FIRST class found
```


## GENERAL TOOLS 

### **displayCookies()**
- this will console.log all cookies located on the page you are viewing in a fairly pretty format
```
nel.displayCookies()
```

### **setCookie(options)**
- options = {name:"value",value:"value"},days,SECURE
- sets a cookie by passing the appropriate paramaters like so:
```
// cookie name of fruit, a val of pear, six days expiration, no secure flag
nel.setCookie({name:'fruit',value:'pear'},days:6,false) 
// cookie name of fruit, a val of pear, six days expiration, secure flag
nel.setCookie({name:'fruit',value:'pear'},days:30,true) 
```

### **delCookie(name)**
- removes a cookie by name
```
nel.delCookie("fruit") /* removes the fruit cookie */
```

### **r(options)**
#### randomized alpha/numeric string
- option : [1-10], true|false
- returns a random 6 alpha numeric string by default
- change length of string between 1 and 10
- Uppercase: default false but if you set to true will return the string in uppercase
```
nel.r() // this gives you a six character random alpha/numberic string
net.r(4,true) // this gives you a four character random alpha/numeric string in uppercase
x = nel.r() // assigns the variable x a six character random alpha/numeric string
```

### **backit(options)**
#### *Experimental* Backup via sessionStorage
- Can backup the entire webpage to sessionStorage. Could be a security issue or performance problem.
- You can back up by ID (like a div) and change the value of the sessionStorage variable
- the intent here is to store say the contents of a rich text editor and you could set it as an interval 
- a local backup. I believe sessionStorage has a max of 10MB. 
- option : id, var, type
- target a specific id or leave blank for the entire page
- name of variable of sessionStorage variable you want to use (default = backupviasessionstorage)
- Grab HTML or TEXT (only applies to an ID that you are targeting) may need to add val() also
- could also be used for performance boosting a webpage?
```
nel.backit() // store the entire webpage in sessionStorage:backupviasessionstorage
nel.backit("apple","backup") // store the innerHTML contents of element apple to sessionStorage:backup
nel.backit("apple","backup",false) // store the innerText contents of element apple to sessionStorage:backup
```

## Change Log

#### 2019/02/07 0.0.6
| Version | Type                 | Change                         | Method
| --------|----------------------|--------------------------------|------------------------------|
| 0.0.6   | GENERAL TOOLS        | backit now uses sessionStorage | backit()                     |

#### 2019/02/05 0.0.5
| Version | Type                 | Change                     | Method
| --------|----------------------|----------------------------|------------------------------|
| 0.0.5   | UI                   | Bug fixes - used margins   | centerBlock()                |
| -       |                      | can't get flex to work :(  |                              |

#### 2019/02/04 0.0.4
| Version | Type                 | Change                     | Method
| --------|----------------------|----------------------------|--------------------|
| 0.0.4   | GENERAL TOOLS        | Replaced if with ternary   | r()                |
| -       | -                    | New                        | backit()           |
| 	  | ALL 		 | Some consolidation of code |                    |

#### 2019/02/03 0.0.3
| Version | Type                 | Change             | Method
| --------|----------------------|--------------------|--------------------|
| 0.0.3   | UI TOOLS             | New                | read()             |
| -       | -                    | -                  | -                  |
| -       | UI                   | New                | highlight()        |
| -       | -                    | -                  | -                  |
| -       | GENERAL TOOLS        | -                  | r()                |

#### 2019/02/02 0.0.2
| Version | Type                 | Change             | Method
| --------|----------------------|--------------------|--------------------|
| 0.0.2   | UI                   | New                | centerBlock()      |
|         |                      |                    | anyBlock()         |

#### 2019/02/01 0.0.1

| Version | Type                 | Change             | Method
| --------|----------------------|--------------------|--------------------|
| 0.0.1   | UI TOOLS             | New                | listenWidth()      |
| -       | -                    | New                | listenHeight()     |
| -       | -                    | New                | size()             |
| -       | GENERAL TOOLS        | New                | displayCookies()   |
| -       | -                    | New                | setCookie()        |
| -       | -                    | New                | delCookie()        |




