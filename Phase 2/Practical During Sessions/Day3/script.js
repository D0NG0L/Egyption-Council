// function Scopes
//  Variable => Container of data 
// Scope : LifeTime
// 1 2 3 4 5 6 7 8 9

// for (var i = 0 ; i<=10 ; i++)
// {
//     console.log(i);
// }
// console.log("After Looping")
// console.log(i);  //Error

// var x = 50;  // Global
// console.log(x);
// if (true)
// {
//     var test = 100;
  
// }  console.log(test)

// function ScopeTesting()
// {
//  var data =' rahma';
//  console.log(data);
// }          // local
// console.log (data);
//  Self Invoked Function  
//  (function() // anomonus Function
//  {
//     console.log('hello world')
//  })();



//  Reccursions
//5! = 5*4*3*2*1
// n! = n* (n-1) !


// function getFuctorial(n)
// {
//     if (n==1) return 1 ;
//     return n * Factorial(n-1) // Recursion
// }



console.log('testttttttttttt');
// ajax xmlHttpRequest 
var request = new XMLHttpRequest(); // Fontenf : get data , add data , updata data , delete data
 // ببعت داتا للباك اند 
request.open('get','')
request.send();       // call the backend
// 1  بيفتح  كونكشن مع الباك اند
// 2 send request
// 3 collect data
// 4 resived data  هيبعتلي الريسبونس
console.log('data');
console.log(request.responseText);