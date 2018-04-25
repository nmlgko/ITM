$(document).ready(function() {

  $('#btn-arrow-down').click(function () {
    var blockHeight = $('#screen2').offset().top;
    $('body,html').animate({
      scrollTop: blockHeight
    }, 1000);
  });

  counter();
    
});


function counter(){ 

  var first_num = +$("#first_num").html();
  var second_num = +$("#second_num").html();
  
    if (second_num <= 0){ //если вторая цифра счетчика меньше или равна 0

      second_num = 10;
      first_num = first_num - 1;  

      if (first_num >= 0){
        $("#first_num").animate({top: "50px", opacity: 0.0}, 400)
        .animate({top: "-50px"}, 400, function(){
          $(this).html(+first_num);
        })
        .animate({top: "0px", opacity: 1}, 200)
        .animate({top: "0px"} , 400);
      }
    } 

    if (first_num <= -1){ //если первая цифра счетчика меньше или равна -1
      second_num = 0;
      first_num = first_num + 1;
    }

    else{

      second_num = second_num - 1;

      $("#second_num")
      .animate({top: "50px", opacity: 0.0}, 400)
      .animate({top: "-50px"}, 400, function(){
        $(this).html(+second_num);
      })
      .animate({top: "0px", opacity: 1}, 200)
      .animate({top: "0px"} , 400);   

      setTimeout(function() {
        counter();
      }, 10000);
    }
    
}