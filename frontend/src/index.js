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
        duration:1
    },"up")
    .to(
        ".donutAnimateGrp",
        {
        opacity:1,
        delay:-1.7,
        ease:"Expo.easeInOut"
        },
        "donutName"
    )
    .to(
        "#dotBg",
        {
            opacity:1,
            delay:-1.8,
            ease:"Expo.easeInOut"
        },
        "donutName"
    )
    .to(
        "#donut",
        {
            opacity:1,
            scale:2,
            delay:-1.4,
            ease:"Expo.easeInOut",
            rotationY:"+=15",
            duration:3,
            rotationX:"+=15",
            rotationZ:"+=15",
        },
        "up"
    )

    .from(
        "#letterC, #letterU, #letterS, #letterT, #letterO, #letterM, #letterC2, #letterA, #letterF, #letterF2, #letterE",
        {
            opacity:0,
            duration:1,
            scale:0,
            top:"40%",
            left:"47%"
        },
        "up"
    )

    var timeline2 = gsap.timeline();
    document.querySelectorAll("#explore").forEach(
        (event)=>{
            event.addEventListener("click",()=>{
                timeline2.to(
                    "#letterC",
                    {
                        left:"-15%",
                        top:"-15%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#letterU",
                    {
                        left:"-30%",
                        top:"0%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#letterS",
                    {
                        left:"-45%",
                        top:"180%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#letterT",
                    {
                        left:"-30%",
                        top:"130%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#letterO",
                    {
                        left:"-30%",
                        top:"0%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#letterM",
                    {
                        left:"-30%",
                        top:"0%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#letterC2",
                    {
                        right:"-15%",
                        top:"0%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#letterA",
                    {
                        right:"-30%",
                        top:"0%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#letterF",
                    {
                        right:"-45%",
                        top:"0%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#letterF2",
                    {
                        right:"-90%",
                        top:"0%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#letterE",
                    {
                        left:"-180%",
                        top:"0%",
                        scale:2,
                        rotate:"25deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(
                    "#donut",
                    {
                        width:"80vw",
                        top:"-10%",
                        rotate:"360deg",
                        ease: "ease.out",
                        duration:1,
                        opacity:0,
                        delay:"-1"
                    })
                .to(
                    "#dotBg",{
                        opacity:0
                    },
                    "donutdisappear"
                )
                .to(".donutAnimateGrp",{
                    opacity:0
                })
            })
        }
    )

    let explore = document.getElementById("explore");
    explore.addEventListener("click",(e)=>{
        setTimeout(() => {
            window.location.replace("/src/htmls/main.html");
        }, 1200);
    })