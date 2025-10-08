const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(event){
    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        duration:0.6,
        
        // ease: "back.out"
    })
})

imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 5,
        backgroundColor: "#ffffff8a"
    })
})

imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"
    })
})