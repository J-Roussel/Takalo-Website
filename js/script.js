//fix mobile nav menu automatic collapse
$(function(){ //mitovy amin'ny documen.addEventListener("DOMContentLoaded",....)
	$(".navbar-toggler").blur( function(event){
	//mitovy amin'ny document.querySelector("#navbar-toggler").addEventListener("blur",....)
		var screenwidth=window.innerWidth;
		
		if(screenwidth<758){
			console.log("ready");
			$("#main-nav").collapse('hide');
		}
	});
});



let dollar = document.getElementById('solde_demande');
let Ariary = document.querySelector('#tot_mobile');
let numeroMobile = document.querySelector('#numero_mobile');
let nomCompteMobile = document.querySelector('#nom_compte_mobile');

tauxDeChange = () =>{
	Ariary.value = dollar.value*4200+" ariary";
} 

$("#buttonDemander").click(function(){
	console.log("mety");
	var bodyDemande=$(".modal-body");
	let comfirmDemmand = "<p>-Solde à retirer : <span class='text-success fw-bold'> "+dollar.value+"</span></p><hr><p>-Solde Mvola que vous recevrai : <span class='text-success fw-bold'> "+Ariary.value+"</span></p><p>-Numero de telephone : <span class='text-success fw-bold'> "+numeroMobile.value+"</span></p><p>-Nom du Compte Mvola : <span class='text-success fw-bold'> "+nomCompteMobile.value+"</span></p>"

	//let comfirmDemmand = "<p>-Solde demande : <span class='text-success fw-bold'> 5 USD</span></p><p>-Numero de Compte : <span class='text-success fw-bold'> P124589876</span></p><hr><p>-Total a payer via Mvola : <span class='text-success fw-bold'> 5200 Ariary</span></p><p>-Numero de telephone : <span class='text-success fw-bold'> 0349896155</span></p><p>-Nom du Compte Mvola : <span class='text-success fw-bold'> Rabe</span></p>"
	bodyDemande.empty();
	$(".modal-body").append(comfirmDemmand);
});

// for depot payeer only
$("#buttonDemanderDepot").click(function(){

	let numeroCompte = document.querySelector('#numero_compte');

	console.log("mety");
	var bodyDemande=$(".modal-body");
	let comfirmDemmand = "<p>-Solde à demande : <span class='text-success fw-bold'> "+dollar.value+"</span></p><p>-Numero de Compte : <span class='text-success fw-bold'> "+numeroCompte.value+"</span></p><hr><p>-Total a payer via Mvola : <span class='text-success fw-bold'> "+Ariary.value+"</span></p><p>-Numero de telephone : <span class='text-success fw-bold'> "+numeroMobile.value+"</span></p><p>-Nom du Compte Mvola : <span class='text-success fw-bold'> "+nomCompteMobile.value+"</span></p>"

	//let comfirmDemmand = "<p>-Solde demande : <span class='text-success fw-bold'> 5 USD</span></p><p>-Numero de Compte : <span class='text-success fw-bold'> P124589876</span></p><hr><p>-Total a payer via Mvola : <span class='text-success fw-bold'> 5200 Ariary</span></p><p>-Numero de telephone : <span class='text-success fw-bold'> 0349896155</span></p><p>-Nom du Compte Mvola : <span class='text-success fw-bold'> Rabe</span></p>"
	bodyDemande.empty();
	$(".modal-body").append(comfirmDemmand);
});

/*
demande = () => {
	let comfirmDemmand = "<p>-Solde demande : <span class='text-success fw-bold'> 5 USD</span></p><p>-Numero de Compte : <span class='text-success fw-bold'> P124589876</span></p><hr><p>-Total a payer via Mvola : <span class='text-success fw-bold'> 5200 Ariary</span></p><p>-Numero de telephone : <span class='text-success fw-bold'> 0349896155</span></p><p>-Nom du Compte Mvola : <span class='text-success fw-bold'> Rabe</span></p>"
	$(".modal-body").append(comfirmDemmand);
	console.log("mety");
}
*/