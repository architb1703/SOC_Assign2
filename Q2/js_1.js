function filter_func(){
    var comp = document.getElementById("filter").value;
    var data = document.getElementsByClassName("data_elmt");
    for (var i=0; i<data.length; i++){
        if(String(data[i].getElementsByTagName("td")[0].innerHTML).toLowerCase().indexOf(comp.toLowerCase())==-1){
            data[i].style.display="none";
        }
        else{
            data[i].style.display="";
        }
        
    }   
}