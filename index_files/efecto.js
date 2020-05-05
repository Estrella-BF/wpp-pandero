function validarCanalTransparencia() {
    activar = true;
    if ($('#nombres_apellidos').val()=='') {
        activar = false;
    } else if ($('input[name="anonimo"]:checked').length == 0 && $('#nombres_apellidos_reportante').val()=='') {
        activar = false;
    } else if ($('input[name="anonimo"]:checked').length == 0 && $('#telefono').val()=='') {
        activar = false;
    } else if ($('input[name="anonimo"]:checked').length == 0 && $('#dni_cedula').val()=='') {
        activar = false;
    } else if ($('input[name="anonimo"]:checked').length == 0 && $('#email').val()=='') {
        activar = false;
    } else if ($('input[name="reporte_guiado[]"]:checked').length == 0) {
        activar = false;
    } else if ($('input[name="politica_privacidad"]:checked').length == 0) {
        activar = false;
    } else if ($('#file-foto').val()=='') {
        activar = false;
    }
    $('.visible .required').each(function() {
        if ($(this).val()=='') {
            activar = false;
        }
    })
    if (activar) {
        $('#button-canal').removeAttr('disabled');
    } else {
        $('#button-canal').attr('disabled', true);
    }
}
$(document).ready(function(){

    var efecto = {
    distance: '120%',
    delay: 150,
    duration: 400,
    origin: 'bottom',
    opacity: 0,
    scale: 0.68,
    mobile: true
    };

    ScrollReveal().reveal('.fadebottom', efecto);

    var efecto = {
    distance: '140%',
    delay: 200,
    duration: 400,
    origin: 'bottom',
    opacity: 0,
    scale: 0.68,
    mobile: true
    };

    ScrollReveal().reveal('.fadebottom2', efecto);

    var efecto_left = {
    distance: '120%',
    delay: 200,
    duration: 800,
    origin: 'left',
    opacity: 0,
    scale: 0.68,
    mobile: true
    };

    ScrollReveal().reveal('.fadebottom_left', efecto_left);

    var efecto_right = {
    distance: '120%',
    delay: 200,
    duration: 800,
    origin: 'right',
    opacity: 0,
    scale: 0.68,
    mobile: true
    };

    ScrollReveal().reveal('.fadebottom_right', efecto_right);

    var box_1 = {
    distance: '100%',
    delay: 220,
    duration: 400,
    origin: 'bottom',
    scale: 0.68,
    opacity: 0,
    mobile: true
    };

    ScrollReveal().reveal('.efecto-box-1', box_1);

    var box_2 = {
    distance: '120%',
    delay: 300,
    duration: 400,
    origin: 'bottom',
    scale: 0.68,
    opacity: 0,
    mobile: true
    };

    ScrollReveal().reveal('.efecto-box-2', box_2);

    var box_3 = {
    distance: '190%',
    delay: 400,
    duration: 400,
    origin: 'bottom',
    scale: 0.68,
    opacity: 0,
    mobile: true
    };

    ScrollReveal().reveal('.efecto-box-3', box_3);

    var box_4 = {
    distance: '220%',
    delay: 500,
    duration: 400,
    origin: 'bottom',
    scale: 0.68,
    opacity: 0,
    mobile: true
    };

    ScrollReveal().reveal('.efecto-box-4', box_4);

    $('input[name="reporte_guiado[]"]').change(function() {

        $('.canal-campos').hide();
        $('.canal-campos').removeClass('visible');
        var elegido = $(this).attr('data-id')
        $('input[name="reporte_guiado[]"]:checked').each(function(e) {
            let id = $(this).attr('data-id');
            $('#'+id).show();
            $('#'+id).addClass('visible');
            validarCanalTransparencia();
        })
        if($(this).is(':checked')) {
            $('html, body').animate({
                'scrollTop': ($('#'+elegido).offset().top - 95)
            }, 2000);
        }
    })
    $('#recuerdame').change(function() {
        if ($('#recuerdame:checked').length > 0) {
            $('.no-anonimo').hide();
        } else {
            $('.no-anonimo').show();
        }
    })
    $('#file-foto').on('change', function() {
    var numb = $(this)[0].files[0].size/1024/1024;
        numb = numb.toFixed(2);
        if(numb > 8){
            alert('El archivo no puede pesar más de 8mb');
            $('#file-foto').val('');
            $('#input-file span').text('');
        }
    })

});

$(document).ready(function(){
  $('.slider-home').on('init', function(event, slick){
    $('.animated').addClass('activate fadeInUp');
  });

  $('.slider-home').on('afterChange', function(event, slick, currentSlide) {
    $('.animated').removeClass('off');
    $('.animated').addClass('activate fadeInUp');
  });

  $('.slider-home').on('beforeChange', function(event, slick, currentSlide) {
    $('.animated').removeClass('activate fadeInUp');
    $('.animated').addClass('off');
  });
  $('.page-template-pandero-casa .container-menu-page-mobile #menu-menu-casa-1 a').click(function() {
      $('.overlay-menu').toggleClass('d-block');
      $('#sidebar-wrapper').toggleClass('toggled');
  })
  $('body').on('click', '#mas-vendedores', function(e) {
      e.preventDefault();
      let siguiente = Number($(this).attr('data-siguiente'));
      $('.vendedor-grupo-'+siguiente).show();
      siguiente = siguiente + 1;
      $(this).attr('data-siguiente', siguiente);
  })
});
