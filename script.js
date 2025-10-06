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

gsap.from('#box2', {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    scale: 0.5,
    backgroundColor: 'white',
    borderRadius: "50%"

})
    */

gsap.from("h1", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.3,
});
