
// I ran into trouble here with scope possibly.
    // the buttons work and the gif animation works
    // but as soon as the field is entered and submitted all functionality stops
    //??// "use strict";

        //DECLARATIONS//-------------------------------

// main array for buttons
    var topics = ["frozen movie","octonauts","ukulele","cartoon ghosts","pizza","disney princesses"];
    // var results;

       //FUNCTIONS//-------------------------------------

// function for making buttons
    function buttonLoop() {
        $("#button-div").html("");
        for (var j=0; j < topics.length; j++) {
            
            var div = $("<button>").html(topics[j])
            .attr("data-favorite", topics[j])
            .attr("class","button");
            $("#button-div").append(div); }
            return;
            };
      
// function to create divs, <img> & add animation attributes
function createGifs() {
       console.log("createGif results" + results)
    for (var i = 0; i < results.length; i++) {
      var favoriteDiv = $("<div>");
      var p = $("<p>");
      p.text(results[i].rating);
      var favoriteImage = $("<img>");
      favoriteImage.attr("src", results[i].images.fixed_height_still.url);
      favoriteImage.attr("data-still", results[i].images.fixed_height_still.url);
      favoriteImage.attr("data-animate", results[i].images.fixed_height.url);
      favoriteImage.attr("data-state", "still");
      favoriteImage.attr("class","gif");
      favoriteDiv.append(favoriteImage);
      favoriteDiv.append(p);
      $('#gifs-appear-here').prepend(favoriteDiv);
        };
  };
        // MAIN Automation & CLICK EVENTS ------------------------
        
// Initial make buttons
    buttonLoop();

// click handler for form submit
$("#find-gif").on("click",function(event) {
    event.preventDefault();
    var newFav = $("#newFavorite").val().trim();
    console.log(newFav);
    topics.push(newFav);
    buttonLoop();
    return;
      });

// click event to get GIFs from GIPHY API
  $("#button-div").on("click","button", function() {
    var favorite = $(this).attr("data-favorite");
    console.log(favorite);
    var queryURL = ("https://api.giphy.com/v1/gifs/search?api_key=OrEQ97QKAY3T5NEkUZmSITbmXrA19XHq&q=" 
                    + favorite  + "&limit=10&offset=0&rating=G&lang=en");
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response.data);
            results = response.data
            console.log (results +"results")
            createGifs();
            });
    });




// click event handler for gifs


$("#gifs-appear-here").on('click', '.gif', 
function gifAnimator() {
    console.log ("gifffffer")
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

    



    //having trouble getting "this" to equal the gif class div that is clicked!?!
 





