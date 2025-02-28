  const translations = {
    en: {
        homee:"Home",
        about:"About",
        news:"News",
        homeee:"Home",
        aboute:"About",
        newss:"News", 
        mentitle1:"1. Site publisher",
        mentitle2:"2. Site hosting",
        mentitle3:"3. Intellectual property rights",
        mentitle4:"4. Personal data",
        mentitle5:"5. Cookies",
        mentitle6:"6. Use of the site",
        mentitle7:"7. Liability",
        menp1:"The Navilone website is published by Navilone SASU, with capital of €250.00, registered with the Registre du Commerce et des Sociétés under number 832 999 445, headquartered at 54 rue Aristide Briand, 77300 Fontainebleau, France. Publishing Director: Hassan Lotfi Telephone: +33 1 84 75 45 35 Email: contact@navilone.com",
        menp2:"The site is hosted by OVH. Address: 2, rue Kellermann, 59100 Roubaix. Website: https://www.ovhcloud.com/fr/ Contact: 1007 (telephone number)",
        menp3:"All content on the Navilone site, including but not limited to graphics, images, texts, videos, logos and icons, as well as their layout, are the exclusive property of Navilone SASU, with the exception of trademarks, logos or content belonging to other partner companies or authors. Any reproduction, distribution, modification, adaptation, retransmission or publication, even partial, of these various elements is strictly forbidden without the written consent of Navilone SASU.",
        menp4:"The information collected from the forms on the site is processed by Navilone SASU in order to respond to users' requests. Data processing manager: Hassan Lotfi Data collected via the form is sent directly by email to the site owner. In accordance with the French Data Protection Act of January 6, 1978, as amended, and the General Data Protection Regulation (RGPD), you have the right to access, rectify, delete and object to the processing of your personal data. To exercise this right, please contact contact@navilone.com.",
        menp5:"The Navilone site may collect information through the use of cookies. The purpose of these cookies is to facilitate navigation on the site and to enable certain functionalities. By continuing to browse this site, you accept the use of cookies.",
        menp6:"The user of the Navilone site undertakes to comply with the laws in force and not to infringe the intellectual property rights or other rights of the company or third parties.",
        menp7:"Navilone SASU cannot be held responsible for any malfunction of the site or loss of data related to its use.",
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
        mentitle1:"1. Éditeur du site",
        mentitle2:"2. Hébergement du site",
        mentitle3:"3. Propriété intellectuelle",
        mentitle4:"4. Données personnelles",
        mentitle5:"5. Cookies",
        mentitle6:"6. Utilisation du site",
        mentitle7:"7. Responsabilité",
        menp1:"Le site Navilone est édité par la société Navilone SASU, au capital de 250,00 €, immatriculée au Registre du Commerce et des Sociétés sous le numéro 832 999 445, dont le siège social est situé au 54 rue Aristide Briand, 77300 Fontainebleau, France. Directeur de la publication : Hassan Lotfi Téléphone : +33 1 84 75 45 35 Email : contact@navilone.com",
        menp2:"Le site est hébergé par OVH. Adresse : 2, rue Kellermann, 59100 Roubaix. Site web : https://www.ovhcloud.com/fr/ Contact : 1007 (numéro de téléphone)",
        menp3:"Tout le contenu présent sur le site Navilone, incluant, de manière non limitative, les graphismes, images, textes, vidéos, logos et icônes, ainsi que leur mise en forme, sont la propriété exclusive de Navilone SASU, à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit de Navilone SASU.",
        menp4:"Les informations recueillies à partir des formulaires présents sur le site font l’objet d’un traitement informatique destiné à Navilone SASU afin de répondre aux demandes des utilisateurs. Responsable du traitement des données : Hassan Lotfi Les données collectées via le formulaire sont directement envoyées par email au propriétaire du site. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous bénéficiez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles. Pour exercer ce droit, veuillez contacter contact@navilone.com.",
        menp5:"Le site Navilone peut collecter des informations via l’utilisation de cookies. Ces cookies ont pour but de faciliter la navigation sur le site et de permettre certaines fonctionnalités. En poursuivant votre navigation sur ce site, vous acceptez l’utilisation des cookies.",
        menp6:"L’utilisateur du site Navilone s’engage à respecter les lois en vigueur et à ne pas porter atteinte aux droits de propriété intellectuelle ou à d’autres droits de la société ou de tiers.",
        menp7:"Navilone SASU ne peut être tenue responsable en cas de dysfonctionnement du site ou de la perte de données liées à l'utilisation de ce dernier.",
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
    document.getElementById('mentitle1').innerText = translations[lang].mentitle1;
    document.getElementById('mentitle2').innerText = translations[lang].mentitle2;
    document.getElementById('mentitle3').innerText = translations[lang].mentitle3;
    document.getElementById('mentitle4').innerText = translations[lang].mentitle4;
    document.getElementById('mentitle5').innerText = translations[lang].mentitle5;
    document.getElementById('mentitle6').innerText = translations[lang].mentitle6;
    document.getElementById('mentitle7').innerText = translations[lang].mentitle7;
    document.getElementById('menp1').innerText = translations[lang].menp1;
    document.getElementById('menp2').innerText = translations[lang].menp2;
    document.getElementById('menp3').innerText = translations[lang].menp3;
    document.getElementById('menp4').innerText = translations[lang].menp4;
    document.getElementById('menp5').innerText = translations[lang].menp5;
    document.getElementById('menp6').innerText = translations[lang].menp6;
    document.getElementById('menp7').innerText = translations[lang].menp7;
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
