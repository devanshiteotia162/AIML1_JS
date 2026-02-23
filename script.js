// console.log(" Hello World");

// var num = 10;
// console.log(num);
// console.log(typeof(num));
// num=false;
// console.log(num);
// console.log(typeof(num));
// num="Devanshi Teotia";
// console.log(num);
// console.log(typeof(num));
// num=null;
// console.log(num);
// console.log(typeof(num));
// num=undefined;
// console.log(num);
// console.log(typeof(num));

// const sym1 = Symbol(4);
// console.log(sym1);
// const sym2 = Symbol(4);
// console.log(sym2);
// if (sym1==sym2){
//     console.log("true");
// }
// else{
//    console.log("false");
// }

var a = 10; var b = 20; 
 var linebreak = "<br>";

document.write("(a==b)=>");
result = (a==b);
document.write(result);
document.write(linebreak);
document.write("(a<b)=>");
result = (a<b);
document.write(result);
document.write(linebreak);
document.write("(a>b)=>");
result = (a>b);
document.write(result);
document.write(linebreak);



var count ;
document.write("Starting Loop"+"</br>");
for (count =0 ; count<10 ; count ++ ){
 document.write("Current count :"+count  )
 document.write("</br>");

 }
 document.write("Loop stopped !");
 <p>Set the varibles to different values and then try </p>
 const person ={
    fname : "Devanshi" ,
    lname : "Teotia" ,
    age : 19 ,
};
for ( let x in person ){
    console.log("person details : " +x+";" +person [x])
}



















