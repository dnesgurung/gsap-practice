/*
gsap.to('#box1', {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    scale: 0.5,
    backgroundColor: 'white',
    borderRadius: "50%"

})
*/

// gsap.to('#box2', {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: 'white',
//     borderRadius: "50%",
//     scale: 0.5,
//     repeat: -1,
//     yoyo: true

// })
    

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   delay: 1,
//   y: 30,
//   stagger: 0.3,
//   repeat: -1,
// });

// ***** Timeline *****

// const tl = gsap.timeline();

// tl.to("#box1", {
//     x:1200,
//     rotate: 360,
//     delay: 1
// })

// tl.to("#box2", {
//     x: 900,
//     duration: 1.5
// })

// tl.to('#box3', {
//     x: 400,
//     rotate: 180,
// })

const tl = gsap.timeline();

tl.from("h2", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})
tl.from("h4", {
    y: -20,
    opacity: 0,
    duration: 1,
   stagger: 0.3
})
tl.from("h1", {
    y:20,
    opacity:0,
    duration: 0.5,
    scale: 0.2,
   
})