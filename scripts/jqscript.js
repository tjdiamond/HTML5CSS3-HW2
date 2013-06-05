$(document).ready(function(){
   $("#colorChangeInput").change(function() {
      $("td:first-child").css("backgroundColor", $("#colorChangeInput").val());
	  $("th").css("backgroundColor", $("#colorChangeInput").val());
   });
});