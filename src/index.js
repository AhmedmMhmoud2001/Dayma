
  
header_home = ()=>{
    console.log(scrollY)
 let header_home= document.getElementById("header_home");
    if(scrollY<120 ){
        header_home.classList.add("header_home");
    }
    else{
        header_home.classList.remove("header_home");
    }
}
let i=1;
main_carousel_button_bottom = () => {
    let carouselExampleCaptions= document.getElementById("carouselExampleCaptions")
    console.log(scrollY)
}