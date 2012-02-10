(function() {
  $(document).ready(function() {
    $("#pippa").html("sss").html("sssss")["try"]("html", "sss24")["try"]("html2", "sss25")["try"]("html", "sss26");
    $("#pippa").html("sss").tryCatch("html2", "hello", $("#pippa2")).html("hello pippa 2");
    return $("#pippa").html("sss").tryTap(function() {
      console.log($(this).html());
      return console.log($(this).html2());
    }).html("See you taptry");
  });
}).call(this);
