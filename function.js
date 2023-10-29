// function
// 01
function user(fullName){
    let msg=fullName;
    console.log(msg);
}
user("nishalini Thirukkumar");

// Q2
function user(firstName,lastName){
 let msg=firstName+lastName;
 console.log(msg);
}
user("nishalini", "Thirukkumar");

// 3
function add(number1,number2){
   console.log(number1+number2);
}
  add(23 , 60);

 //  4
 function area(length,width){
   console.log(length*width)
 }
 area(2,6);

 // 5 perimeter = 2x(length + width).
 function A(length,width){
console.log(2*(length + width))
 }
 A(2,3);
 // 6volume = length x width x height.
function volume(length,width,height){
 console.log(length*width*height);
}
volume(4,3,5);

let sum1=(x,y,z)=>x*y*z;
console.log(sum1(2,3,4))

// 7area = π x r x r
function areaofcircle(PI,r){
 console.log( PI * r * r);
}
areaofcircle(22/7 ,7);



// 8 circumference = 2πr.
function circumference(PI,r){
 console.log(2*PI*r)
}
circumference(22/7,7);

// / method 01
 function circumOfCircle(radius){
       return 2* Math.PI * radius;
 }
 console.log(circumOfCircle(3));
 // method 02
 function circumOfCircle(radius){
    const pi=Math.PI;
   return 2* pi * radius;
 }
 console.log(circumOfCircle(2));

// 9 oF = (oC x 9/5) + 32
function oF(oC){
 console.log((oC*9/5)+32);
}
oF(40);


// 10
function bmi (weight,height){
 return (weight*10000) /(height*height);
}
console.log( "your bmi point is "+bmi(50,200));
console.log(bmi(50,200)<18.5 ? "you are underweight": bmi(50,200)>18.5 && bmi(50,200)<24.9? "you are normal weight": bmi(50,200)>25 && bmi(50,200)<29.9? "you are over weight" : "you are obese");


