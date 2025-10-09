function splitTheText() {
  const h1 = document.querySelector("h1");
  const h1Text = h1.textContent;

  const splitText = h1Text.split("");

  let clutter = "";
  splitText.forEach((e, index) => {
     
    const halfValue = splitText.length / 2;

   if(index < halfValue){
    clutter += `<span class="firstHalf">${e}</span>`
   } else {
     clutter += `<span class="secondHalf">${e}</span>`
   }
 
  });

  h1.innerHTML = clutter;
}

splitTheText();

gsap.from("h1 .firstHalf", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})

gsap.from("h1 .secondHalf", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    opacity: 0,
    stagger: -0.15
})