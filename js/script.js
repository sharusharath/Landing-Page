
/*---------------------------slider------------------*/
var $ = document;

$.addEventListener('DOMContentLoaded', function() {

  const sliderMe = () => {
    let currentPosition = 0,
      sliderItem = document.querySelectorAll('.slider-item'),
      sliderItemWidth = window
      .getComputedStyle(sliderItem[0])
      .flexBasis.match(/\d+\.?\d+/g),
      sliderInner = $.querySelector('.slider-inner'),

      control = {
        next: $.querySelector('#next'),
        slideNext() {
          currentPosition += parseFloat(sliderItemWidth);
          if (currentPosition > limitPosition) {
            currentPosition = 0;
          }
          sliderInner.style.right = currentPosition + '%';
        },
        prev: $.querySelector('#prev'),
        slidePrev() {
          currentPosition -= parseFloat(sliderItemWidth);
          if (currentPosition < 0) {
            currentPosition = limitPosition;
          }
          sliderInner.style.right = currentPosition + '%';
        }
      },
      limitPosition = sliderItemWidth * (sliderItem.length - Math.floor(100 / sliderItemWidth));

    control.next.addEventListener('click', control.slideNext)
    control.prev.addEventListener('click', control.slidePrev)

    window.addEventListener("resize",function(){
      currentPosition = 0;
      $.querySelector('.slider-inner').style.right = currentPosition + '%';
    })
  }
  sliderMe();

  window.addEventListener("resize", sliderMe)

});


/*---------------------------back to top-----------------------*/
$(document).ready(function(){
     $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
      
      $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
      
      $('#back-to-top').tooltip('show');
  });


/*----------------------------------------------*/
