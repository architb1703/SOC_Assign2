$(document).ready(function(){
$("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#data tr.data_elmt").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
});