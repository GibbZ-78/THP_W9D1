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

// JBV - Variable globale pour décompter les clicks sur "footer"
var click_nbr = 0;

// JBV - Reload current page to reset activated Javascript function(s)
function reload_page() {
  location.reload();
}

// JBV - Display "Clique" in the console when footer is clicked
function functionality_01() {
  console.log("Fonctionnalité n°1 : ");
  document.querySelector("footer").addEventListener("click", function () { console.log("  > Clique"); });
}

// JBV - Display "Clique + <# of click>" in the console when footer is clicked
function functionality_01bis() {
  console.log("Fonctionnalité n°1 bis : ");
  document.querySelector("footer").addEventListener("click",
    function () {
      click_nbr += 1;
      console.log("  > Clique n°" + click_nbr);
    })
}

// JBV - Switch "collapse" class attribution to the 
function functionality_02() {
  document.querySelector("button.navbar-toggler").addEventListener("click",
    function () {
      console.log("Fonctionnalité n°2 : ");
      document.getElementById("navbarHeader").classList.toggle("collapse");
      document.getElementById("navbarHeader").className.search(/collapse/) == -1 ? console.log("  > Coucou me (re)voilà !") : console.log("  > Suis (re)cachée !");
    });
}

// JBV - 
function functionality_03() {

}

// JBV - 
function functionality_04() {

}

// JBV - 
function functionality_05() {

}

// JBV - 
function functionality_06() {

}

// JBV - 
function functionality_07() {

}

// JBV - 
function functionality_08() {

}

// JBV - 
function functionality_09() {

}

// JBV - Main program used before implementing the "activation buttons row"
//       Keep these calls commented instead of suppressing them, if any useful ever
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
