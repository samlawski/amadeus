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



// Cookie Banner
var cookieBanner = (function(){
  var init = function(){
    showCookieBanner();
  };

  function readCookie(n) {
    let a = `; ${document.cookie}`.match(`;\\s*${n}=([^;]+)`);
    return a ? a[1] : '';
  }

  function showCookieBanner(){
    if(!readCookie('cookieBannerDismissed')){
      var banner_wrapper = document.createElement('div');
      banner_wrapper.setAttribute("id", "cookieBanner");
      banner_wrapper.style.cssText = `
        font-size: 0.7rem;
        background-color: #ddd;
        color: #444;
        max-width: 240px;
        padding: 16px;
        position: fixed;
        bottom: 0;
        left: 0;`;

      var banner_text = document.createElement('p');
      banner_text.innerHTML = `
        Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies und Analysetools. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu. Weitere Informationen zur Nutzung von Cookies und Analysetools erhalten Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a>.
        `;
      banner_wrapper.appendChild(banner_text);

      var banner_link = document.createElement('a');
      banner_link.innerHTML = `Verstanden`;
      banner_link.style.cssText = `
        margin-top: 8px;
        padding: 4px;
        border: 1px solid #444;
        display: inline-block;
        cursor: pointer;`;
      banner_link.addEventListener('click', function(){
        document.cookie = "cookieBannerDismissed=true";
        banner_wrapper.style.display = "none";
      })
      banner_wrapper.appendChild(banner_link);

      document.body.appendChild(banner_wrapper);
    }
  }


  return {
    init: init
  }
})()
// TODO: Activate if Google Analytics will be set up
// cookieBanner.init()
