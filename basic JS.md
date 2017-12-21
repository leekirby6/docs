### arguments (đối số)

### khởi tạo 

var x1 = {};           // new object
var x2 = '';           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var x6 = /()/;         // new regexp object
var x7 = function(){}; // new function object

### let - var
	function foo() {
	   let x = 10;
	   if (true) {
		  let x = 20; // x này là x khác rồi đấy
		  console.log(x); // in ra 20
	   }
	   console.log(x); // in ra 10
	}	

	
	function foo() {
   var x = 10;
   if (true) {
      var x = 20; // x ở đây cũng là x ở trên
      console.log(x); // in ra 20
   }
   console.log(x); // vẫn là 20
	}
	
	

### spread operator (...)



### inject


### 

### Giá trị false nằm trong các trường hợp sau

''
0
NaN
null
undefined

### Giá trị true ngoài 5 trường hợp trên


### closure và scope
https://medium.com/@aquancva/lexical-scope-v%C3%A0-block-scope-trong-javascript-5d8d22c89fc6
1. scope : lexical scope và block scope
- global scope
	var x = 1;

	// global scope
	function one() {
	  alert(x); // alerts '1'
	}
 
- lexical scope 
	không gian biến được khai báo ở trong hàm(

	function foo() {
		var bar;
	}

- block scope
	 không gian biến được khai báo giữa 1 cặp dấu ngoặc nhọn “{…}”. Từ khoá “let" và “const" 
	 được dùng để khai báo biến ở trong block scope. 

	if (true) {
		let variable;
	}

#### closure = lexical scope = static scope 
Closure = Hàm + Lexical Scope mà hàm đó được tạo ra
	
	function sayHello(){
		var message = 'Hello'; // define a local variable.
		return function(){ // return a function from sayHello.
		console.log(message); // wanna know if 'message' still in scope?
		}
	}

	var helloSayer = sayHello();
	helloSayer(); // call the inner function returned from sayHello.
	
### hosting trong js
	var foo = 10;
	function bar() {
		if (!foo) {
			var foo = 100;
		}
		console.log(foo);
	}
	bar();
	
## Function
### 
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};

// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good

let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}

### method chaining

	  
### undefined và null
Undefined Không phải là Null
Với JavaScript, null là đối tượng, undefined là cho biến, thuộc tính và đối tượng.

Là null, một đối tượng đã được xác định, nếu không nó sẽ là undefined.

Nếu bạn muốn kiểm tra một đối tượng tồn tại, điều này sẽ ném ra một lỗi nếu đối tượng là không xác định:

Không chính xác:
if (myObj !== null && typeof myObj !== “undefined”)

Vì lý do đó, bạn phải kiểm tra typeof() trước:

Chính xác:
if (typeof myObj !== “undefined” && myObj !== null)
