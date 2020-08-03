//jquery

$(document).ready(function () {
   var img = $('img');

   $('.btn-primary').click(function () { 
       img.show();       
   });

   $('.btn-danger').click(function () { 
       img.hide();
   });

   $('.btn-warning').click(function () { 
       img.toggle();
   });
}());

//funtion auto invocada (funtion(){...}())