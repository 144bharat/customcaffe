// import "remixicon/fonts/remixicon.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);


// //Navigation bar animation of arriving each item one after the other from  -ve y axis.

// gsap.fromTo(".staggerEffect",{opacity:0,yPercent:-50}, {
//   duration: 1,
//   yPercent:0,
//   opacity: 1,  
//   stagger: 0.6,
//   scrub:true,
//   force3D: true
// });
// let sectionCount = 0;

// document.fonts.ready.then(() => {
//   gsap.set(".banner .content", { opacity: 1 });
//   let splitBannerTitle = SplitText.create(".banner .title span", {
//     type: "chars",
//     aria: "hidden",
//   });
//     let splitBannerSubTitle = SplitText.create(".banner .title p", {
//     type: "words",
//     aria: "hidden",
//   });

//   gsap.from(splitBannerTitle.chars, {
//     opacity: 0,
//     duration: 0.5,
//     ease: "sine.out",
//     stagger: 0.1,
//   });
//   gsap.from(splitBannerSubTitle.words, {
//     opacity: 0,
//     duration: 0.5,
//     ease: "sine.out",
//     stagger: 0.1,
//   });

// });

// gsap.to(".snacks .right", {
//   scrollTrigger: {
//     trigger: ".snacks",
//     start: "top top",
//     end: "bottom 50%",
//     scrub: true,
//   },
//   opacity: 0,
//   ease: "power1.out",
// });

// gsap.to(".coffees .right", {
//   scrollTrigger: {
//     trigger: ".coffees",
//     start: "top top",
//     end: "bottom 50%",
//     scrub: true,
//   },
//   opacity: 0,
//   ease: "power1.out",
// });

// // Background change: Snacks
// ScrollTrigger.create({
//   trigger: ".snacks",
//   start: "top 50%",
//   end: "top top",
//   scrub: true,
//   onEnter: () => {
//     sectionCount++;
//     setBackgroundColor("hsl(328.8, 71.4%, 93.1%)");
//   },
//   onLeaveBack: () => {
//     sectionCount--;
//     setBackgroundColor("transparent");
//   },
// });

// // 🔵 Background change: Coffees
// ScrollTrigger.create({
//   trigger: ".coffees",
//   start: "top 50%",
//   end: "top top",
//   scrub: true,
//   onEnter: () => {
//     sectionCount++;
//     setBackgroundColor("hsl(233.8, 49.2%, 88.4%)");
//   },
//   onLeaveBack: () => {
//     sectionCount--;
//     setBackgroundColor("hsl(328.8, 71.4%, 93.1%)");
//   },
// });

// // Helper function to update background
// function setBackgroundColor(color) {
//   document.documentElement.style.setProperty("--bg-color", color);
//   if (sectionCount == 0) {
//     console.log("LANDING");
//   }
//   if (sectionCount == 1) {
//     console.log("SNACKS");

//     document.fonts.ready.then(() => {
//       gsap.set(".snacks .left", { opacity: 1 });
//       let split = SplitText.create(".snacks .normaltext", {
//         type: "words",
//         aria: "hidden",
//       });

//       gsap.from(split.words, {
//         opacity: 0,
//         duration: 0.4,
//         ease: "sine.out",
//         stagger: 0.1,
//         once:true
//       });
//     });
//   }
//   if (sectionCount == 2) {
//     console.log("COFFEES");

//     document.fonts.ready.then(() => {
//       gsap.set(".coffees .left", { opacity: 1 });
//       let split = SplitText.create(".coffees .normaltext", {
//         type: "words",
//         aria: "hidden",
//       });

//       gsap.from(split.words, {
//         opacity: 0,
//         duration: 0.4,
//         ease: "sine.out",
//         stagger: 0.1,
//         once:true
//       });
//     });
//   }
// }




import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const follower = document.getElementById("cursorfollower");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

// Mouse move event updates target position
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smoothly update follower position
gsap.ticker.add(() => {
  posX += (mouseX - posX) * 0.15;
  posY += (mouseY - posY) * 0.15;

  gsap.set(follower, {
    x: posX,
    y: posY,
  });
});


// Animate nav items from top (no scrub)
gsap.fromTo(".staggerEffect", { opacity: 0, yPercent: -50 }, {
  duration: 1,
  yPercent: 0,
  opacity: 1,
  stagger: 0.6,
  ease: "power2.out",
  force3D: true
});

// Animate banner title/subtitle once fonts are ready
document.fonts.ready.then(() => {
  gsap.set(".banner .content", { opacity: 1 });

  const splitTitle = new SplitText(".banner .title span", { type: "chars", aria: "hidden" });
  const splitSubtitle = new SplitText(".banner .title p", { type: "words", aria: "hidden" });

  gsap.from(splitTitle.chars, {
    opacity: 0,
    duration: 0.5,
    ease: "sine.out",
    stagger: 0.1
  });
  gsap.from(splitSubtitle.words, {
    opacity: 0,
    duration: 0.5,
    ease: "sine.out",
    stagger: 0.1
  });
});

// Fade out .right sections on scroll
[".snacks", ".coffees"].forEach(selector => {
  gsap.to(`${selector} .right`, {
    scrollTrigger: {
      trigger: selector,
      start: "top top",
      end: "bottom 50%",
      scrub: true
    },
    opacity: 0,
    ease: "power1.out"
  });
});

// Lazy-loaded word animation setup
const lazyWordAnimation = (selector, textSelector) => {
  let split = null;
  ScrollTrigger.create({
    trigger: selector,
    start: "top 60%",
    once: true,
    onEnter: () => {
      gsap.set(`${selector} .left`, { opacity: 1 });

      split = new SplitText(`${selector} ${textSelector}`, {
        type: "words",
        aria: "hidden"
      });

      gsap.from(split.words, {
        opacity: 0,
        duration: 0.4,
        ease: "sine.out",
        stagger: 0.1
      });
    }
  });
};

lazyWordAnimation(".snacks", ".normaltext");
lazyWordAnimation(".coffees", ".normaltext");

// Background color triggers
const backgroundTransitions = [
  { selector: ".snacks", color: "hsl(328.8, 71.4%, 93.1%)" },
  { selector: ".coffees", color: "hsl(233.8, 49.2%, 88.4%)" }
];

backgroundTransitions.forEach((item, index) => {
  ScrollTrigger.create({
    trigger: item.selector,
    start: "top 50%",
    end: "top top",
    scrub: true,
    onEnter: () => setBackgroundColor(item.color),
    onLeaveBack: () => {
      const prevColor = backgroundTransitions[index - 1]?.color || "transparent";
      setBackgroundColor(prevColor);
    }
  });
});

function setBackgroundColor(color) {
  document.documentElement.style.setProperty("--bg-color", color);
}


// Helper function to handle SplitText + hover animations
function animateWordsOnHover(selector) {
  const split = new SplitText(selector, { type: "words", aria: "hidden" });

  split.words.forEach(word => {
    word.addEventListener("mouseenter", () => {
      gsap.to(follower, {
        scale: 7,
        backgroundColor: 'white',
        color: 'black',
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(word, {
        scale: 2,
        padding: 10,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    word.addEventListener("mouseleave", () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: 'black',
        color: 'white',
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(word, {
        scale: 1,
        padding: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
}

// Apply to both sections
animateWordsOnHover(".snacks .normaltext");
animateWordsOnHover(".snacks .title");
animateWordsOnHover(".coffees .normaltext");
animateWordsOnHover(".coffees .title");