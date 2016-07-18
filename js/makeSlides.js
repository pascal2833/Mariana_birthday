
"use strict";

// Start job when all DOM is OK :
$(function() {

	var indicePhoto = 1;
	var numPhotos;
	var photosFamilly = $(".photosFamilly").text();
	var numPhotos = $("img").length;

	// Création du slide :
	$("#slides").slidesjs({ // si on ne met rien, par défaut, va charger image avec width a 100%.
		// width et height en px, represente en fait proportion/dim foto originale.
		/*effect: {// Bof, ralenti et comme js utilisé pour traitement d'image, bof ....
			slide: {
				// Slide effect settings.
				speed: 1500
				// [number] Speed in milliseconds of the slide animation.
			}
		},*/
		pagination: {
			active: false// True par defaut.
		}
	});

	$(window, "img").load(function() {
		setPhotosSize();
	});

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
		var widthImageReal = (document.getElementById(photosFamilly + indicePhoto).naturalWidth);
		var heightImageReal = (document.getElementById(photosFamilly + indicePhoto).naturalHeight);
		var rapport_W_H = widthImageReal/heightImageReal;
		var viewportW = $(window).width();
		var breakpoint1 = 480;// End width of mobile aprox. After, stop to set width img a 100% (to avoid prb/vertical images)
		var breakpoint2 = 600;
		var breakpoint3 = 800;
		var breakpoint4 = 1200;
		var breakpoint5 = 1400;
		var w_container_to_set;
		var h_container_to_set;
		var widthImage = $("#" + photosFamilly + indicePhoto).width();// Par défaut, width = 100%/cette lib, même si je l'ai précisé/css.
		var heightImage = $("#" + photosFamilly + indicePhoto).height();// f(width) donc forcer taille/images verticales.
		// ------------- Vertical images cases: ----------- //
		if(rapport_W_H <= 1) {
			if(viewportW <= breakpoint1) {
				w_container_to_set = $("body").width();
				h_container_to_set = w_container_to_set / rapport_W_H;
				$(".slidesjs-container").width(w_container_to_set);
				$(".slidesjs-container").height(h_container_to_set);
				$("#" + photosFamilly + indicePhoto).width(w_container_to_set); // Set en "dur", forcer, si non, ne s'aplique pas bien
				$("#" + photosFamilly + indicePhoto).height(h_container_to_set);
			}
			if(viewportW > breakpoint1 && viewportW <= breakpoint2 ) {
				w_container_to_set = 390;
				h_container_to_set = w_container_to_set / rapport_W_H;
				$(".slidesjs-container").width(w_container_to_set);
				$(".slidesjs-container").height(h_container_to_set);
				$("#" + photosFamilly + indicePhoto).width(w_container_to_set); // Set en "dur", forcer, si non, ne s'aplique pas bien
				$("#" + photosFamilly + indicePhoto).height(h_container_to_set);
			}
			if(viewportW > breakpoint2 && viewportW <= breakpoint3 ) {
				w_container_to_set = 410;
				h_container_to_set = w_container_to_set / rapport_W_H;
				$(".slidesjs-container").width(w_container_to_set);
				$(".slidesjs-container").height(h_container_to_set);
				$("#" + photosFamilly + indicePhoto).width(w_container_to_set); // Set en "dur", forcer, si non, ne s'aplique pas bien
				$("#" + photosFamilly + indicePhoto).height(h_container_to_set);
			}
			if(viewportW > breakpoint3 && viewportW <= breakpoint4 ) {
				w_container_to_set = 450;
				h_container_to_set = w_container_to_set / rapport_W_H;
				$(".slidesjs-container").width(w_container_to_set);
				$(".slidesjs-container").height(h_container_to_set);
				$("#" + photosFamilly + indicePhoto).width(w_container_to_set); // Set en "dur", forcer, si non, ne s'aplique pas bien
				$("#" + photosFamilly + indicePhoto).height(h_container_to_set);
			}
			if(viewportW > breakpoint4 && viewportW <= breakpoint5) {
				w_container_to_set = 470;
				h_container_to_set = w_container_to_set / rapport_W_H;
				$(".slidesjs-container").width(w_container_to_set);
				$(".slidesjs-container").height(h_container_to_set);
				$("#" + photosFamilly + indicePhoto).width(w_container_to_set); // Set en "dur", forcer, si non, ne s'aplique pas bien
				$("#" + photosFamilly + indicePhoto).height(h_container_to_set);
			}
			if(viewportW > breakpoint5) {
				w_container_to_set = 550;
				h_container_to_set = w_container_to_set / rapport_W_H;
				$(".slidesjs-container").width(w_container_to_set);
				$(".slidesjs-container").height(h_container_to_set);
				$("#" + photosFamilly + indicePhoto).width(w_container_to_set); // Set en "dur", forcer, si non, ne s'aplique pas bien
				$("#" + photosFamilly + indicePhoto).height(h_container_to_set);
			}
		}
		// ------------- Horizontal images cases: ----------- //
		if(rapport_W_H > 1) {
			$(".slidesjs-container").height(heightImage);
			$(".slidesjs-container").width(widthImage);
		}


	};

	// Necessary to apply this because by default,jquery slides changes it when resize.
	$(window).resize(function() {
		setPhotosSize();
	});

	// Turn to index page :
	$(".turn-initial-page").click(function() {
		window.location.href = "./../index.html";// Rappel : ref/fichier html ou est le lien, pas/fichier js !!!
	});


});











