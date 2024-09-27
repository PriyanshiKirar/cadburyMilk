
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function loaderAnimation(){
  gsap.to('.loader',{
    y:-3000,
    duration:.5,
    delay:7.5,
    ease:'expo.Inout',


  })
}

loaderAnimation()




function page2Animation(){
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:'.page2',
      scrub:true,
      // pin:true,
    }
  });

  tl2.to('.page2left .h21left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same');

  tl2.to('.page2right .h21right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same');

  tl2.to('.page2left .h22left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same1');

  tl2.to('.page2right .h22right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same1');

  tl2.to('.page2left .h21left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same1');

  tl2.to('.page2right .h21right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same1');

  tl2.to('.page2left .h23left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same2');

  tl2.to('.page2right .h23right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same2');

  tl2.to('.page2left .h22left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same2');

  tl2.to('.page2right .h22right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same2');

  tl2.to('.page2left .h24left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same3');

  tl2.to('.page2right .h24right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same3');

  tl2.to('.page2left .h23left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same3');

  tl2.to('.page2right .h23right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same3');

  tl2.to('.page2left .h25left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same4');

  tl2.to('.page2right .h25right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same4');

  tl2.to('.page2left .h24left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same4');

  tl2.to('.page2right .h24right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same4');

  tl2.to('.page2left .h26left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same5');

  tl2.to('.page2right .h26right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same5');

  tl2.to('.page2left .h25left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same5');

  tl2.to('.page2right .h25right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same5');

  tl2.to('.page2left .h27left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same6');

  tl2.to('.page2right .h27right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same6');

  tl2.to('.page2left .h26left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same6');

  tl2.to('.page2right .h26right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same6');

  tl2.to('.page2left .h28left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same7');

  tl2.to('.page2right .h28right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same7');

  tl2.to('.page2left .h27left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same7');

  tl2.to('.page2right .h27right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same7');

  tl2.to('.page2left .h29left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same8');

  tl2.to('.page2right .h29right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same8');

  tl2.to('.page2left .h28left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same8');

  tl2.to('.page2right .h28right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same8');

  tl2.to('.page2left .h210left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same9');

  tl2.to('.page2right .h210right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same9');

  tl2.to('.page2left .h29left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same9');

  tl2.to('.page2right .h29right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same9');

  tl2.to('.page2left .h211left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same10');

  tl2.to('.page2right .h211right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same10');

  tl2.to('.page2left .h210left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same10');

  tl2.to('.page2right .h210right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same10');

  tl2.to('.page2left .h212left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same11');

  tl2.to('.page2right .h212right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same11');

  tl2.to('.page2left .h211left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same11');

  tl2.to('.page2right .h211right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same11');

  tl2.to('.page2left .h213left', {
    x: -100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same12');

  tl2.to('.page2right .h213right', {
    x: 100,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same12');

  tl2.to('.page2left .h212left', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same12');

  tl2.to('.page2right .h212right', {
    x: 0,
    duration: 1,
    // ease: 'power2.inOut',
  }, 'same12');
}

page2Animation();


function page3Animation(){
  document.querySelectorAll('.page3_img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
      var t4 = gsap.timeline();
      var h1 = document.querySelector(".page3_text h1");
      var index = img.getAttribute('data-index');
      var h2 = document.querySelector(`.page3_text h2[data-index="${index}"]`);

      // Check if spans are already created to avoid duplication for h1
      if (!h1.querySelector('span')) {
        var texh1 = h1.textContent;
        var splited = texh1.split("");
        var clutter = "";
        splited.forEach(function (elem) {
          clutter += `<span class='inline-block'>${elem === ' ' ? '&nbsp;' : elem}</span>`;
        });
        h1.innerHTML = clutter;
      }

      // Check if spans are already created to avoid duplication for h2
      if (h2 && !h2.querySelector('span')) {
        var texh2 = h2.textContent;
        var splited2 = texh2.split("");
        var clutter2 = "";
        splited2.forEach(function (elem) {
          clutter2 += `<span class='inline-block'>${elem === ' ' ? '&nbsp;' : elem}</span>`;
        });
        h2.innerHTML = clutter2;
      }

      // Ensure the animation runs only once per mouseenter
      if (!t4.isActive()) {
        t4.to(".page3_text h1 span", {
          y: -200,
          duration: 0.6,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.inOut" // Add easing
        }, "same");
   
        t4.to(`.page3_text h2[data-index="${index}"] span`, {
          y: '-90%',
          duration: 0.6,
          opacity: 1,
          stagger: 0.1,
          ease: "power2.inOut" // Add easing
        }, "same");
      }
    });

    img.addEventListener('mouseleave', () => {
      // Reset h1 and hide h2 on mouse leave
      gsap.to('.page3_text h1 > span', {
        duration: 0.6,
        y: 10,
        opacity: 1,
        stagger: 0.1,
        ease: "power2.inOut" // Add easing
      });

      var index = img.getAttribute('data-index');
      gsap.to(`.page3_text h2[data-index="${index}"] span`, {
        duration: 0.6,
        y: '120%',
        opacity: 0,
        stagger: 0.1,
        ease: "power2.inOut" // Add easing
      });
    });
  });

  document.querySelectorAll('.page3_img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
      const index = img.getAttribute('data-index');
      const color = getColorByIndex(index);
      document.querySelector('.page3').style.background = color;
    });

    img.addEventListener('mouseleave', () => {
      document.querySelector('.page3').style.background = '';
    });
  });

  function getColorByIndex(index) {
    const colors = {
      '1': '#B6A3D9',
      '2': '#F2D080',
      '3': '#D8B08E',
      '4': '#E3A874',
      '5': '#D3A8A1',
      '6': '#A694C9',
      '7': '#D88382',
      '8': '#B08A74',
      '9': '#A87B5C'
    };
    return colors[index] || 'white'; // default to white if no match
  }
}

page3Animation();


function page4Animation(){
  var tl4=gsap.timeline(
 {
  scrollTrigger:{
    trigger:'.page4',
    scroller:'body',
  }
 }
  );
  tl4.to('.container4',{
    x:'-60vw',
    duration:1,
    ease:'expo.Inout',
    delay:1,
  },'same')
 
 tl4.to('.page4 h1',{
  
  color:'white',
 duration:1,
 delay:1,
},'same')
  tl4.to('#one',{
    rotate:'-13deg',
    scale:.6,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same')
  tl4.to('#two',{
    rotate:'13deg',
    scale:1.1,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same')
 
  tl4.to('.container4',{
  
    ease:'expo.Inout',
  delay:1,
},'same')

  tl4.to('.container4',{
    x:'-110vw',
    duration:1,
    ease:'expo.Inout',
  delay:1,
  },'same2')
  tl4.to('#two',{
    rotate:'-4deg',
    scale:.6,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same2')
  tl4.to('#three',{
    rotate:'8deg',
    scale:1.1,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same2')
 
  
  tl4.to('#three',{
    rotate:'-13deg',
    scale:.6,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same3')
  tl4.to('.container4',{
    x:'-161vw',
    duration:1,
    ease:'expo.Inout',
    delay:1
  },'same3')
  
  tl4.to('#four',{
    rotate:'13deg',
    scale:'1.2',

    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same3')
 
    tl4.to('.page4 h1',{
      color:'#f7f2f5',
      duration:1,
      delay:1,
    },'same3')
  
}
page4Animation();

function page4Animation2(){

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.page5_container_box');

  function applyRandomRotation() {
      boxes.forEach(box => {
          const randomRotation = Math.random() * 20 - 10; // Generates a random number between -10 and 10
          box.style.transform = `rotate(${randomRotation}deg)`;
      });
  }

  applyRandomRotation();

  setInterval(applyRandomRotation, 3000); // 3000 milliseconds = 3 seconds
});
}
page4Animation2()
function page5Animation1(){
  var t = gsap.timeline();

var h1 = document.querySelector(".page5_text h1");
var texh1 = h1.textContent;
var splited = texh1.split("");
console.log(splited);
var clutter = "";
splited.forEach(function (elem) {
  clutter += `<span class='inline-block'>${elem === ' ' ? `&nbsp;` : elem}</span>`;
  console.log(clutter);

})
h1.innerHTML = clutter;
t.to(".page5_text h1>span", {
  y: -70,
  // opacity: 0,
  duration: .3,
  delay:.1,
  stagger: 0.1
})
}
page5Animation1();



function page5Animation() {
const container = document.querySelector('.container4');

function handleMouseMove(event) {
  const { clientX: x, clientY: y } = event;
  const { innerWidth: width, innerHeight: height } = window;
  const rotateY = ((x / width) * 2) - 1; // Very subtle 3D tilt (1 degree)
  const rotateX = ((y / height) * -2) + 1; // Very subtle 3D tilt (1 degree)

  gsap.to(container, {
    rotationY: rotateY,
    rotationX: rotateX,
    ease: 'power4.out', // Smooth easing
    duration: 1, // Smooth transition
    transformPerspective: 800,
    transformOrigin: 'center center'
  });
}

window.addEventListener('mousemove', handleMouseMove);
}

page5Animation();


function page6Animation() {
  var elements = document.querySelectorAll(".page6_right [id^='elem']");
  var images = document.querySelectorAll(".page6left_imgcontan [id^='img']");
  var zIndex = 1; // initial z-index value

  elements.forEach(function(element, index) {
      element.addEventListener("mouseenter", function() {
          // Bring the corresponding image to the top
          images[index].style.zIndex = zIndex++;
          
          // Animate the position
          gsap.to(images[index], {
              x: "-40vw",
              rotate:"5",
              duration:1,
              ease: "power2.inOut"
          });
      });

      element.addEventListener("mouseleave", function() {
          // Reset the z-index and animate back
          images[index].style.zIndex = "";
          gsap.to(images[index], {
              x: "0",
              rotate:"-5",
              duration: 0.9,
              ease: "power2.inOut"
          });
      });
  });
}

page6Animation();

function page7Animation(){
  gsap.to('.text7container h1',{
    y:-180,
    duration:.8,
    ease:'expo.Inout',
    scrollTrigger:{
      trigger:'.page7',
     
    }
  })

  var page7 =document.querySelector('.page7');
  page7.addEventListener('mousemove',function(){
    gsap.to('.page7coach',{
      opacity:1,
      duration:.5,
      ease:'expo.Inout',
      zIndex:9999,

    })
  })


  gsap.to('.page7 .img',{
    y:-150,
    duration:.5,
    scrollTrigger:{
      trigger:'.page7',
      scroller:'body',
      scrub:true
    }
  })
}


page7Animation();

function page8Animation(){
  gsap.to('.text8container h1',{
    y:-180,
    duration:.8,
    ease:'expo.Inout',
    scrollTrigger:{
      trigger:'.page8',
     
    }
  })

  gsap.to('.page8 img',{
    y:-190,
    duration:.5,
    scrollTrigger:{
      trigger:'.page8',
      scroller:'body',
      scrub:true
    }
  })

  var page8=document.querySelector('.page8');
  page8.addEventListener('mousemove',function(){
    gsap.to('.page8coach',{
      opacity:1,
      duration:.5,
      ease:'expo.Inout',
      zIndex:9999,

    })
  })

  gsap.to('.page8',{
    y:-700,
    duration:.5,
    scrollTrigger:{
      trigger:'.page7',
      pin:true,
      scrub:true,
    }
  })
}

page8Animation();




function themeEffect() {
  var h1 = document.querySelectorAll('.main h1');
  var p = document.querySelectorAll('.main p');
  var a = document.querySelectorAll('.main a'); // This is unused but kept in case needed
  var btn = document.querySelector('.nav .a');
  var main = document.querySelector('.main');
  var page7=document.querySelector('.main .page7');
  var pages = document.querySelectorAll('.main #page1, .main .page2, .main .page3, .main .page4, .main .page5, .main .page6, .main .page7, .main .page8');

  // Check if btn exists to avoid errors
  if (btn) {
    btn.addEventListener('click', function() {
      page7.style.background='var(--purple)';
      
      // Set background color for main and all pages
      main.style.background = 'var(--purple)';
      pages.forEach(page => {
        page.style.background = 'var(--purple)';
      });

      // Set text color for h1 and p
      h1.forEach(header => {
        header.style.color = 'var(--white)';
      });

      p.forEach(paragraph => {
        paragraph.style.color = 'var(--white)';
      });
    });
  }
}

themeEffect();