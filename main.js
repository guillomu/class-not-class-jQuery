var blop = new Audio('sound/Blop.wav');

/* --------- INSTRUCTIONS NIVEAU 1 --------- */

/*  CLICK SUR LE BOUTTON REMPLIR  */
$("#remplir").click(function(){
  blop.play();
  $(".shape").addClass("filled"); // On ajoute la classe .filled à tous les élément .shape
});


/*  CLICK SUR LE BOUTTON VIDER  */
$("#vider").click(function(){
  blop.play();
  $(".shape").removeClass("filled"); // On enlève la classe .filled à tous les élément .shape
});


/*  CLICK SUR UN ROND  */
$(".rond").click(function(){
  blop.play();
  $(this).toggleClass("filled"); // On change la classe .filled de l'élément courant
});

/* --------- INSTRUCTIONS NIVEAU 2 --------- */

/*  CLICK SUR UN CARRE  */
$(".carre").click(function(){
  blop.play();
  // On récupère le parent line et on change la class de tous les élément .shape de cette ligne
  $(this).parents(".line").find(".shape").toggleClass("filled");

  var index = $(this).parent().index()+1;  //On récupère l'index de la colone

  // On met dans une variable tous les éléments .shape qui sont dans la colone n°index de la matrice
  var column = $("#matrix .col:nth-child("+index+") .shape");

  if($(this).hasClass("filled")){ // On teste la class de l'élement courant
    column.addClass("filled");  // Si il est rempli on ajoute la classe .filled à sa colonne
  }
  else{
    column.removeClass("filled"); // Sinon on enlève la classe .filled à sa colonne
  }
});

/*  CLICK SUR UN LOSANGE  */
$(".losange").click(function(){
  blop.play();
  // On récupère le parent line et on change la class de tous les élément .shape de cette ligne
  $(this).parents(".line").find(".shape").toggleClass("filled");

  var index = $(this).parent().index()+1; //On récupère l'index de la colone
  $("#matrix .col:nth-child("+index+") .shape").toggleClass("filled"); //On change la class .filled de la colonne

  // On change une dernière fois la class .filed de l'élément courant
  // car toggleClass() à été appelé 2 fois ce qui à annulé son effet
  $(this).toggleClass("filled");
});
