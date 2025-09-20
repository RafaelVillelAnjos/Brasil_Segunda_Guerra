// Botão para mostrar fontes
const btnFontes = document.getElementById('btnFontes');
const fontesLista = document.getElementById('fontesLista');
if(btnFontes && fontesLista){
    btnFontes.addEventListener('click', function(){
        if(fontesLista.style.display === 'none'){
            fontesLista.style.display = 'block';
            btnFontes.textContent = 'Ocultar Fontes';
        }else{
            fontesLista.style.display = 'none';
            btnFontes.textContent = 'Mostrar Fontes';
        }
    });
}
function SiteFeb(){
    window.location.href = 'https://www.eb.mil.br/web/campanhas/feb/inicio'
}

// Modal Tópicos
const btnTopicos = document.getElementById('btnTopicos');
const modalTopicos = document.getElementById('modal-topicos');
if(btnTopicos && modalTopicos){
    btnTopicos.addEventListener('click', function(e){
        e.stopPropagation();
        const rect = btnTopicos.getBoundingClientRect();
        modalTopicos.classList.add('active');
        modalTopicos.classList.remove('fadeout');
    });
    
    // Fecha ao clicar fora
    document.addEventListener('click', function(e){
        if(!modalTopicos.contains(e.target) && e.target !== btnTopicos){
            if (modalTopicos.classList.contains('active')) {
                modalTopicos.classList.add('fadeout');
                setTimeout(function(){
                    modalTopicos.classList.remove('active', 'fadeout');
                }, 400);
            }
        }
    });
}

// Scroll para tópicos
function scrollToSection(sectionClass){
    const el = document.querySelector(sectionClass);
    if(el){
        el.scrollIntoView({behavior:'smooth'});
        modalTopicos.classList.remove('active');
    }
}
const btnIntro = document.getElementById('btnIntro');
const btnBatalhas = document.getElementById('btnBatalhas');
const btnSlogan = document.getElementById('btnSlogan');
if(btnIntro){
    btnIntro.addEventListener('click', function(){
        scrollToSection('.guerra-conteudo');
    });
}
if(btnBatalhas){
    btnBatalhas.addEventListener('click', function(){
        scrollToSection('.principais-batalhas');
    });
}
if(btnSlogan){
    btnSlogan.addEventListener('click', function(){
        scrollToSection('.slogan');
    });
}

// Modal Monte Castello
const btnMonteCastello = document.getElementById('btnMonteCastello');
const modalMonteCastello = document.getElementById('modal-montecastello');
if(btnMonteCastello && modalMonteCastello){
    btnMonteCastello.addEventListener('click', function(){
        modalMonteCastello.classList.add('active');
        modalMonteCastello.classList.remove('fadeout');
    });
    modalMonteCastello.addEventListener('click', function(e){
        if(e.target === modalMonteCastello){
            if (modalMonteCastello.classList.contains('active')) {
                modalMonteCastello.classList.add('fadeout');
                setTimeout(function(){
                    modalMonteCastello.classList.remove('active', 'fadeout');
                }, 400);
            }
        }
    });
}

// Modal Montese
const btnMontese = document.getElementById('btnMontese');
const modalMontese = document.getElementById('modal-montese');
if(btnMontese && modalMontese){
    btnMontese.addEventListener('click', function(){
        modalMontese.classList.add('active');
        modalMontese.classList.remove('fadeout');
    });
    modalMontese.addEventListener('click', function(e){
        if(e.target === modalMontese){
            if (modalMontese.classList.contains('active')) {
                modalMontese.classList.add('fadeout');
                setTimeout(function(){
                    modalMontese.classList.remove('active', 'fadeout');
                }, 400);
            }
        }
    });
}

// Modal Tomadas
const btnTomadas = document.getElementById('btnTomadas');
const modalTomadas = document.getElementById('modal-tomadas');
if(btnTomadas && modalTomadas){
    btnTomadas.addEventListener('click', function(){
        modalTomadas.classList.add('active');
        modalTomadas.classList.remove('fadeout');
    });
    modalTomadas.addEventListener('click', function(e){
        if(e.target === modalTomadas){
            if (modalTomadas.classList.contains('active')) {
                modalTomadas.classList.add('fadeout');
                setTimeout(function(){
                    modalTomadas.classList.remove('active', 'fadeout');
                }, 400);
            }
        }
    });
}