// هنعمل JS code يستقبل رقمين من المستخدم عن طريق ال prompt box (ندور عليها سهلة جداً)
// بعدين هيتم ضرب القيمتين ببعض وظهور داخل الصفحة مثلا
// 2 x 4 = 8
// يعني هيكتب الرقم الأول اللي أنا دخلته وبعدها علامة x وبعدها الرقم الثاني اللي أنا دخلته وبعدها علامة = وبعدها حاصل الضرب
// input => processing => output

;

// استقبال الرقمين من المستخدم
var num1 = prompt("Plz Enter Frist Number");
var num2 = prompt("Plz Enter Second Number");

// ضرب الرقمين
var result = num1 * num2;


// عرض النتيجة    
console.log(num1 + " x " + num2 + " = " + result);
// console.log(result);

//  Uncaught SyntaxError: Unexpected identifier   هسال فيها البشمهندس 👇
// لما عملت رن معرضتش النتيجة زي result
// document.getElementById("calc").innerHTML=(num1 + " x " + num2 + " = " + result);   
// 👇   عرضت الداتا تمام

document.getElementById("result").innerHTML=(result);
//   Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
//  Uncaught SyntaxError: Unexpected identifier   هسال فيها البشمهندس 




