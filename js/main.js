new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: 'projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
      },
      autoplay: {
        delay: 5000,
      },
});

const modalButton = document.querySelector('.hero-button');
const contactButton = document.querySelector('.contact-button');
const modal = document.querySelector('.modal-form');
const modalClose = document.querySelector('.modal-close');
const darkAll = document.querySelector('.modal-dark');
const buttonInModal = document.querySelector('.modal-button');

const openModal = () => {
  modal.classList.add('modal-open');
}
modalClose.addEventListener('click', (e) => {
  modal.classList.remove('modal-open');
})


modalButton.addEventListener('click',openModal,);
contactButton.addEventListener('click',openModal,);

$("#modalForm").validate({
  rules: {
    // simple rule, converted to {required:true}
    formName: {
      required: true,
      minlength: 2,
      maxlength: 10,
    },
    // compound rule
    formPhone: {
      required: true,
      minlength: 12,
    }
  },
  messages: {
    formName: {
      required: "Укажите ваше имя",
      minlength: "Имя должно содержать не менее 2-ух символов",
      maxlength: "Имя должно содержать не более 10-ти символов"
    },
    formPhone: {
      required: "Укажите ваш номер телефона",
      minlength: "Введите корректный номер телефона"
    }
  }
});

$("#footerForm").validate({
  rules: {
    // simple rule, converted to {required:true}
    formName: {
      required: true,
      minlength: 2,
      maxlength: 10,
    },
    // compound rule
    formPhone: {
      required: true,
      minlength: 12,
    }
  },
  messages: {
    formName: {
      required: "Укажите ваше имя",
      minlength: "Имя должно содержать не менее 2-ух символов",
      maxlength: "Имя должно содержать не более 10-ти символов"
    },
    formPhone: {
      required: "Укажите ваш номер телефона",
      minlength: "Введите корректный номер телефона"
    }
  },
  submitHandler: function(form){
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        alert('Форма отправлена')
        $(form)[0].reset();
        buttonInModal.addEventListener('click', (e) => {
          modal.classList.remove('modal-open');
        })
      }
    })
  }
});



$('[type=tel]').mask('+7(000)00-00-000', {placeholder: "+7 (___) __-__-___"});

