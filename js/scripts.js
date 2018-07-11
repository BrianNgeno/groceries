$(document).ready(function() {
  $("#hide").click(function (event){

    var rawList = $("input#list").val();
    var lists=[];
    lists = rawList.toUpperCase().split(",");
    lists.sort();
    lists.forEach(function(list){
    $("#list-items").append("<li>"+list+"</li>");

    $("#form-showing").hide();

  });
  event.preventDefault();
});

});
