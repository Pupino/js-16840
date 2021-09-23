/*!
 * Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {
  // Navbar shrink function
  var navbarShrink = function() {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function(responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});

//funcion para capitalizar palabras
function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function consultorioCreado() {
  /*   let customMge =
    'A continuación tenés el detalle de los datos ingresados y cálculos:';

  let h1Elem = document.createElement('h1');
  h1Elem.innerText = customMge;
  document.getElementById('creacionConsul').appendChild(h1Elem); */

  //consultorioCreado
  let consulNombre = document.getElementById('consultorio').value;
  let consul = document.createElement('div');
  consul.innerHTML = 'Consultorio: ' + capitalize(consulNombre);
  consul.classList.add('text-muted');
  consul.classList.add('text-center');
  document.getElementById('creacionConsul').appendChild(consul);

  //Costo por Hora
  let costoPorHora = document.getElementById('costoHoraConsul').value;
  let facturacion = document.createElement('div');
  facturacion.innerText = 'Costo por Hora: $' + costoPorHora;
  facturacion.classList.add('text-muted');
  facturacion.classList.add('text-center');
  document.getElementById('creacionConsul').appendChild(facturacion);

  //Valor Consulta
  let valorConsulta = document.getElementById('brutoHoraConsul').value;
  let revenue = document.createElement('div');
  revenue.innerText = 'Valor de la Consulta: $' + valorConsulta;
  revenue.classList.add('text-muted');
  revenue.classList.add('text-center');
  document.getElementById('creacionConsul').appendChild(revenue);

  //blanquear los input del formulario
  document.getElementById('contactForm').reset();

  //costo
  //   let cost = document.createElement('div');
  //   cost.innerText = 'Costo: $' + costo;
  //   document.body.appendChild(cost);
  //}
}

if (document.getElementById('submitButton')) {
  document
    .getElementById('submitButton')
    .addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Dibujar la grilla con el consultorio creado');
      consultorioCreado();
    });
}

//Adding jQuery efect
if ($('#masInfo')) {
  $('#masInfo').hover(
    function() {
      $(this).css({ backgroundColor: '#d9aa00', color: '#212529' });
    },
    function() {
      $(this).css({ backgroundColor: '#ffc800', color: '#fafafa' });
    }
  );
}
