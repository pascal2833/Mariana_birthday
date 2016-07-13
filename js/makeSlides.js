
"use strict";

var indicePhoto = 1;
var numPhotos;

// Start job when all DOM is OK :
$(function() {

	// Création du slide :
	$("#slides").slidesjs({ // si on ne met rien, par défaut, va charger image avec width a 100%.
		// width et height en px, represente en fait proportion/dim foto originale.
		effect: {
			slide: {
				// Slide effect settings.
				speed: 1500
					// [number] Speed in milliseconds of the slide animation.
			}
		},
		pagination: {
			active: false// True par defaut.
		}
	});

	numPhotos = $("img").length;

	/*$("img").load(function() {
		setPhotosSize();
	});*/

	// Set indicePhoto when click/previous :
	$(".slidesjs-previous").click(function() {
		indicePhoto--;
		if(indicePhoto === 0) {
			indicePhoto = numPhotos;
		}
		setPhotosSize();
	});

	// Set indicePhoto when click/next :
	$(".slidesjs-next").click(function() {
		indicePhoto++;
		if(indicePhoto > numPhotos) {
			indicePhoto = 1;
		}
		setPhotosSize();
	});

	/**
	 * [[
	 *set photos size f(relation height and with original to keep proportion)
	 and f(vertical or horizontal).
	 * ]]
	 * @author Pascal
	 */
	var setPhotosSize = function() {
		var widthImageReal = (document.getElementById("foto_pollitos_"+indicePhoto).naturalWidth);
		var heightImageReal = (document.getElementById("foto_pollitos_"+indicePhoto).naturalHeight);
		var rapport_W_H = widthImageReal/heightImageReal;
		var viewportW = $(window).width();
		var breakpoint1 = 500;
		var breakpoint2 = 950;
		// magique, on set dynamiquement, comem ça, pas besoin de break-point/images horizontales ...!!!
		//Note : + facile de se base sur width que sur height/utilisation media queries.
		var w_container_4_breakPoint1 = $("body").width();
		// Si on augmente, il faut réduite width pour les images verticales si non, dépassent.
		var w_container_4_breakPoint2 = 450;
		var w_container_4_breakPoint3 = 600;
		var h_container_4_breakPoint1 = w_container_4_breakPoint1 / rapport_W_H;
		var h_container_4_breakPoint2 = w_container_4_breakPoint2 / rapport_W_H;
		var h_container_4_breakPoint3 = w_container_4_breakPoint3 / rapport_W_H;
		var widthImage = $("#foto_pollitos_" + indicePhoto).width();// Par défaut, width = 100%.
		var heightImage = $("#foto_pollitos_" + indicePhoto).height();// f(width) donc forcer taille/iamges verticales.
		// ------------- Vertical images cases: ----------- //
		if(rapport_W_H <= 1) {
			$(".slidesjs-container").width(w_container_4_breakPoint1);
			$(".slidesjs-container").height(h_container_4_breakPoint1);
			$("#foto_pollitos_"+indicePhoto).width(w_container_4_breakPoint1); // Set en dur, forcer, si non, ne s'aplique pas bien
			$("#foto_pollitos_"+indicePhoto).height(h_container_4_breakPoint1);
			if(viewportW >= breakpoint1) {
				$(".slidesjs-container").width(w_container_4_breakPoint2);
				$(".slidesjs-container").height(h_container_4_breakPoint2);
				$("#foto_pollitos_"+indicePhoto).width(w_container_4_breakPoint2);
				$("#foto_pollitos_"+indicePhoto).height(h_container_4_breakPoint2);
				$("#foto_pollitos_"+indicePhoto).css("margin-top", "5px");
			}
			if(viewportW >= breakpoint2) {
				$(".slidesjs-container").width(w_container_4_breakPoint3);
				$(".slidesjs-container").height(h_container_4_breakPoint3);
				$("#foto_pollitos_"+indicePhoto).width(w_container_4_breakPoint3);
				$("#foto_pollitos_"+indicePhoto).height(h_container_4_breakPoint3);
				$("#foto_pollitos_"+indicePhoto).css("margin-top", "5px");
			}
		}
		// ------------- Horizontal images cases: ----------- //
		if(rapport_W_H > 1) {
			$(".slidesjs-container").height(heightImage);
			$(".slidesjs-container").width(widthImage);
			/*if(viewportW >= breakpoint2) {
				$(".container").css("margin-top", "15px");
			}*/
		}
	};

	// Necessary to apply this because by default,jquery slides changes it when resize.
	$(window).resize(function() {
		setPhotosSize();
	});

	// Turn to index page :
$(".turn-initial-page").click(function() {
	window.location.href = "./../index.html";// Rappel : ref/ficjier html ou est le lien, pas/fichier js !!!
});


});











