const count = 50;
const stage = document.querySelector(".stage");

for(let i=0;i<count;i++){
    setTimeout(makeSnow, 100*i);
}

function makeSnow(){
    let span = document.createElement("span");
    stage.appendChild(span);

    gsap.set(span, {
        left: gsap.utils.random(0,stage.offsetWidth),
        top:-30,
        scale: gsap.utils.random(.7,1,.1),
        opacity: gsap.utils.random(.5,1,.1)
    });

    gsap.to(span, {
        y: stage.offsetHeight*1.1 ,
        x: gsap.utils.random(-30,30,5),
        duration: gsap.utils.random(4,6,.2),
        ease: Power1.easeIn,

        onComplete:()=>{
            span.remove();
            makeSnow();
        }
    })
}