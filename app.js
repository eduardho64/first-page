//jquery

$(document).ready(function () {
   var parrafo = $('#resultado p');

   $('.btn-primary').click(function () { 
       parrafo.addClass('display-4');       
   });

   $('.btn-danger').click(function () { 
       parrafo.removeClass('display-4');
   });

   $('.btn-warning').click(function () { 
       parrafo.toggleClass('display-4');
   });
}());

//funtion auto invocada (funtion(){}())