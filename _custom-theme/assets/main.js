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
$('[name="datum"]').change(function() {
    var date = $("[name='datum']").val();
    console.log(date, 'validate whether a termin exists!')
});
