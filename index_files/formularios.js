
$('#empezar-plan').click(function (e) {
    e.preventDefault();
    $('#formulario-plan .paso-1').hide();
    $('#formulario-plan .paso-2').show();
    $('#formulario-plan .bloque-titulo-right').show();
});

$('#retroceder-plan-1').click(function (e) {
    e.preventDefault();
    $('#formulario-plan .paso-2').hide();
    $('#formulario-plan .paso-1').show();
    $('#formulario-plan .bloque-titulo-right').hide();
});

$('#avanzar-plan-3').click(function (e) {
    e.preventDefault();
    $('#formulario-plan .paso-2').hide();
    $('#formulario-plan .paso-3').show();
});

$('#retroceder-plan-2').click(function (e) {
    e.preventDefault();
    $('#formulario-plan .paso-3').hide();
    $('#formulario-plan .paso-2').show();
});

$('#avanzar-plan-4').click(function (e) {
    e.preventDefault();
    $('#formulario-plan .paso-3').hide();
    $('#formulario-plan .paso-4').show();
    $('#formulario-plan .bloque-monto').show();

});

// desktop
$('#retroceder-plan-3').click(function (e) {
    e.preventDefault();
    $('#formulario-plan .paso-4').hide();
    $('#formulario-plan .bloque-monto').hide();
    $('#formulario-plan .paso-3').show();
});

$('#avanzar-plan-5').click(function (e) {
    e.preventDefault();
    $('#formulario-plan .paso-4').hide();
    $('#formulario-plan .bloque-monto').hide();
    $('#formulario-plan .paso-gracias').show();
    $('#formulario-plan .bloque-imgen-inicial').hide();
    $('#formulario-plan .bloque-imgen-final').show();
});
// desktop


// mobile
$('#retroceder-plan-3-b').click(function (e) {
    e.preventDefault();
    $('#formulario-plan .paso-4').hide();
    $('#formulario-plan .bloque-monto').hide();
    $('#formulario-plan .paso-3').show();
});

$('#avanzar-plan-5-b').click(function (e) {
    e.preventDefault();
    $('#formulario-plan .paso-4').hide();
    $('#formulario-plan .bloque-monto').hide();
    $('#formulario-plan .paso-gracias').show();
    $('#formulario-plan .bloque-imgen-inicial').hide();
    $('#formulario-plan .bloque-imgen-final').show();
});
