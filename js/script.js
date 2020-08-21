// some scripts

// jquery ready start
$(document).ready(function () {
  // jQuery code




  /* ///////////////////////////////////////

  THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
  For sliders, interactions and other

  */ ///////////////////////////////////////


  //////////////////////// Prevent closing from click inside dropdown
  $(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
  });




  //////////////////////// Bootstrap tooltip
  if ($('[data-toggle="tooltip"]').length > 0) {  // check if element exists
    $('[data-toggle="tooltip"]').tooltip();
  } // end if


  // $(".slider-items-owl").owlCarousel({
  //   items: 5,
  // });
  $('.slider-items-owl').owlCarousel({
    loop: true, //Зацикливаем слайдер
    responsive: { //Адаптация в зависимости от разрешения экрана
      0: {
        items: 1
      },
      440: {
        items: 2
      },
      768: {
        items: 3
      },
      1140: {
        items: 5
      }
    }
  });

});
// jquery end