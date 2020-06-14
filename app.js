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

// // Chapter#05

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

// // Task No:07
// var total_mks=parseInt(prompt("What are your total marks:"));
// var obt_mks=parseInt(prompt("What are your obtained marks:"));
// var percentage=parseFloat(obt_mks/total_mks*100);
// document.write("You got "+obt_mks+" marks out of "+total_mks+" and your percentage is: "+percentage+"%");

// // Task No:08
// var amount1=parseFloat(prompt("Enter amount in Saudi Riyal:"));
// var amount2=parseFloat(prompt("Enter amount in US Dollars:"));
// var riyal=amount1*43;
// var usd=amount2*160;
// var totalAmount=riyal+usd;
// document.write("<h1>Currency Convertor</h1><br>");
// document.write("The amount in Saudi Riyal is: "+amount1+"<br>");
// document.write("The amount in American USD is: "+amount2+"<br>");
// document.write("The total amount in Pakistani Ruppee is: "+totalAmount);

// // Task No:09
// var currentYear=2020;
// var birthYear=parseInt(prompt("Enter your birth year"));
// var dob=currentYear-birthYear;
// document.write("<h1>Age Calculator</h1><br>");
// document.write("You are "+dob+" years old.");

// // Task No:10
// var radius=parseFloat(prompt("Enter radius of a circle:"));
// var circumference=2*3.142*radius;
// var area=3.142*(radius)**2;
// document.write("<h1>The Geometrizer</h1><br>");
// document.write("The radius of a circle is: "+radius+"<br>");
// document.write("The circumference of a circle is: "+circumference+"<br>");
// document.write("The area of a circle is: "+area+"<br>");

// // Task No:11
// var snack=prompt("Enter your favourite snack: ");
// var currentAge=parseInt(prompt("Enter your current age: "));
// var expectedAge=parseInt(prompt("Enter your expected maximum age: "));
// var snackPerDay=parseInt(prompt("How many packets of " +snack+ " do you eat per day: "));
// var totalSnacks=(expectedAge-currentAge)*12*30*snackPerDay;
// document.write("<h1>The lifetime supply calculator</h1><br>");
// document.write("You are going to eat "+totalSnacks+" "+snack+" in your whole expected life :) ");


// // Chapter#06-to-09

// // Task No:01
// var a=parseInt(prompt("Enter any number:","1"));

// document.write("<h3>Result</h3><br>");
// document.write("The input number is: "+a+"<br>");
// document.write("---------------------------------<br>");
// document.write("The value of ++a is: "+ ++a +"<br>");
// document.write("Now the value of a is: "+ a +"<br>");
// document.write("---------------------------------<br>");
// document.write("The value of a++ is: "+ a++ +"<br>");
// document.write("Now the value of a is: "+ a +"<br>");
// document.write("---------------------------------<br>");
// document.write("The value of --a is: "+ --a +"<br>");
// document.write("Now the value of a is: "+ a +"<br>");
// document.write("---------------------------------<br>");
// document.write("The value of a-- is: "+ a-- +"<br>");
// document.write("Now the value of a is: "+ a +"<br>");

// // Task No:02
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write(result);

// // Task No:03
// var name=prompt("What is your name?");
// document.write("Hello "+name+", How are you?");

// // Task No:04
// var number=parseInt(prompt("Enter any number to see its table:","5"));
// document.write("<h2>Multiplication Table of "+number+"</h2><br>");
// document.write(number+" * 1 = "+number*1+"<br>");
// document.write(number+" * 2 = "+number*2+"<br>");
// document.write(number+" * 3 = "+number*3+"<br>");
// document.write(number+" * 4 = "+number*4+"<br>");
// document.write(number+" * 5 = "+number*5+"<br>");
// document.write(number+" * 6 = "+number*6+"<br>");
// document.write(number+" * 7 = "+number*7+"<br>");
// document.write(number+" * 8 = "+number*8+"<br>");
// document.write(number+" * 9 = "+number*9+"<br>");
// document.write(number+" * 10 = "+number*10+"<br>");

// // Task No:05
// var sub1=prompt("Enter first subject name:");
// var mks1=parseInt(prompt("Enter obtained marks in "+sub1));
// var sub2=prompt("Enter second subject name:");
// var mks2=parseInt(prompt("Enter obtained marks in "+sub2));
// var sub3=prompt("Enter third subject name:");
// var mks3=parseInt(prompt("Enter obtained marks in "+sub3));
// var totalMarks=100;
// document.write("<h2>Subject----Total Marks----Obtained Marks----Percentage</h2><br>");
// document.write("<h2>"+sub1+"----"+totalMarks+"----"+mks1+"----"+mks1/totalMarks*100+"%</h2><br>");
// document.write("<h2>"+sub2+"----"+totalMarks+"----"+mks2+"----"+mks2/totalMarks*100+"%</h2><br>");
// document.write("<h2>"+sub3+"----"+totalMarks+"----"+mks3+"----"+mks3/totalMarks*100+"%</h2><br>");
// document.write("<h2>"+totalMarks*3+"----"+(mks1+mks2+mks3)+"</h2><br>");


// // Chapter#09-to-11

// //Task No:01
// var city=prompt("Enter your city","karachi");
// if(city=="karachi"){
// document.write("Welcome to the city of lights");
// }else if(city=="mirpurkhas"){
//     document.write("Welcome to the city of mangoes");
// }else if(city=="sargodha"){
//     document.write("Welcome to the city of eagles");
// }else{
//     document.write("Sorry, your city is not in our database.");
// }

// //Task No:02
// var gender=prompt("What is your gender");
// if(gender=="male"){
//     document.write("Hello Sir, how are you?");
//     }else if(gender=="female"){
//         document.write("Hello Mam, how are you?s");
//     }else{
//         document.write("Sorry, gender not specified.");
//     }

// //Task No:03
// var trafficColor=prompt("Name the traffic signal color:");
// if(trafficColor==="red"){
// document.write("Must Stop!");
// }else if(trafficColor==="yellow"){
//     document.write("Ready to move!");
// }else if(trafficColor==="green"){
//     document.write("Move now!");
// }else{
//     document.write("Sorry, That's not traffic color!");
// }

// //Task No:04
// var currentFuel=prompt("How much fuel is remaining?");
// if(currentFuel<0.25){
//     document.write("Please refill the tank");
// }else{
//     document.write("You are good to go!");
// }

// //Task No:05

// //a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// //b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// //c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// //d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// //e
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// //f
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

//Task No:06
// var guessedNumber=parseInt(prompt("Guess the number:"));
// var number=4;
// if(guessedNumber==number){
//         document.write("Bingo! Correct answer");
//     }else if(guessedNumber==number+1){
//         document.write("Close enough to correct answer!");
//     }else{
//         document.write("Wrong guess!");
// }

// //Task No:07
// var number=parseInt(prompt("Enter number to check wheather it is even or odd:"));
// if(number%2==0){
//     document.write(number+" is an even number!");
// }else{
//     document.write(number+" Is an odd number");
// }

// //Task No:08
// var temp=prompt("Enter your current temperature");
// if(temp>=40){
//     document.write("Its too hot outside");
// }else if(temp>=30){
//     document.write("Its normal weather outside");
// }else if(temp>=20){
//     document.write("Its a cold weather");
// }else if(temp>=10){
//     document.write("Its too cool outside");
// }

// //Task No:09
// var firstNum=parseInt(prompt("Enter first value:"));
// var secondNum=parseInt(prompt("Enter second value:"));
// var sign=prompt("Enter any of these signs +, -, *, /:");
// if(sign == '+'){
//     document.write("The addition is "+(firstNum+secondNum));
// }else if(sign == '-'){
//     document.write("The substraction is "+(firstNum-secondNum));
// }else if(sign == '*'){
//     document.write("The multiplication is "+(firstNum*secondNum));
// }else if(sign == '/'){
//     document.write("The division is "+(firstNum/secondNum));
// }
