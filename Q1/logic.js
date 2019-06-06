var img_urls=["https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
                "https://image.freepik.com/free-vector/geometric-medical-concept-white-background_1017-15462.jpg",
                "https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg",
                "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://i2.wp.com/media.boingboing.net/wp-content/uploads/2018/05/cool-background1.png?w=1192&ssl=1",
                "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]
var counter=0;
var len=0;
function on_display(){
    document.getElementById("id1").setAttribute("src", img_urls[counter++]);
    document.getElementById("id2").setAttribute("src", img_urls[counter++]);
    document.getElementById("id3").setAttribute("src", img_urls[counter++]);
    if(counter==3){
        document.getElementById("left_btn").style.visibility="hidden";
    }
    if(img_urls.length%3==0){
        len = img_urls.length;
    }
    else{
        len = img_urls.length + (3-(img_urls.length%3));
    }
}
function right_change(){
    for(var i=1; i<=3; i++){
        document.getElementById("id"+i).setAttribute("src", img_urls[counter++]);   
    }
    document.getElementById("left_btn").style.visibility="visible";
    if(counter==len){
        document.getElementById("right_btn").style.visibility= "hidden";
    };
    console.log(counter);
}
function left_change(){
    document.getElementById("id3").setAttribute("src", img_urls[--counter-3]);
    document.getElementById("id2").setAttribute("src", img_urls[--counter-3]);
    document.getElementById("id1").setAttribute("src", img_urls[--counter-3]);
    document.getElementById("right_btn").style.visibility= "visible";
    if(counter==3){
        document.getElementById("left_btn").style.visibility="hidden";
    }
    console.log(counter);
}