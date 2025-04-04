//-------------------------------------------------------------------Navbar----------------------------------------------------------------------------//


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn .fa-bars').toggleClass("active");
    });


//-------------------------------------------------------------------Typing----------------------------------------------------------------------------//



    //strings: ["Conseils pour PME", "Gestion de projet", "Installation d'outils modernes"]
    // typing text animation script
    var typed = new Typed(".typing", {
      strings : ["Aménagement de combles", "Rénovation intérieure", "Rénovation extérieure"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
});

// *****************************************Animation focus de contact ******************************************* //


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// *****************************************Section article ******************************************* //



const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.content');
const faqs = document.querySelectorAll('.tab-button')


// Ajouter un événement de clic à chaque bouton
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Supprimer la classe active de tous les boutons et contenus
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Ajouter la classe active au bouton cliqué et à son contenu correspondant
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(`tab-${tabId}`).classList.add('active');

    faqs.forEach
  });
});




// *********************************************Slider de logo***********************************************//



//var copy = document.querySelector(".logos-slide").cloneNode(true);
//document.querySelector(".logos").appendChild(copy);



// *****************************************Cookie Banner ******************************************* //

document.addEventListener("DOMContentLoaded", function(){
  const cookieBanner = document.getElementById("cookie-banner")
  const acceptButton = document.getElementById("accept-cookies")

  function executeScript(){
      console.log("Déclenchement")
  }

  if(localStorage.getItem('cookiesAccepted') === 'true'){
      cookieBanner.style.display = "none"
      executeScript()
  }

  acceptButton.addEventListener('click', function(){
      localStorage.setItem('cookiesAccepted', 'true')
      cookieBanner.style.display = "none"
      executeScript()
  })
})



// *****************************************Fin ******************************************* //



document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les éléments avec les classes .nav-link, .custom-class1, .custom-class2, et .custom-class3
    const navLinks = document.querySelectorAll('.menu-btn, .logo, .contaact-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const targetId = this.getAttribute('href').substring(1); // Obtient l'ID de la section cible
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Fait défiler jusqu'à la section cible
                history.replaceState(null, null, ' '); // Remplace l'état de l'historique sans modifier l'URL
            }
        });
    });
});
