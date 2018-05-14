$(function() {
    $(".devour-burger").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var eaten = $(this).data("eaten");
  
      var devouredBurger = {
        devoured: true
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burgerName").val().trim(),
        devoured: false
      };
  
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });
  