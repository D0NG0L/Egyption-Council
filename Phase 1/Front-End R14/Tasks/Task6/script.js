// 
// صباح الخير ... التاسك الخاصة بمحاضرة أمس

// سؤال المستخدم عن عمره (رقم) بإستخدام ال prompt
// عمل فحص للسن والطباعة في ال console حسب السن كالتالي

// اصغر من 18
// Your age is less than 18

// 18 - 25
// Your age is between 18 and 25

// 26 - 40
// 

// 41 - 50
// Your age is between 41 and 50

// أكبر من 50
// Your age is greater than 50
// استقبال العمر من المستخدم
var age =   Number(prompt("What is your age?👧🏻"));
var input = console.log(age)
 if (age < 18 ){
 console.log("Your age is less than 18☑" );
}else if (age >=18 && age <=25 ){
console.log("Your age is between 18 and 25☑");
}else if (age >=26  && age <=40){
    console.log("Your age is between 26 and 40");
}else if ( age >=41 && age <=50 ){
    console.log("Your age is between 41 and 50");
} else {
         console.log("Your age is greater than 50");
     }
    






