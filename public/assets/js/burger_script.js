// ================================================================================
//
// File name: burger_scripts.js
// Description: Front end logic.
//
// ================================================================================

$(document).ready(function() {
  console.log("in burger_script.js");

  // -------------------------------------------------------------------------------
  // update
  //
  $(".change-devoured").on("click", function(event) {
    var id = parseInt($(this).data("id"),10);
    var newDevour = $(this).data("newdevour");
    var newDevourState = {"devoured": newDevour};

    event.preventDefault();

    console.log("in change-devoured: id: ", id);
    console.log("in change-devoured: devoured: ", newDevour);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      "type": "PUT",
      "data": newDevourState
    }).then(function() {
        console.log("changed devoured to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      });
  });

  // --------------------------------------------------------------------------------
  // post
  //
  $(".create-form").on("submit", function(event) {
    var newBurger = {
      "burger_name": $("#bu").val().
      trim(),

      "devoured": $("[name=devoured]:checked").val().
      trim()
    };

    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("in create-form submit button: ", newBurger.burger_name, newBurger.devoured);

    // post data to api
    $.post("/api/burgers", newBurger, function(data) {
      console.log("created new burger: " + data);
      // Reload the page to get the updated list
      location.reload();
    });

  });

  // ---------------------------------------------------------------------------------------
  // delete
  //
  $(".delete-burger").on("click", function(event) {
    var id = parseInt($(this).data("id"),10);

    console.log("in delete burger, id: " + id);

    event.preventDefault();

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {"type": "DELETE"}).
      then(function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      });
  });
});

    // Send the POST request.
/*     $.ajax("/api/burgers", {
      "type": "POST",
      "data": newBurger
    }).then(() => {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
    }); */