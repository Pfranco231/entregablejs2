const aq1c = document.querySelector('#pagar');
function agregar1() {
    let agregar = document.createElement('h5');
    agregar.classList.add('agregado');
    agregar.innerHTML = '- Milanesa Napolitana $1900';
    aq1c.appendChild(agregar); 
}


function quitar1() {
    let quitar = document.querySelector('.agregado');
    quitar.remove('.agregado');
};

function agregar2() {
    let agregar = document.createElement('h5');
    agregar.classList.add('agregado1');
    agregar.innerHTML = '- Milanesa Vegana $2700';
    aq1c.appendChild(agregar);
};

function quitar2() {
    let quitar = document.querySelector('.agregado1');
    quitar.remove('.agregado1');
};

function agregar3() {
    let agregar = document.createElement('h5');
    agregar.classList.add('agregado2');
    agregar.innerHTML = '- Sandwich de Milanesa $2200';
    aq1c.appendChild(agregar);
};

function quitar3() {
    let quitar = document.querySelector('.agregado2');
    quitar.remove('.agregado2');
};

function agregar4() {
    let agregar = document.createElement('h5');
    agregar.classList.add('agregado3');
    agregar.innerHTML = '- Moustronesa $3700';
    aq1c.appendChild(agregar);
};

function quitar4() {
    let quitar = document.querySelector('.agregado3');
    quitar.remove('.agregado3');
};

function pagar() {
    const eliminar = document.querySelectorAll('.agregado');
    eliminar.forEach(el => {
      el.parentNode.removeChild(el);
    });

    const eliminar1 = document.querySelectorAll('.agregado1');
    eliminar1.forEach(el => {
      el.parentNode.removeChild(el);
    });

    const eliminar2 = document.querySelectorAll('.agregado2');
    eliminar2.forEach(el => {
      el.parentNode.removeChild(el);
    });

    const eliminar3 = document.querySelectorAll('.agregado3');
    eliminar3.forEach(el => {
      el.parentNode.removeChild(el);
    });
}

