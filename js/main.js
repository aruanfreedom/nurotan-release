$( document ).ready(function() {

    $(".burger").on('click', function(){
        $('.small-menu').toggle();
    });

function resizeText(multiplier) {
    var max = 1.1,
        min = 0.9;

  if (document.body.style.fontSize === "") {
    document.body.style.fontSize = "1.0em";
  }
//   console.log(multiplier);
    if(parseFloat(document.body.style.fontSize) === max || parseFloat(document.body.style.fontSize) === min) {
        document.body.style.fontSize = "1em";
    }

  if (parseFloat(document.body.style.fontSize) < max && parseFloat(document.body.style.fontSize) > min) {
      document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.1) + "em";
  }  
}

$('#increase').on('click', function () {
    resizeText(1);
});

$('#decrease').on('click', function () {
    resizeText(-1);
});

$('.small-menu li').on('click', function () {
    if ( $(this).find('span').is('.arrow-menu') ) {
        $(this).find('.lv-1, .lv-2').toggle();
    } else {
        console.log('ni');
    }
});

});
