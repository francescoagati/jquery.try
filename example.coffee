$(document).ready ->      
  $("#pippa").html("sss")
  .html("sssss")
  .try("html","sss24")
  .try("html2","sss25")
  .try("html","sss26")

  $("#pippa").html("sss")
  .tryCatch("html2","hello",$("#pippa2"))
  .html("hello pippa 2")
