// Ajax  => API  XMLhTTPRequest  :  Backend
 // ajax call for api :  FakeApi : JsonPlacePlaceHolder 
  // store data in array 
  //  get data from array and show it in html table 

  var  request = new XMLHttpRequest() ;
  var data = [];
   request.open('get' , 'https://localhost:7142/api/Employee');
   request.send();
    request.addEventListener('readystatechange' , function(){
        if(request.readyState==4)
        {
          data = JSON.parse(request.responseText) ;
           showEmployeesData();
           
        }
    })


    function showEmployeesData(){

        var EmployeeData = `` ;
        for(var i =  0 ; i<data.length ;i++) // 8
        {
         EmployeeData+= `
         
                 <tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].salary}</td>
                    <td>${data[i].performanceRate}</td>
                </tr>
         
         `
        }
        document.getElementById('mydata').innerHTML = EmployeeData  ;

    }
