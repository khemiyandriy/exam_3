$(function(){
    $('.gallery__item').mouseover(function(){
        $(this).css('opacity', '.1').animate({'opacity': '1'}, 'slow');
    });
  });

  $(document).ready(function(){
    $('.responses__slider').slick({
        dots: true,
        slidesToShow: 3,
        speed:1000,
        autoplay:true,
        autoplaySpeed:3000,
        responsive:[
            {breakpoint: 500,
            settings: {
                    slidesToShow: 1,
                }},
              {breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  arrows: false,
              }}
            ,{
               breakpoint: 1200,
              settings: {
                  arrows: false,
              }    
              }
      ]
    });
});

(function() {emailjs.init("sk70DJLqFPEvrmhGH");})();

window.onload = function() {
    document.querySelector('#contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_yvsykrn', 'template_nf1zz8y', this)
            .then(function() {
                console.log('SUCCESS!');
                swal({
                    title: "Дякую!",
                    text: "Ваше запитання було надіслане! Очікуйте відповіді",
                    icon: "success",
                    button: "ОК!",
                  });
                document.querySelector('#contact-form').reset();
            }, function(error) {
                swal({
                    title: "Упс...!",
                    text: "Сталася помилка! Спробуйте інший спосіб зв'язку.",
                    icon: "error",
                    button: "ОК!",
                  });
                console.log('FAILED...', error);
            });
    });
}

function slowScroll(id){
    let offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1000);
    return false;
}

function showMore(clas){
    document.querySelector(`${clas}`).classList.toggle('active');
    document.querySelector(`.gallery__button`).innerHTML =
    (document.querySelector(`.gallery__button`).innerHTML === 'Більше фото') ? document.querySelector(`.gallery__button`).innerHTML = 'Менше фото' : document.querySelector(`.gallery__button`).innerHTML = 'Більше фото';
}

window.addEventListener('scroll', visible)

function visible() {
    let top = scrollY;
    if(top > ($('.services__gallery').offset().top-$('.services__gallery').height()/2) )
    {
       document.querySelector('.services__gallery').classList.add("visible");
    }
}