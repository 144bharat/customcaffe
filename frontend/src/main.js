import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger); // Register the plugin
    // ---------------------Donut animation -- Image Sequencing --------------------------------

    const canvas = document.querySelector("canvas");
    const canvapencil = canvas.getContext("2d");
    const frames = {
        currIndex:0,
        maxIndex:73
    }
    let imagesLoaded = 0;
    const Images = [];
    function preLoadFrames(){
        for(let i=0;i<=frames.maxIndex;i++)
        {
            let imgUrl = `/assets/images/donut-frames/7033923-uhd_3840_2160_25fps_${i.toString().padStart(3,"0")}.jpg`;
            // console.log(imgUrl+"\n");

            const img = new Image();
            img.src = imgUrl;
            img.onload = () => {
                imagesLoaded++;
                if(imagesLoaded === frames.maxIndex)
                {
                    // loadImage(frames.currIndex);
                    startAnimation();
                }
            }
            // console.log(img);
            
            Images.push(img);
        }
    }

    function loadImage(index){
        if(index>=0 && index <=frames.maxIndex){
            const img = Images[index];
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const scaleX = canvas.width/img.width;
            const scaleY = canvas.height/img.height;

            const scale = Math.max(scaleX,scaleY);

            const newWidth = img.width*scale;
            const newHeight = img.height*scale;
            
            const offsetX = (canvas.width - newWidth)/2;
            const offsetY = (canvas.height - newHeight)/2;
            
            //clear previous image from canvas.
            canvapencil.clearRect(0,0,canvas.width,canvas.height);
            canvapencil.imageSmoothingEnabled = true;
            canvapencil.imageSmoothingQuality = "high";
            canvapencil.drawImage(img,offsetX,offsetY,newWidth,newHeight);

            frames.currIndex = index;
        }
    }
    
    function startAnimation(){
        var t3 = gsap.timeline({
            scrollTrigger:{
                trigger: ".donutanimate",
                start: "top top",
                scrub: 2,
                markers: true
            }
        })
        t3.to(frames,{
            currIndex:frames.maxIndex,
            onUpdate:function() {
                  loadImage(Math.floor(frames.currIndex));              
            }
        })
    }
    
    preLoadFrames();