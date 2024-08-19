
// //  5 8  max = 8  
// var firstNumber = 5 ; 
// var secondNumber= 8;  
// var max= 0 ;
// if(firstNumber>secondNumber)
//     max= firstNumber ;
//  else
//     max= secondNumber  ; 

//     console.log("the max number is  = " +  max);

//     // program calcutor 



//     // program show data in html
    
// var x = 50 ; 
// var y= 70 ;   
// var max1= 0 ;
// if(x>y)
//     max1= x ;
//  else
//     max1= y  ; 

//     console.log("the max number is  = " +  max1);













































//     var firstNumber = 5 ; 
// var secondNumber= 8;  
// var max= 0 ;
// if(firstNumber>secondNumber)
//     max= firstNumber ;
//  else
//     max= secondNumber  ; 

//     console.log("the max number is  = " +  max);

// Function => reuse code 
  // 1. Function Prototype/Signture  shape   input/paramters  FunctionName output/Return 
  // 2. Function Body {code}
  // 3. Function Call 
 
    //     function getMax(x , y)
    //     {
    //       var max = 0 ; 
    //       if(x>y)
    //          max=x ; 
    //         else 
    //          max=y ; 
    //       console.log("max number is  = " + max)  ;
    //   }
        
    //     getMax(8 , 11) 
    //     getMax(90 , 10)    
    //     getMax(2 , -6) 
    //     getMax(4, 2000) 
    //     getMax(8000 , 50000) 


        //  input : employeeName 
        // output : return / print 

        // Function => reuse code 
  // 1. Function Prototype/Signture  shape   input/paramters  FunctionName output/Return 
  // 2. Function Body {code}
  // 3. Function Call 
    //  function setEmloyeeAttendence(employeeName)
    //  {
    //     console.log(employeeName + " this employee is attend Today ");
    //  }

    //  setEmloyeeAttendence('Salma') ; 
    //  setEmloyeeAttendence('Fatma') ; 
    //  setEmloyeeAttendence('Karim') ; 
    //  setEmloyeeAttendence("mohamed");
   

     // take student grade and return CategoryGrade
     
    //   function getTheStudentResult(gpa)
    //   {
    //     var studentResult = "" 
    //     if(gpa>=85 && gpa<=100) 
    //         studentResult = "Excellent"
    //     else if(gpa>=75 && gpa<85)
    //          studentResult  = "Vey Good"
    //     else if(gpa>=65 && gpa<74)
    //     studentResult  = " Good"
    //     else if(gpa>=50 && gpa<64)
    //         studentResult  = "Bad"
    //     else 
    //        studentResult="Failed" ; 
    //    return studentResult ; 
    //   }

    //  var studentResult =  getTheStudentResult(90)// 
    //    console.log(studentResult);

    //    console.log(getTheStudentResult(20));
    //    console.log(getTheStudentResult(80));
    //    console.log(getTheStudentResult(70));


    // 5 students 
    //  var student1 = "ahmed" ; 
    //  var student2 = "aly" ; 
    //  var student3 = "hassan" ; 
    //  var student4 = "mohamed" ;
                   //       0         1       2          3
    //  var StudetNames  = ["ahmed" , "aly" , "hassan" , "mohamed"] ; 
    //  var EmployeeNames  = ["sameh" , "aya" , "fatma" , "shimaa"] ; 

    //  var MangersNames  = ["sara" , "omar" , "eslam" , "ashraf"] ; 

     
      
    //    function printArrayData(myarr)
    //    {
    //     for(var i = 0 ; i < myarr.length ; i++)
    //         {
    //            console.log(myarr[i]);
    //         }
    //    }

    //    console.log("Students");
    //    printArrayData(StudetNames) ; 
    //    console.log("*****************************");
    //    console.log("Employee");
    //    printArrayData(EmployeeNames) ; 
    //    console.log("*****************************");
    //    console.log("Managers");
    //    printArrayData(MangersNames) ; 

   // JSON 
    var Students = 
     [
        {name : "Ahmed" , age:18 , gpa:85 , isActive:false , isAttend : true},
        {name : "Omar" , age:25 , gpa:60 , isActive:false ,isAttend :false} ,
        {name : "Aly" , age:22 , gpa: 30, isActive:false , isAttend :true} , 
        {name : "Karim" , age:15 , gpa:90, isActive:false,isAttend:false} , 
        {name : "Mohamed" , age:19 , gpa:80 , isActive:false , isAttend:false} , 

     ]

     // function print all array data 
     function PrintStudentsData(){

        for(var i = 0 ; i<Students.length;i++) // 0 => 5
        {
            console.log(`This Data for Student ${i+1} `);
            console.log(Students[i].name);// Ahmed
            console.log(Students[i].age); //18
            console.log(Students[i].gpa);//85
            console.log(Students[i].isActive);// false
            console.log(Students[i].isAttend); // true

        }
     }
     PrintStudentsData();
     // function print all Student Names with Gpa 
     // function  take studentName  => isAttend: true  log attend , not attend 
     debugger;
      function getStudentAttendence(studentName)
      {
        for(var i = 0 ; i < Students.length ; i++)
        {
            if(Students[i].name.toLocaleLowerCase() == studentName.toLocaleLowerCase()) 
            {
                if(Students[i].isAttend ==true)
                    console.log(studentName + " is Attend" );
                else 
                console.log(studentName + " is Not Attend" );
            }
        
        }
        
      }
      getStudentAttendence("Karim")
     // function return number of students where gpa >= 80 
     function getTopStudents(){
        numberOfTopStudents = 0 ; 
        for(var i = 0 ; i < Students.length ; i++)
            {
               if(Students[i].gpa>=80)
                 numberOfTopStudents++;
            
            }
            return numberOfTopStudents ; // 3 5 

          }
        var topStudents= getTopStudents();
         console.log(topStudents);
    
     // function get max gpa 
      function getMaxGpa(){
        var max = 0 ; 
        for(var i = 0 ; i < Students.length ; i++)
        {
             if(Students[i].gpa>max)
                max= Students[i].gpa ;
        }
         console.log("the max grade is =  " + max);
          }
      getMaxGpa();



     // function get min gpa
     function getMinGpa(){
        var min = Students[0].gpa ;
        for(var i = 0 ; i < Students.length ; i++)
        {
        
             if(Students[i].gpa<min)
                min =  Students[i].gpa ;
        }
         console.log("the min grade is =  " + min);
          }
      getMinGpa();
     // function get average gpa 

     function getAverageForStudentsGpa(){
        var sum = 0 ; 
        for(var i = 0 ; i < Students.length ; i++)
        {
          sum+=  Students[i].gpa ; 
        }
        var avg = sum /Students.length ; 
         console.log("the Average grades is =  " + (avg));
          }
          getAverageForStudentsGpa();
