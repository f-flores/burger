 // ================================================================================
//
// File name: burger_scripts.js
// Description: Front end logic.
//
// ================================================================================

$(document).ready(function() {
  const MAX_BURGERCHARS = 70;
  var toggleState = "enabled";

  console.log("in burger_script.js");

  // -------------------------------------------------------------------------
  // helper functions
  //

  // validation routines
  function checkBurgerInput() {
    var isValid = true;

    if ($("#bu").val().length < 2 || $("#bu").val().length > MAX_BURGERCHARS) {
      $("#burger-error").html("<p class=\"error-msg\">Invalid name must be between 2 and " + MAX_BURGERCHARS + " characters long.</p>");
      isValid = false;
    } else {
      $("#burger-error").html("");
    }

    return isValid;
  }


  function checkBurgerMenu() {
    var isValid = true;

    $(".opt-selected").each(function() {
      console.log(".opt-select val: " + $(this).val());
      if ($(this).val() === null) {
        $("#burger-error").html("<p class=\"error-msg\">Please select burger option or type in burger name (at least 2 characters).</p>");
        isValid = false;
      } else {
        $("#burger-error").html("");
      }
    });

    return isValid;
  }

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
    var newBurger,
        burgerName;

    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // validate form
    function formValidated() {
      var isValidBurgerName = checkBurgerInput(),
          isBurgerSelected = checkBurgerMenu();

      console.log("isValidBurgerName: " + isValidBurgerName);
      console.log("isBurgerSelected: " + isBurgerSelected);

      return isValidBurgerName || isBurgerSelected;
    }


    if (formValidated()) {
      burgerName = $("#bu").val().
      trim();
      if (burgerName === "") {
        burgerName = $(".opt-selected").val();
      }

      newBurger = {"burger_name": burgerName};
      newBurger.devoured = 0;

      console.log("in create-form submit button: ", newBurger.burger_name, newBurger.devoured);

      // post data to api
      $.post("/api/burgers", newBurger, function(data) {
        console.log("created new burger: " + data);
        // Reload the page to get the updated list
        location.reload();
      });
    }

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

  // --------------------------------------------------------------------------------------
  // toggle another
  //
  $("#toggle-another").on("click", function() {
    toggleState = $(this).attr("data-toggle");

    console.log("toggleState: " + toggleState);
    // event.preventDefault();

    if (toggleState === "enabled") {
      $(this).attr("data-toggle", "disabled");
      $(".devoured-tbl .burger-button").hide();
    } else {
      $(this).attr("data-toggle", "enabled");
      $(".devoured-tbl .burger-button").show();
    }
  });

});