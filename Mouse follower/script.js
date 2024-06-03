// function mousefollower(){
//     window.addEventListener("mousemove",function(dets){
//         document.querySelector(".mousefollower").style.transform = `translate(${dets.clientX}px, ${dets.client}px)`;
//     })
// }

// mousefollower();



//in gsap

var mousefollow = document.querySelector(".mousefollower");
var maindiv = document.querySelector(".maindiv");
maindiv.addEventListener("mousemove", function(dets){
    gsap.to(mousefollow,{
        x:dets.x,
        y:dets.y
    })
})

var textElements = document.querySelectorAll(".text");
textElements.forEach(function(textElements) {
    textElements.addEventListener("mouseenter", function(){
        gsap.to(mousefollow,{
            scale:3,
            duration:0.2
        })
    });

    textElements.addEventListener("mouseleave", function(){
        gsap.to(mousefollow, {
            scale: 1,
            duration: 0.2
        });
    });
    
});