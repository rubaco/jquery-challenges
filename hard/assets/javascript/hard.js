/**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

 (function(){



   //check for odd and changes links
        function isOdd(num) { return num % 2;}{
        }

   //jQuery equivelent to window.onload = function{}
   //code in here wont run until page loads
   $(function(){
     //remove last 2 posts w/ class post
     $( "div" ).removeClass( "row post" );

     //remove odds
     let title = $(".title a");

     //remove images on the side
    // $( "img" ).removeClass( "large-3 columns hide-for-small" );
     $('p img').remove();

    $("aside").hide();

     console.log(title);

     titleText = "";
     newText = "";

    for (var i=0;i<title.length;i++) {
     titleText = title[i].innerHTML;
     console.log(titleText);
     newText = titleText.replace(/Section /i, '');
     console.log(newText);
       if(isOdd(newText))
       {
         console.log("its odd!")
         title[i].style.visibility = 'hidden'
         // .css({ visibility: 'hidden' })
         // .style.visibility = 'hidden';
       }
       else {
         console.log("its even!")
       }
     }

//change bacon to LASER VISION
    var strNewString = $('body').html().replace(/Bacon/g,'LASER VISION');
    $('body').html(strNewString);


//change font on click
     let panel = $(".panel")
     clicked = true;

     panel .click(function(){
       let black = "rgb(51, 51, 51)";
       let red = "rgb(255, 0, 0)";
       var theColorIs = $('h1').css("color");
      console.log("the color starts as:" + theColorIs)

      let title = $(".title a");

      console.log(title);

         if (clicked){
         $("h1").css({ 'color': 'red'});
         clicked  = false;
        }

        else {
        $("h1").css({ 'color': 'black'});
        clicked  = true;

        }

       })

   })

 })();
