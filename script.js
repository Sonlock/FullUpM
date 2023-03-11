

$(document).on('click', 'input:checkbox', getCheckedBox);

getCheckedBox();

function getCheckedBox() {
  
  var checkedBox = $.map($('input:checkbox:checked'), 
                         function(val, i) {
                            return val.value;
                         });
  console.clear();
  console.log(checkedBox);
}



function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'https://api.whatsapp.com/';
const telefono = '';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let codigo = document.querySelector('#codigo').value
        let vehiculo = document.querySelector('#vehiculo').value
       // let todos = document.querySelector('#todos').value
        let conos = document.querySelector('#conos').value
        let novedades = document.querySelector('#novedades').value
        let lugar = document.querySelector('#lugar').value
        let hora = document.querySelector('#hora').value
        let boucher = document.querySelector('#boucher').value
        let estanque = document.querySelector('#estanque').value
        let observaciones = document.querySelector('#observaciones').value

        let mensaje = 'send?=' + telefono 
        + '&text= ' + " _*" + codigo + "*_" + "%0a"
        + '*Movil :*' + " _" +vehiculo + "_" +"%0a"
        + '*Conos :*' + " _" +conos + "_" +"%0a"
        + '*Novedades :*' + " _" + novedades + "_" + "%0a"
        + '*Lugar :*' + " _" + lugar + "_" + "%0a"
        + '*Hora :*' + " _" + hora + "_" + "%0a"
        + '*Boucher :*' + " _" + boucher + "_" + "%0a"
        + '*Estanque :*' + " _" + estanque + "_" + "%0a"
        + '*Observaciones :*' + " _" + observaciones + "_" + ''

        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 1000);
});

$(function() {

    $("#todos").on("change", function () {
        $("#verificar tbody input[type='checkbox']").prop("checked", this.checked);
    });
    
    $("#verificar tbody").on("change", "input[type='checkbox']", function () {
      if ($("#verificar tbody input[type='checkbox']").length == $("#verificar tbody input[type='checkbox']:checked").length) {
          $("#todos").prop("checked", true);
      } else {
          $("#todos").prop("checked", false);
      }
     });
     
  });
  
  //$( document ).ready(function() {

    //Capturas el cambio de algun input radio
   // $("input[type='checkbox']").change(function(){
    
      //Ocultas todo    
    //  $("#delta").show();

    
      //obtenes el valor de los dos sets de Radios
      //var alfa = $("input[name='alfa']:checked").val();
      //var opc2 = $("input[name='opc2']:checked").val(); para colocar otro valor
      
      //tomas la decisión que queres en base a los dos valores
      //en este caso si selecciona "nombre" y "ciudad" mostras el input text para el Nombre
     // if(alfa == 1) // && opc == 1)
      //  $("#delta").hide()
        
    //});
 // });


$( document ).ready(function() {

    //Capturas el cambio de algun input radio
    $("input[type='radio']").change(function(){
    
      //Ocultas todo    
      $("#list").show();

    
      //obtenes el valor de los dos sets de Radios
      var opc = $("input[name='opc']:checked").val();
      //var opc2 = $("input[name='opc2']:checked").val(); para colocar otro valor
      
      //tomas la decisión que queres en base a los dos valores
      //en este caso si selecciona "nombre" y "ciudad" mostras el input text para el Nombre
      if(opc == 1) // && opc == 1)
        $("#list").hide()
        
    });
  });

$( document ).ready(function() {

    //Capturas el cambio de algun input radio
    $("input[type='radio']").change(function(){
    
      //Ocultas todo 
      $("#carga").hide();
    
      //obtenes el valor de los dos sets de Radios
      var opc1 = $("input[name='opc1']:checked").val();
      
      //tomas la decisión que queres en base a los dos valores
      //en este caso si selecciona "nombre" y "ciudad" mostras el input text para el Nombre
      if(opc1 == 1)
        $("#carga").show()
        
    });
  });

