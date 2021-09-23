const sliders=document.querySelectorAll(".slider__item")
const arrowAfter=document.getElementById("after")
const arrowBefore=document.getElementById("before")
arrowBefore.addEventListener("click",()=>{
    changeId(-1)
    
})
arrowAfter.addEventListener("click",()=>{
    changeId(1)
    
})

const changeId=(op)=>{
    const currentId=Number(document.querySelector(".slider__item--show").dataset.id)
    id=currentId
    id+=op
    // console.log(id)
    // console.log(currentId)
    if(id===0 || id===sliders.length+1){
        id = id===0 ? sliders.length:1
    }
    sliders[currentId-1].classList.remove('slider__item--show')
    sliders[id-1].classList.add('slider__item--show')
        
    
    
    
}