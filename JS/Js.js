$(document).ready(function () {
  // Function to handle the click event on the button
  $(".resume").click(function () {
    alert("This function is note completed yet!");

    alert(
      "It will be completed as soon as possible\. Sorry for the inconvenience.",
    );
  });
  $(".blogs").click(function () {
    alert("This function is note completed yet!");
    alert("Blogs are coming soon!");
  });

  $(".menu-toggle").click(function () {
    $(this).toggleClass("open");
    $("header .wrapper").toggleClass("nav-open");
  });
});
