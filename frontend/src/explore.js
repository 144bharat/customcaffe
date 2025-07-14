import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

let sectionCount = 0;

document.fonts.ready.then(() => {
  gsap.set(".banner .content", { opacity: 1 });
  let splitBannerTitle = SplitText.create(".banner .title", {
    type: "chars",
    aria: "hidden",
  });

  gsap.from(splitBannerTitle.chars, {
    opacity: 0,
    duration: 0.5,
    ease: "sine.out",
    stagger: 0.1,
  });
});

gsap.to(".snacks .right", {
  scrollTrigger: {
    trigger: ".snacks",
    start: "top top",
    end: "bottom 50%",
    scrub: true,
  },
  opacity: 0,
  ease: "power1.out",
});
gsap.to(".coffees .right", {
  scrollTrigger: {
    trigger: ".coffees",
    start: "top top",
    end: "bottom 50%",
    scrub: true,
  },
  opacity: 0,
  ease: "power1.out",
});

// Background change: Snacks
ScrollTrigger.create({
  trigger: ".snacks",
  start: "top 50%",
  end: "top top",
  scrub: true,
  onEnter: () => {
    sectionCount++;
    setBackgroundColor("hsl(328.8, 71.4%, 93.1%)");
  },
  onLeaveBack: () => {
    sectionCount--;
    setBackgroundColor("transparent");
  },
});

// 🔵 Background change: Coffees
ScrollTrigger.create({
  trigger: ".coffees",
  start: "top 50%",
  end: "top top",
  scrub: true,
  onEnter: () => {
    sectionCount++;
    setBackgroundColor("hsl(233.8, 49.2%, 88.4%)");
  },
  onLeaveBack: () => {
    sectionCount--;
    setBackgroundColor("hsl(328.8, 71.4%, 93.1%)");
  },
});

// Helper function to update background
function setBackgroundColor(color) {
  document.documentElement.style.setProperty("--bg-color", color);
  if (sectionCount == 0) {
    console.log("LANDING");
  }
  if (sectionCount == 1) {
    console.log("SNACKS");

    document.fonts.ready.then(() => {
      gsap.set(".snacks .left", { opacity: 1 });
      let split = SplitText.create(".snacks .normaltext", {
        type: "words",
        aria: "hidden",
      });

      gsap.from(split.words, {
        opacity: 0,
        duration: 1,
        ease: "sine.out",
        stagger: 0.1,
      });
    });
  }
  if (sectionCount == 2) {
    console.log("COFFEES");

    document.fonts.ready.then(() => {
      gsap.set(".coffees .left", { opacity: 1 });
      let split = SplitText.create(".coffees .normaltext", {
        type: "words",
        aria: "hidden",
      });

      gsap.from(split.words, {
        opacity: 0,
        duration: 1,
        ease: "sine.out",
        stagger: 0.1,
      });
    });
  }
}
