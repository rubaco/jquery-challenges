/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){



  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    let teamoneShoot_Button = $("#teamone-shoot")
    let teamoneNumShots_Label = $("#teamone-numshots")
    let teamOneNumShots_Counter = 0;
    let teamOneRandom = 0;
    let goalCounter = 0;
    let teamOneGoalScore = $("#teamone-numhits")

    let teamTwoShoot_Button = $("#teamtwo-shoot")
    let teamTwoNumShots_Label = $("#teamtwo-numshots")
    let teamTwoNumShots_Counter = 0;
    let teamTwoRandom = 0;
    let goalCounter2 = 0;
    let teamTwoGoalScore = $("#teamtwo-numhits")

    let reset_Button = $("#reset")
    let reset_Label = $("#num-resets")
    let reset_Counter = 0;




    var teamOne = $('#teamone-shoot');


  teamoneShoot_Button .click(function(){
      teamOneNumShots_Counter  = teamOneNumShots_Counter + 1;
      console.log(teamOneNumShots_Counter );


      teamoneNumShots_Label.text(teamOneNumShots_Counter);

      let teamOneRandomFloor = Math.floor(Math.random() * 2) + 1;
      if (teamOneRandomFloor == 1){
         $("body").css("background-color","blue");
        console.log("score!!")
        goalCounter = goalCounter + 1;
        console.log("total goal: " + goalCounter);
        teamOneGoalScore.text(goalCounter);
      }

      else if (teamOneRandomFloor == 2){
        console.log("No score!!")
        $("body").css("background-color","white");
      }

    })

    teamTwoShoot_Button .click(function(){
        teamTwoNumShots_Counter  = teamTwoNumShots_Counter + 1;
        console.log(teamTwoNumShots_Counter);

        teamTwoNumShots_Label.text(teamTwoNumShots_Counter);

        let teamTwoRandomFloor = Math.floor(Math.random() * 2) + 1;
        if (teamTwoRandomFloor == 1){
           $("body").css("background-color","green");
          console.log("team 2 score!!");
          goalCounter2 = goalCounter2 + 1;
          console.log("total goal: " + goalCounter2);
          teamTwoGoalScore.text(goalCounter2);
        }

        else if (teamTwoRandomFloor == 2){
          console.log("Team 2 No score!!")
          $("body").css("background-color","white");
        }

      })

      reset_Button .click(function(){
          reset_Counter  = reset_Counter + 1;
          reset_Label.text(reset_Counter)
          console.log(reset_Counter);
          goalCounter = 0;
          goalCounter2 = 0;
          teamOneNumShots_Counter = 0;
          teamTwoNumShots_Counter = 0;
          teamOneGoalScore.text(teamOneNumShots_Counter);
          teamTwoGoalScore.text(teamTwoNumShots_Counter);


          teamoneNumShots_Label.text(teamOneNumShots_Counter );
          teamTwoNumShots_Label.text(teamTwoNumShots_Counter);

        })

    /**
     * Gets the text from the element for you
     * @return {String}
     */
    function getText() {
      return $('#save-me').val();
    }





  })

})();
