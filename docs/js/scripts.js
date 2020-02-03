$(window).on('load', start);
$('.fa-bars').on('click', openMenu);
$('#playVideo').on('click', initializePlayer);
$('#playVid').on('click', playVid);
$('#pauseVid').on('click', pauseVid);
$('#stopVid').on('click', stopVid);

wow = new WOW();								// Inicialización del plugin WOW
$('.parallax-window').parallax();				// Inicialización del plugin PARALLAX


function start() {
	$('.loader').fadeOut(600);					// Disoluación del loader
	wow.init();									// Ejecución del plugin WOW cuando se carga la página

}

function openMenu() {
	$('nav').toggleClass('abierto');			// Apertura / cierre del menú
}

function initializePlayer(){
	$('.videoContainer').addClass('playing');
	var vid = document.getElementById("videoPresentacion");
	vid.play();
}

function playVid(){
	var vid = document.getElementById("videoPresentacion");
	vid.play();
}

function pauseVid(){
	var vid = document.getElementById("videoPresentacion");
	vid.pause();
}

function stopVid(){
	$('.videoContainer').removeClass('playing');
	var vid = document.getElementById("videoPresentacion");
	vid.currentTime = 0;
	vid.load();
}
