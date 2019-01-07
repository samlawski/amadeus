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
var bookedDates = Array.from(
  $('.termine__list').find('strong').map(function(i,element){
    return $(element).data('date')
  })
)
// TODO: Change this in the english version:
var picker = new Pikaday({
  field: $('[name="datum"]')[0],
  format: 'DD.MM.YYYY',
  disableDayFn: function(date){
    return bookedDates.indexOf(moment(date).format('YYYY-MM-DD')) >= 0
  },
  i18n: {
    previousMonth : 'Vorheriger Monat',
    nextMonth     : 'Nächster Monat',
    months        : ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
    weekdays      : ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    weekdaysShort : ['So','Mo','Di','Mi','Do','Fr','Sa']
  },
  firstDay: 1
});
