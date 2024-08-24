// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger); // Register the plugin


//  const t1 =gsap.timeline();
// // // t1.from(".snacks",{yPercent:-100})
//  t1.from(".coffees",{backgroundColor:"white"})
//  .from(".coffees",{backgroundColor:"white"})
 

// // ScrollTrigger.create({
// //     animation:t1,
// //     trigger:".snacks",
// //     start:"0% 0%",
// //     end:"100% 0%",
// //     scrub:2,
// //     pin:true,
// //     anticipatePin:1,
// //     markers:true
// // });


// // Add background color animation to the timeline
// .to("#main", {
//     // rotate:360,
//     scrollTrigger:{
//         trigger:".snacks",
//         scroller:"body",
//         scrub:2,
//         pin:true,
//         anticipatePin:1,
//         markers:true,
//         onEnter: () => gsap.to('.coffees', {
//             backgroundColor: "green",
//             duration: 5
//         })
//     }
// });

// document.getElementById("main").addEventListener("mousemove",(val) =>{
//     gsap.to("#cursorfollower",{
//         x:val.x,
//         y:val.y,
//         duration:0.6
//     })
// })

import 'remixicon/fonts/remixicon.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// // Define the background color changes for each section
const sections = [
    { trigger: ".snacks",childtrigger: ".snacks .right", color: "#FAE1EE" }, // Example color for Snacks section
    { trigger: ".coffees",childtrigger: ".coffees .right", color: "#D3D6F0" }, // Example color for Coffees section
    { trigger: ".both",childtrigger: ".both .right", color: "#FFEAE0" }    // Example color for Both section
];


// Loop through each section and create a ScrollTrigger for background color change
sections.forEach(section => {
    ScrollTrigger.create({
        trigger: section.trigger,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
        onEnter: () => {gsap.to("#main", { backgroundColor: section.color, duration: 2, overwrite: "auto" }),
        gsap.to(section.childtrigger, { opacity:"1",rotate:"10",y:"12vh", duration: 1, overwrite: "auto" })
    },
        onEnterBack: () => {gsap.to("#main", { backgroundColor: section.color, duration: 2, overwrite: "auto" }),
        gsap.to(section.childtrigger, { opacity:"1",scale:"0.9",rotate:"0",y:"0vh", duration: 1, overwrite: "auto" })
    },
        // markers: true // Optional: shows the start and end markers for debugging
    });
});


// Cursor follower animation
document.getElementById("main").addEventListener("mousemove", (val) => {
    gsap.to("#cursorfollower", {
        x: val.x,
        y: val.y,
        duration: 0.6
    });
});