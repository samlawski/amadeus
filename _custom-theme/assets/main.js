// Smooth Scroll Anchor Links
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault()
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500)
  // Always close mobile menu:
  $('nav .menu').removeClass('open')
})

// Toggle Links
$('a[data-target]').click(function(){
  $($(this).data('target')).toggleClass('open')
})

// Nagivation
$('.hamburger').click(function(){
  $(this).parent('.menu').toggleClass('open')
})

// Form
// Validate Termin
$('[name="datum"]').change(function() {
    var selectedDate = $("[name='datum']").val();
    var bookedDates = Array.from(
      $('.termine__list').find('strong').map(function(i,element){
        return $(element).data('date')
      })
    )

    $('.termin__warning').toggleClass('active', (bookedDates.indexOf(selectedDate) >= 0))
});
