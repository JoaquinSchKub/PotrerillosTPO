//Navbar

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

//Fondo Scroll Navbar

window.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('header');
  var logos = document.querySelectorAll('.logo i, .logo');

  function checkScrollPosition() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      menu.classList.add('background');
      logos.forEach(function(logo) {
        logo.style.color = 'darkblue';
      });
    } else {
      menu.classList.remove('background');
      logos.forEach(function(logo) {
        logo.style.color = 'white'; 
      });
    }
  }

  setTimeout(checkScrollPosition, 100);

  window.addEventListener('scroll', checkScrollPosition);
});


//Formulario

const formulario = document.querySelector("#formulario");
//crear evento
formulario.addEventListener("submit", validarFormulario);
//funciones

function validarFormulario(e) {
    e.preventDefault();
    const NOMBRE = document.querySelector("#name").value;
    var solotexto="^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";
    if(  NOMBRE.match(solotexto) == null ) { return alert("El nombre debe ser tipo texto");}
   
    const EMAIL = document.querySelector("#e-mail").value;
    var ValidaEmail= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
 
    if( EMAIL.match(ValidaEmail == null)){ return alert ("El correo electronico debe tener el formato aaaa@email.com");}
    const TELEFONO = document.querySelector("#telefono").value;
    if( !(/^\d{10}$/.test(TELEFONO)) ) { return alert ("El telefono debe ser numerico y de 10 números de largo") ;}
    const ASUNTO = document.querySelector("#asunto").value;
    if(  ASUNTO.match(solotexto) == null ) { return alert("El asunto debe ser tipo texto");}
    const MENSAJE = document.querySelector("#msj").value;
    if(  MENSAJE.match(solotexto) == null ) { return alert("El mensaje debe ser tipo texto");}

    var templateParams = {
        name : NOMBRE,
        email : EMAIL,
        telefono : TELEFONO,
        asunto : ASUNTO,
        msj : MENSAJE
    };
   
     enviarMail(templateParams);
}



function enviarMail(templateParams) {
    const PUBLIC_KEY = 'vzXI7eKkzUIcK3Qfd';
    const contact_service = 'service_t5bk7vh';
    const contact_form = 'template_um8gjrn';
    emailjs.init(PUBLIC_KEY);
    emailjs.send(contact_service, contact_form, templateParams)
                 .then(function () {
                     console.log('ENVIADO...');
                     return alert ("El correo electronico fue enviado");
                 }
                     , function (error) {
                         console.log('FALLA...');
                     });
}

// Menu Hamburguesa
const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
  nav.classList.add('visible');
})

cerrar.addEventListener('click', () => {
  nav.classList.remove('visible');
})
    