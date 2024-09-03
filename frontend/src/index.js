import gsap from 'gsap';

$(".scramble").scramble(2500, 20, "alphabet", true);
var timeline = gsap.timeline();
   timeline.to(".loading",{
        opacity:0,
        delay:2.5
    })
    .to(".loader",{
        opacity:0,
        duration:1,
        ease:"expo.easeInOut"
    })
    .to(".loader",{
        y:"-100%",
        duration:1,
        onComplete: () => {
            // Navigate to a new URL when the animation completes
            window.location.href = "src/htmls/explore.html";
          }
    },"up")