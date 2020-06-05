// // Chapter#01

// // Task No:01
// alert("Hello World");

// // Task No:02
// alert("Error! please enter a valid password.");

// // Task No:03
// alert("Welcome to JS Land...");

// // Task No:04
// alert("Happy Coding!");

// // Task No:05
// console.log("Hello, i can run js through my web browser,s console.");


// // Chapter#02

// // Task No:01
// var username;

// // Task No:02
// var myName = "Muhammad Bilal";

// // Task No:03
// var message = "Hello World";
// alert(message);

// // Task No:04
// var stdName = "Ali";
// var stdAge = "15 years";
// var stdCourse = "Web and Mobile App Development";
// alert(stdName);
// alert(stdAge);
// alert(stdCourse);

// // Task No:05
// var email="bilal@xyz.com";
// alert("my email address is "+ email);

// // Task No:06
// var book="A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// // Task No:07
// document.write("Yes i can write html through js browser");

// // Task No:08
// var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// document.write(design);


// // Chapter#03

// // Task No:01
// var age= 20;
// alert("I am " +age+ " years old.");

// // Task No:02
// var birthYear=1999;
// document.write("My birth year is "+birthYear+"<br>");
// document.write("The datatype of my birth year is "+typeof(birthYear)+"<br>");

// // Task No:03
// var name=prompt("What is your name?");
// var product=prompt("Product title?");
// var quantity=prompt("How much is the quantity?");
// document.write(name+" ordered "+quantity+" "+product+" on xyzclothing.com");


// // Chapter#04

// // Task No:01
// var variable1="numbers";
// var variable2="$";
// var variable3="_";
// var variable4="$my_1stVariable";
// var variable5="letter";
// var variable6="$name";
// var variable7="name";
// var variable8="_name";
// var variable9="sensitive";
// var variable10="keywords";

// document.write("<h1>"+"Rules for naming JS variables"+"</h1>");
// document.write("variable names can only contain "+variable1+","+variable2+" and "+variable3+". For example "+variable4+"<br>" );
// document.write("Variable name begin with "+variable5+","+variable2+" and "+variable3+". For example "+variable6+","+variable7+" and "+variable8+"<br>");
// document.write("variable names are case "+variable9+"<br>");
// document.write("variable names should not be JS "+variable10+"<br>");

// // Chapter#04

// // Task No:01
// var val1=parseInt(prompt("Give 1st value to add?"));
// var val2=parseInt(prompt("Give 2nd value to add?"));
// var add=val1 + val2;
// document.write("The sum of "+val1+" and "+val2+" is "+add+"<br>");

// // Task No:02
// var val1=parseInt(prompt("Give 1st value to substract?"));
// var val2=parseInt(prompt("Give 2nd value to substract?"));
// var sub=val1 - val2;
// document.write("The sub of "+val1+" and "+val2+" is "+sub+"<br>");

// // Task No:03
// var val1=parseInt(prompt("Give 1st value to multiply?"));
// var val2=parseInt(prompt("Give 2nd value to multiply?"));
// var mul=val1 * val2;
// document.write("The multiplication of "+val1+" and "+val2+" is "+mul+"<br>");

// // Task No:04
// var val1=parseInt(prompt("Give 1st value to divide?"));
// var val2=parseInt(prompt("Give 2nd value to divide?"));
// var div=val1 / val2;
// document.write("The division of "+val1+" and "+val2+" is "+div);

// // Task No:05
// alert("The price of a movie ticket is 500pkr!");
// var ticket=parseInt(prompt("How many tickets you wanna buy?"));
// var totalpkr=ticket*500;
// document.write("The cost of your "+ticket+" tickets is "+totalpkr);

// // Task No:06
// var celcius=parseFloat(prompt("Enter value in Celcius:"));
// fahrenheit=(celcius*9/5)+32;
// document.write(celcius+"C is "+fahrenheit+"F");
// var fahrenheit1=parseFloat(prompt("Enter value in Fahrenheit:"));
// celcius1=(fahrenheit1-32)*5/9;
// document.write(fahrenheit1+"F is "+celcius1+"C");

// // Task No:07
// var price1=parseInt(prompt("Enter price of 1st item:"));
// var quantity1=parseInt(prompt("Enter Enter quantity of 1st item:"));
// var price2=parseInt(prompt("Enter price of 2nd item:"));
// var quantity2=parseInt(prompt("Enter Enter quantity of 1st item:"));
// var charges=100;
// var one=price1*quantity1;
// var two=price2*quantity2;
// var total=one+two+charges;
// document.write("<h1>Shopping Cart</h1><br>")
// document.write("Price of 1st item is: "+price1+"pkr<br>");
// document.write("Quantity of 1st item is: "+quantity1+"<br>");
// document.write("Price of 2nd item is: "+price2+"pkr<br>");
// document.write("Quantity of 2nd item is: "+quantity2+"<br>");
// document.write("Shipping charges are: "+charges+"pkr<br><br>");
// document.write("Total cost of your order is: "+total+"pkr");

var total_mks=parseInt(prompt("What are your total marks:"));
var obt_mks=parseInt(prompt("What are your obtained marks:"));
var percentage=parseFloat(obt_mks/total_mks*100);
document.write("You got "+obt_mks+" marks out of "+total_mks+" and your percentage is: "+percentage+"%");