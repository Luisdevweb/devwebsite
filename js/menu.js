const BtnMenu=document.querySelector(".menu")
const NavBar=document.querySelector(".navbar")

BtnMenu.addEventListener("click",(e)=>{
   NavBar.classList.add("navbar--translate")
    //console.log(e.target)
 })

window.addEventListener("click",(e)=>{
    if(NavBar.classList.contains("navbar--translate") && e.target != NavBar && e.target!= BtnMenu){
        NavBar.classList.remove("navbar--translate")
    }
})
