/******************************/
/*                            */
/*   Made with love & sweat   */
/*                            */
/*             by             */
/*                            */
/*      -~={ GIBBZ }=~-       */
/*                            */
/*  (c) 2022 Itemacy for THP  */
/******************************/

// JBV - GLobal vars... 
var my_click_nbr = 0;                  // ...To count clicks on the "footer"
var my_previous_color = "";            // ...To store the prior color (if any...) of the card's text, juste before we switch it to "red"

// JBV - Reload current page to reset activated Javascript function(s)
function reload_page() {
  location.reload();
}

// JBV - Display "Fonction <func_nbr> enclanchée !" and toggle related button style from "primary" (blue) to "success" (green)
function activateFunctionnality(func_nbr) {
  console.log(`Fonctionnalité n°${func_nbr} enclenchée !`);
  document.getElementById(`btn-func-${func_nbr}`).classList.replace("btn-primary", "btn-success");
}

// JBV - Display "Clique" in the console when footer is clicked
function functionality_01() {
  activateFunctionnality("01");
  document.querySelector("footer").addEventListener("click", function () { console.log("  > Clique"); });
}

// JBV - Display "Clique + <# of click>" in the console when footer is clicked
function functionality_01bis() {
  activateFunctionnality("01bis");
  document.querySelector("footer").addEventListener("click",
    function () {
      my_click_nbr += 1;
      console.log("  > Clique n°" + my_click_nbr);
    })
}

// JBV - Switch "collapse" class attribution to the 
function functionality_02() {
  activateFunctionnality("02");
  document.querySelector("button.navbar-toggler").addEventListener("click",
    function () {
      document.getElementById("navbarHeader").classList.toggle("collapse");
      document.getElementById("navbarHeader").className.search(/collapse/) == -1 ? console.log("  > Coucou me (re)voilà !") : console.log("  > Suis (re)cachée !");
    });
}

// JBV - Text of 1st card becomes red when the related "Edit" button is pressed
//       NB: would be even easier if using Bootstrap classes "danger", "success"...
function functionality_03() {
  activateFunctionnality("03");
  let my_1st_card = document.querySelectorAll("div.card")[0];
  let my_1st_edit_btn = my_1st_card.querySelectorAll("button.btn")[1];
  my_1st_edit_btn.addEventListener("click",
    function () {
      console.log("  > Edit button pressed on 1st card... Text goes red!");
      my_1st_card.style.color = "red";
    });
}

// JBV - Text of 2nd card toggles between "previous color" and "green" when its "Edit" button is pressed
//       NB: would be even easier if using Bootstrap classes "danger", "success"...
function functionality_04() {
  activateFunctionnality("04");
  let my_2nd_card = document.querySelectorAll("div.card")[1];
  let my_2nd_edit_btn = my_2nd_card.querySelectorAll("button.btn")[1];
  my_2nd_edit_btn.addEventListener("click",
    function () {
      if (my_2nd_card.style.color == "green") {
        console.log("  > Edit button pressed on the 2nd card... Text goes back to original color (" + my_previous_color + ")!");
        my_2nd_card.style.color = my_previous_color;
      }
      else {
        console.log("  > Edit button pressed on the 2nd card... Text switches to 'green'!");
        my_previous_color = my_2nd_card.style.color;
        my_2nd_card.style.color = "green";
      }
    });
}

// JBV - Toggle the site from using Bootstrap (or not) when navbar is double-clicked
function functionality_05() {
  activateFunctionnality("05");
  console.log("  > Remember to activate 'Functionality #2' first then display the 'Navbar' to ba able to double click on it ;-)");
  document.getElementById("navbarHeader").addEventListener("dblclick",
    function () {
      // document.getElementsByTagName("link").disabled ? console.log("  > (Ré)activation de Bootstrap...Tant pis.") : console.log("  > Désactivation de Bootstrap !");
      // TRY 1 - Did not work properly (or badly used...) so tried something else
      // document.getElementsByTagName("link").disabled = !document.getElementsByTagName("link").disabled;
      // TRY 2 - Did not work aither with a literal "true" or "false" valuation...
      // document.getElementsByTagName("link").disabled = true;
      // TRY #3 - It worked ! It's alive, aliiivvee ! An works in both directions... Classy ;-)
      document.styleSheets.item(0).disabled = !document.styleSheets.item(0).disabled;
      document.styleSheets.item(0).disabled ? console.log("  > Désactivation de Bootstrap !") : console.log("  > (Ré)activation de Bootstrap...Tant pis.");
    });
}

// JBV - Hovering any "view" button of each of the 6 cards make the latter schrink (img to 20%, text vanishes)
function functionality_06() {
  activateFunctionnality("06");
  document.querySelectorAll("div.card").forEach(my_card => {
    my_card.querySelectorAll("button.btn")[0].addEventListener("mouseover",
      function () {
        console.log("  > Passage sur le bouton view d'une carte...");
        if (my_card.querySelector("img.card-img-top").style.width != "20%") {
          console.log("  > On rapetisse l'image !");
          my_card.querySelector("img.card-img-top").style.width = "20%";
          my_card.querySelector("p.card-text").style.display = "none";
        }
        else {
          console.log("  > On agrandit l'image !");
          my_card.querySelector("img.card-img-top").style.width = "100%";
          my_card.querySelector("p.card-text").style.display = "inherit";     // Note sure if it's "block" or something else so make it inherit from mother :-)
        }
        // Did not work... so switched to ".display" property above
        // my_card.querySelector("p.card-text").style.visible = !my_card.querySelector("p.card-text").style.visible;
      });
  });
}

// JBV - Capture clicks on the "==>" arrow to make last card become first, etc.
function functionality_07() {
  activateFunctionnality("07");
  document.getElementById("btn-func-07").classList.replace("btn-primary", "btn-success");
  let my_right_arrow = document.querySelectorAll("section.jumbotron > div > p > a")[1];
  console.log(`  > Intitulé du lien visé : ${my_right_arrow.innerHTML}`);
  console.log("  > La première carte a pour image : " + document.querySelectorAll("div.row > div.col-md-4 > div.card")[0].querySelector("img").src);
  my_right_arrow.addEventListener("click",
    function () {
      console.log("  > Et on fait tourner les cartes vers la droite (dédicace à P. Sébastien, si tu nous entends...)");
      // Am wondering if a "let" instead of a "var" would change something here... Would a remove + Insert be neede then?
      var my_card = document.querySelectorAll("div.row > div.col-md-4")[5];
      document.querySelector("div.album > div.container > div.row").insertBefore(my_card, document.querySelector("div.album > div.container > div.row").firstElementChild);
      console.log("  > A présent, la 1ère carte est celle qui affiche : " + document.querySelectorAll("div.row > div.col-md-4")[0].querySelector("img").src);
    });
}

// JBV - Capture clicks on the "<==" arrow to make first card become last, etc. 
//       NB : before that, disabling the existing link to THP web site is required, though (see below)
function functionality_08() {
  activateFunctionnality("08");
  document.getElementById("btn-func-08").classList.replace("btn-primary", "btn-success");
  let my_left_arrow = document.querySelectorAll("section.jumbotron > div > p > a")[0];
  my_left_arrow.href = "#"; // Disabling the previously active link to THP web site... Wouldn't it be a little trap?
  console.log(`  > Intitulé du lien visé : ${my_left_arrow.innerHTML}`);
  console.log("  > La première carte a pour image : " + document.querySelectorAll("div.row > div.col-md-4 > div.card")[0].querySelector("img").src);
  my_left_arrow.addEventListener("click",
    function () {
      console.log("  > Et on fait tourner les cartes vers la gauche (RE-dédicace à P. Sébastien, si tu nous entends...)");
      // Am wondering if a "let" instead of a "var" would change something here... Would a remove + Insert be neede then?
      var my_card = document.querySelectorAll("div.row > div.col-md-4")[0];
      document.querySelector("div.album > div.container > div.row").appendChild(my_card);
      console.log("  > A présent, la 1ère carte est celle qui affiche : " + document.querySelectorAll("div.row > div.col-md-4")[0].querySelector("img").src);
    });
}

// JBV - Do stuff if title-logo is selected (focused on) and some keyboard's specific key are pressed
function functionality_09() {
  activateFunctionnality("09");
  document.getElementById("btn-func-09").classList.replace("btn-primary", "btn-success");
  document.querySelector("a.navbar-brand").addEventListener('focus', function () {
    console.log('  > Le titre / logo a été sélectionné !');
    document.addEventListener("keyup",
      function (my_event) {
        let my_pressed_key = my_event.key;
        console.log(`  > En même temps, la touche ${my_pressed_key} a été pressée ce qui...`);
        let my_body = document.getElementsByTagName("body")[0];
        switch (my_pressed_key) {
          case "a":
            console.log("  > ... va condenser la page sur 4 colonnes Bootstrap A GAUCHE de l'écran.");
            my_body.className = "";
            my_body.classList.add("col-4", "mr-auto");
            break;
          case "y":
            console.log("  > ... va condenser la page sur 4 colonnes Bootstrap AU MILIEU de l'écran.");
            my_body.className = "";
            my_body.classList.add("col-4", "mx-auto");
            break;
          case "p":
            console.log("  > ...  va condenser la page sur 4 colonnes Bootstrap A DROITE de l'écran");
            my_body.className = "";
            my_body.classList.add("col-4", "ml-auto");
            break;
          case "b":
            console.log("  > ... va tout remettre en ordre. Ouf !");
            my_body.className = "";
            break;
          default:
            console.log("  > ... Ne va rien déclencher du tout. Tranquillou, seul(e) sur le sable, les yeux dans l'eau...(cace-dédi à Francis ;-)");
        }
      });
  });
}

// JBV - Main program used before implementing the "activation buttons row"
//       Kept these calls commented instead of suppressing them, if any useful in the future
// functionality_01();
// functionality_01bis();
// functionality_02();
// functionality_03();
// functionality_04();
// functionality_05();
// functionality_06();
// functionality_07();
// functionality_08();
// functionality_09();

// JBV - End of Javascript code
