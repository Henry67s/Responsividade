$(document).ready(function(){

$("#toggle").click(function(){
$("#conteudoExtra").slideToggle();
});

$("#darkMode").click(function(){
$("body").toggleClass("dark");
});

let total = $(".curso").length;
$("#contador").text(total);

$("#pesquisa").keyup(function(){

let valor = $(this).val().toLowerCase();

$(".curso").filter(function(){

$(this).toggle(
$(this).text().toLowerCase().indexOf(valor) > -1
);

});

});

$("#formulario").submit(function(e){

e.preventDefault();

alert("Obrigado por entrar em contato!");

});

$("#topo").click(function(){

$("html, body").animate({
scrollTop:0
},800);

});

});
