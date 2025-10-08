const initialPath = `M 10 100 Q 750 100 1400 100`

const finalPath = `M 10 100 Q 750 100 1400 100`

const string = document.querySelector("#string")

string.addEventListener("mouseenter", function(){
    console.log("mouse was moved")
})


string.addEventListener("mousemove", function(mouseData){
    path = `M 10 100 Q ${mouseData.x} ${mouseData.y} 1400 100`
    
    gsap.to("svg path", {
        attr: {d: path},
        duration: 0.2,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    })
})
