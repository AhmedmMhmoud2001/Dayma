
  
header_home = ()=>{
 let header_home= document.getElementById("header_home");
    if(scrollY<120 ){
        header_home.classList.add("header_home");
    }
    else{
        header_home.classList.remove("header_home");
    }
}
