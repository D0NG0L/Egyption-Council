
var PrintData 

// 1. function prototype /Signtrue  function functionName (Paramters)
//  function Sum(x,y)
//  {
//     // Code body 
//     var result = x+y ; 
//     console.log(result);

//  }

//  // function call 
//   Sum(10 , 1000) ; 
//   Sum(20 , 33) ; 
//   Sum(70 , 90)

//  var sum = 0 ; 
//   for(i=1 ; i<=10 ;i++) // 4
//   {
//      sum += i; // 10
//   }



// function  htmlElelement: h1 h2 ul a img , numberOfEleement , elementID 
 //  3 divId , Element , NumberOFElement 

//   function setDataInHtml(divId , element , numberOfElement)
//   {
//     var data = `` ; 
//     for(var i=0 ; i<numberOfElement ;i++)// 10
//     {
//         data += element ;
//     }
//     console.log(data);
//     document.getElementById(divId).innerHTML = data; // h2
//   }

// //   var data = "web develpment" ; 
// //   document.getElementById("green").innerHTML = data;

// //   document.getElementById("yellow").innerHTML = data;

// //   setDataInHtml("blue")

//  setDataInHtml("red" ,"<h2>Welcome js Data</h2>",50)
//  setDataInHtml("yellow" ,"<h1>Welcome js Data</h1>",6)
//  setDataInHtml("green" ,"<p>data is available</p>",200)
//  setDataInHtml("tomato" ,"<button>Confirm</button>",15)





 // div  30 H1   blue 

 // div  50 p   gray 

 // div   5  links  tomato 

 // div   7  images  yellow 


  // function 2 numbers 5 - 30 get all prime numbers  5 7 11 13 17 19 23 
    // 5  5 4 3 2 1    => 5 1  2  Prime  5/5 1 % 1  5/3 5/1 5  0
    // 6 6 5 4 3 2 1 =>  4  No Prime
    // 7 7 6 5 4 3 2 1 => 7 1  Prime
   
          //  12 / 2 = 6  % 0     10/2 = 5  10%2 = 0   14/2 = 7  0 % 
           // 15/2 = 7  15%2 = 1

    //  function getAllPrimeNumbersbetween2Numbers(n1 , n2) 
    //  {
    //     // 5 ----- 30
    //     for(var i = n1 ; i<=n2 ;i++) // 5 -- 30 = 5 : % 5 4 3 2 1  count 
    //     {
    //     var counter= 0 ;
    //       for(var j = i ; j>=1 ; j--)// 5 % 5 --- 1
    //       {
    //        if(i%j==0) //5 %  5 4 3 2 1  
    //         counter++;// 
    //       }
    //       if(counter==2)
    //         console.log(i + " is Prime");
    //     }
    //  }

    //  getAllPrimeNumbersbetween2Numbers(5 , 30) ; // 5 6 7 8 9 10 11 ..... 30
    // function take array of skills => 
//          // html page  Employee Skills  ul

//     var employeeSkills = ["presentation" , "coding " , "Negotiation" , "Analysis"]
 
//    function setEmployeeSkillsInHtml(){
//       var allSkills = `` ;
//      for(var i = 0 ; i<employeeSkills.length;i++)
//      {
//       allSkills+= `<li>${employeeSkills[i]}</li>`
//      }
//     document.getElementById("skills").innerHTML = allSkills;
//    }


//    setEmployeeSkillsInHtml();



  // Hoisting 
//  console.log(x);// error not defined  undefined 10
//  console.log(c);
//   var x = 10 ; 
//     var a =100 ;
//     var c = 20 ;



// PrintMessage();
// // Declration Function  : Hoisiting
//  function PrintMessage(){
//     console.log("JS Hoisting");
//  }


 // Expression Function 

//  var a =10;
//    a =50 ; 
//    console.log(a);
// function start()
// {
//     function end(){
//         return 5;
//     }
//     function end(){
//         return 7 ;
//      }
//      function end(){
//         return 20 ; 
//      }

//     return end();


// }
// console.log(start()); // 5 

// Task2  search about hoisting 
// Task 1
 // search about Hoisting 
 // make a factorial Function Apply it with recursion 
 // 5! = 5 * 4 * 3 * 2 * 1   6! = 6 * 5 *4 *3 * 2 * 1 
 // a sample caluctor using functions  
  //  Sum Multiply Divi Subtraction Prime Factorial Absolute 
   //  Max between 2 Numbers 
   //  Min between 2 Numbers 
   // take 3 Numbers => Max , Min 
   // 2 numbers x = 3 , y = 4 => x=4 , y =3 
   // take array of Numbers make a sort  [5 , 6 , 2 ,1] = 1 2 5 6
   // take array and get the factorial for each item in array 
   // take array and get the max and min element in array 
   // function show Menue 1. div 2 sum 
//    function showMenu(){
//       console.log("\t\t\t\t\t Welcome to Calulator App");
//       console.log("Choose number from menue");
//       console.log("1- ADD");
//       console.log("2- Subtract");
//    }

//     showMenu();

 function Calculator() 
 {
    // function  show menue
    // function call 2 numbers from users
    // while 
    // 1 call function add 
    read2Number();
 }
 function read2Number()
 {

 }

