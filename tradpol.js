  const translations = {
    en: {
        homee:"Home",
        about:"About",
        news:"News",
        homeee:"Home",
        aboute:"About",
        newss:"News", 
        poltitle1:"Privacy Policy",
        poltitle2:"1. Introduction",
        poltitle3:"2. Data collected",
        poltitle4:"3. Purpose of data collection",
        poltitle5:"4. Recipients of data",
        poltitle6:"5. Data retention period",
        poltitle7:"6. Your rights concerning your data",
        poltitle8:"7. Data security",
        poltitle9:"8. Cookies",
        poltitle10:"9. Changes to the privacy Policy",
        poltitle11:"10. Contact",
        polp1:"This privacy policy describes the practices for collecting, using and protecting the personal data of users of the “https://navilone.com/” website. By using the site and completing the contact form, you agree to the terms of this privacy policy.",
        polp2:"When you use our contact form, we collect the following personal data: Name and first name Email address Message (content of your request) This information is used solely to process your request and contact you in return.",
        polp3:"Personal data collected via the contact form is used for the following purposes: To respond to your inquiries and questions about our project management services. To improve our customer service by tracking exchanges and optimizing responses.",
        polp4:"The data collected is intended solely for Navilone's project management team. It will not be sold, exchanged or transferred to third parties, unless required by law.",
        polp5:"Data collected via the contact form is kept for a period of 12 months from receipt of your message, unless you request its deletion or the law requires a different retention period.",
        polp6:"In accordance with the RGPD, you have the following rights: Right of access: You can request to know what data we hold about you. Right of rectification: You can request the correction of your data if it is inaccurate or incomplete. Right to erasure: You can request the deletion of your personal data. Right to restrict processing: You may request that the use of your data be restricted. Right to object: You may object to the processing of your data for legitimate reasons. To exercise these rights, please contact us at the following address: contact@navilone.com.",
        polp7:"We implement appropriate security measures to protect your data from unauthorized access, misuse or disclosure. The site uses the HTTPS protocol to secure data exchanges.",
        polp8:"Our site uses cookies to enhance the user experience. No tracking or advertising cookies are used. Cookies that are strictly necessary for the operation of the site do not require consent.",
        polp9:"We reserve the right to change this privacy policy at any time. Changes will be posted on this page with the date of the update. Last update: 20/01/2025",
        polp10:"If you have any questions about our privacy policy, you can write to us at: contact@navilone.com.",
        footitle1:"Navilone",
        footitle2:"Important information",
        footitle3:"All rights reserved",
        foo1:"Turn your ideas into successes with expert, tailor-made, results-oriented project management.",
        foo2:"Terms of use",
        foo3:"Privacy policy",

    },    
    
    fr: { 
        homee:"Accueil",
        about: "A propos",
        news:"Articles",
        homeee:"Accueil",
        aboute: "A propos",
        newss:"Articles",
        poltitle1:"Politique de confidentialité",
        poltitle2:"1. Introduction",
        poltitle3:"2. Données collectées",
        poltitle4:"3. Finalité de la collecte des données",
        poltitle5:"4. Destinataires des données",
        poltitle6:"5. Durée de conservation des données",
        poltitle7:"6. Vos droits concernant vos données",
        poltitle8:"7. Sécurité des données",
        poltitle9:"8. Cookies",
        poltitle10:"9. Modifications de la politique de confidentialité",
        poltitle11:"10. Contact",
        polp1:"La présente politique de confidentialité décrit les pratiques de collecte, d’utilisation et de protection des données personnelles des utilisateurs du site `https://navilone.com/` . En utilisant le site et en remplissant le formulaire de contact, vous acceptez les termes de cette politique de confidentialité.",
        polp2:"Lorsque vous utilisez notre formulaire de contact, nous collectons les données personnelles suivantes : Nom et prénom Adresse email Message (contenu de votre demande) Ces informations sont utilisées uniquement pour traiter votre demande et vous contacter en retour.",
        polp3:"Les données personnelles recueillies via le formulaire de contact sont utilisées dans les buts suivants : Répondre à vos demandes de renseignements et questions concernant nos services de gestion de projets. Améliorer notre service client en suivant les échanges et en optimisant les réponses.",
        polp4:"Les données collectées sont destinées uniquement à l'équipe de gestion de projets de Navilone. Elles ne sont ni vendues, ni échangées, ni transférées à des tiers, sauf obligation légale.",
        polp5:"Les données collectées via le formulaire de contact sont conservées pendant une durée de 12 mois à partir de la réception de votre message, sauf si vous en demandez la suppression ou si la loi impose une durée de conservation différente.",
        polp6:"Conformément au RGPD, vous disposez des droits suivants : Droit d'accès : Vous pouvez demander à savoir quelles données nous détenons sur vous. Droit de rectification : Vous pouvez demander la correction de vos données si elles sont inexactes ou incomplètes. Droit à l'effacement : Vous pouvez demander la suppression de vos données personnelles. Droit à la limitation du traitement : Vous pouvez demander que l'utilisation de vos données soit restreinte. Droit d'opposition : Vous pouvez vous opposer au traitement de vos données pour des motifs légitimes. Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : contact@navilone.com.",
        polp7:"Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé, utilisation abusive ou divulgation. Le site utilise le protocole HTTPS pour sécuriser les échanges.",
        polp8:"Notre site utilise des cookies pour améliorer l'expérience utilisateur. Aucun cookie de traçage ou publicitaire n'est utilisé. Les cookies strictement nécessaires au fonctionnement du site ne nécessitent pas de consentement.",
        polp9:"Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec la date de mise à jour. Dernière mise à jour : 20/01/2025",
        polp10:"Pour toute question concernant notre politique de confidentialité, vous pouvez nous écrire à : contact@navilone.com.",
        footitle1:"La société Navilone",
        footitle2:"Informations importantes",
        footitle3:"Tous droits réservés",
        foo1:"Transformez vos idées en succès grâce à une gestion de projet experte, sur-mesure et orientée résultats.",
        foo2:"Mentions légales",
        foo3:"Politique de confidentialité",
    },
  };
  
  function setLanguage(lang) {
    document.getElementById('homee').innerText = translations[lang].homee;
    document.getElementById('about').innerText = translations[lang].about;
    document.getElementById('news').innerText = translations[lang].news;
    document.getElementById('homeee').innerText = translations[lang].homeee;
    document.getElementById('aboute').innerText = translations[lang].aboute;
    document.getElementById('newss').innerText = translations[lang].newss;
    document.getElementById('poltitle1').innerText = translations[lang].poltitle1;
    document.getElementById('poltitle2').innerText = translations[lang].poltitle2;
    document.getElementById('poltitle3').innerText = translations[lang].poltitle3;
    document.getElementById('poltitle4').innerText = translations[lang].poltitle4;
    document.getElementById('poltitle5').innerText = translations[lang].poltitle5;
    document.getElementById('poltitle6').innerText = translations[lang].poltitle6;
    document.getElementById('poltitle7').innerText = translations[lang].poltitle7;
    document.getElementById('poltitle8').innerText = translations[lang].poltitle8;
    document.getElementById('poltitle9').innerText = translations[lang].poltitle9;
    document.getElementById('poltitle10').innerText = translations[lang].poltitle10;
    document.getElementById('poltitle11').innerText = translations[lang].poltitle11;
    document.getElementById('polp1').innerText = translations[lang].polp1;
    document.getElementById('polp2').innerText = translations[lang].polp2;
    document.getElementById('polp3').innerText = translations[lang].polp3;
    document.getElementById('polp4').innerText = translations[lang].polp4;
    document.getElementById('polp5').innerText = translations[lang].polp5;
    document.getElementById('polp6').innerText = translations[lang].polp6;
    document.getElementById('polp7').innerText = translations[lang].polp7;
    document.getElementById('polp8').innerText = translations[lang].polp8;
    document.getElementById('polp9').innerText = translations[lang].polp9;
    document.getElementById('polp10').innerText = translations[lang].polp10;
    document.getElementById('footitle1').innerText = translations[lang].footitle1;
    document.getElementById('footitle2').innerText = translations[lang].footitle2;
    document.getElementById('footitle3').innerText = translations[lang].footitle3;
    document.getElementById('foo1').innerText = translations[lang].foo1;
    document.getElementById('foo2').innerText = translations[lang].foo2;
    document.getElementById('foo3').innerText = translations[lang].foo3;

  }
  
  // Langue par défaut
  setLanguage('en');


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
  })
})