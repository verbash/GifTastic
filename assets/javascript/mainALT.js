
// I ran into trouble here with scope possibly.
    // the buttons work and the gif animation works
    // but as soon as the field is entered and submitted all functionality stops
    //??// "use strict";

        //DECLARATIONS//-------------------------------

// main array for buttons
    var topics = ["frozen movie","octonauts","ukulele","cartoon ghosts","pizza","disney princesses"];
    var results;

       //FUNCTIONS//-------------------------------------

// function for making buttons
    function buttonLoop() {
        $("#button-div").empty();
        for (var j=0; j < topics.length; j++) {
            var div = $("<button>").html(topics[j])
            .attr("data-favorite", topics[j]);
            $("#button-div").append(div); 
            };
        };
// function to create divs, <img> & add animation attributes
function createGifs() {
       
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
// function for grabbing Gifs from API    
function gifGrabber() {
    var favorite = $(this).attr("data-favorite");
    console.log(this);
    var queryURL = ("https://api.giphy.com/v1/gifs/search?api_key=OrEQ97QKAY3T5NEkUZmSITbmXrA19XHq&q=" 
                    + favorite  + "&limit=10&offset=0&rating=G&lang=en");
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            results = response.data
            console.log (results +"results")
            return results;
            });
    };
// function for animating Gifs
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
};
        // MAIN Automation & CLICK EVENTS ------------------------
        
// Initial make buttons
    buttonLoop();

// click event to get GIFs from GIPHY API
  $("button").on("click", function() {

        cal;
        createGifs();

  });

// click handler for form submit
 $("form").submit(function(Event) {
    Event.preventDefault();
    var newFav = $("#newFavorite").val().trim();
    console.log(newFav);
    topics.push(newFav);
    buttonLoop();
      });

// click event handler for gifs
$(".gif").on("click", gifAnimator());


    

    



    //having trouble getting "this" to equal the gif class div that is clicked!?!
 





