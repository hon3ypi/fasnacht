<template>

    

  <div class="grend3">
  <div class="dialogwrapper parent">


    <p class="kid1">Hey Huerenaff <br> Wie gohts?</p>

    <p class="kid2">Danke guet ond der Huerenaff?</p>
    <p class="kid3  ">Los Mou Huerenaff. Gömmer es Kafi Huerenaff
      go näh?</p>
    <p class=" kid4">Jo Huerenaff. Das esch e rüüdig güeti Idee. </p>
  </div>

  <div id="getraenke_holen.mp4" class="xl_vid ">
<!--<my-video :sources="video.sources" :options="video.options"></my-video>-->
  </div>
<div class="parent2">
  <p class= " kid5 dialog ">«Gärn en Tee.»</p>

    <p class=" kid6">«Nor wenn du Gönnerin wersch!»</p>
    <p class=" kid7">«Onbedengt.»</p>
    <p class=" kid8">«Super, Ond was fÖr en Tee döffs sii – met oder ohni Schuss?» </p>
    <p class=" kid9">«Met Schuss dänk, s esch d Fasnacht!» </p>
    <p class=" kid10">«Das freut mech – was för eine denn?» </p>

</div>


<div class="spacer"></div>

<div class="side-scrolling-wrapper">

  <div class="side-scrolling-title">
    <div class="row center-xs">
          <div class="col-xs-12 whitebg">
            <h1 class="fadeInUp">Die Getränkekarte</h1>
          </div>
        </div>
  </div>

  <div class="container">
    <section class="panel">
      <div class="row">
        <div class="col-xs-12">
          <div class="margin-75px"></div>
          <div class="row">
            <div class="col-xs-6">
              <img class="drink" src="@/assets/text_kafi_huerenaff.svg" alt="">
            </div>

            <div class="col-xs-6">
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="panel">
      <div class="row">
        <div class="col-xs-12">
          <div class="margin-75px"></div>
          <div class="row">
            <div class="col-xs-6">
              <img class="drink" src="@/assets/text_Holdrio.svg" alt="">
            </div>

            <div class="col-xs-6">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="panel">
      <div class="row">
        <div class="col-xs-12">
          <div class="margin-75px"></div>
          <div class="row">
            <div class="col-xs-6">
              <img class="drink" src="@/assets/text_Mönze-zwätschge.svg" alt="">
            </div>

            <div class="col-xs-6">
            
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="panel">
      <div class="row">
        <div class="col-xs-12">
          <div class="margin-75px"></div>
          <div class="row">
            <div class="col-xs-6 drink">
              <img class="" src="@/assets/text_Häxetee.svg" alt="">
            </div>

            
          </div>
        </div>
      </div>
    </section>

    
  </div>

</div>

<div class="spacer"></div>
<!--dialog3-->

<!--

    <div class="wrap-it">
      <p class="dialog">“Gärn es Tee,eins mit Schnaps, ich bin ja nicht krank.”</p>
      <img src="" class="">
    </div>

    <div class="wrap-it">
      <p class="dialog">""</p>
      <img src="" class="">
    </div>

    <div class="wrap-it">
      <p class="dialog">“Mis Holdrio esch Schletzfertig!”</p>
      <img src="" class="">
    </div>

    <div class="wrap-it">
      <p class="dialog">“Mis Holdrio esch fasch fertig!”</p>
      <img src="" class="">
    </div>
    <div class="wrap-it">
      <p class="dialog">“”</p>
      <img src="" class="">
    </div>
    <div class="wrap-it">
      <p class="dialog">“Mis Holdrio esch trochulär!”</p>
      <img src="" class="">
    </div>
    <video class="m-vid" src=""></video>
    <video class="m-vid" src=""></video>


    <div class="wrapper-video">

      <video class="xl-vid" src=""></video>
      <div class="drinkscore">
        <img src="" class="">
        <img src="" class="">
        <img src="" class="">

        <img src="" class="">
        <img src="" class="">
        <img src="" class="">

        <img src="" class="">
        <img src="" class="">
        <img src="" class="">
      </div>
    </div>

    <video class="s-vid" src=""></video>
    <video class="s-vid" src=""></video>
    <video class="m-vid" src=""></video>

    <p class="">ende </p>
    <span class="names">
      <p class="">Wanda </p>
      <p class="">Michelle </p>
      <p class="">Helena </p>
    </span>

    -->
  </div>
</template>

-->DAS ESCH FÖR S CSS
<style>

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap") ;
@import url("reset.css");
/*color*/
  .blue {
    color: #4CC9F0;
  }

  .yellow {
    color: #F8BD4F;
  }

  .red {
    color: #ED5250;
  }

  .green {
    color: #86DDB4;
  }

  .purple {
    color: #701ABF;
  }

  html {
    font-family: 'Noto Sans', sans-serif;
  }
  .p{
    color:black;
    background-color:none;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 4.4vw;
  }

  .parent {

    display: grid;
    border: 1px solid red;
    width: 100vw;
    height: auto;
    grid-template-columns: repeat(12, 8.33vw);
    grid-template-rows: repeat(20, 8.33vw);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  
.drink{margin:10px;};

 

  .kid1 {
     text-transform: uppercase;
    font-weight: 900;
    font-size: 4.4vw;
    grid-area: 2 / 2 / 4 / 9;
    border: solid 1px red;
    

  }

  .kid2 {
    text-align: right;

    grid-area: 5 / 6/ 6/ 12;
  }

  .kid3 {
    grid-area: 8 / 2 / 10 / 9;
  }

  .kid4 {
    text-align: right;

    grid-area: 13 / 6/ 15 / 12;
  }

.parent2 {
position:relative;
    display: grid;
    border: 1px solid red;
    width: 100vw;
    height: auto;
    grid-template-columns: repeat(12, 8.33vw);
    grid-template-rows: repeat(12, 8.33vw);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .kid5 {
    grid-area: 2 / 2 / 4 / 9;
    border: solid 1px red;
  }

  .kid6 {
    text-align: right;

    grid-area: 5 / 6/ 6/ 12;
  }

  .kid7 {
    grid-area: 8 / 2 / 10 / 9;
  }

  .kid8 {
    text-align: right;
    grid-area: 10 / 6/ 15 / 12;
  }


 .kid9 {
    grid-area: 16 / 2 / 20 / 9;
  }

  .kidb {
    text-align: right;

    grid-area: 20 / 5/ 24 / 12;
  }


  .xl_vid {
    width: 100vw;
    height: auto;
    min-height: 56.25vw;
    background-color: #86DDB4;
  }




/*Horizontal scroll*/

.side-scrolling-wrapper {
  position: relative;
    width: 100%;
    height: auto;
    padding: 20px 0px 0px 0px;
    overflow: hidden;
    display: block;
}

.side-scrolling-title {
  background: #ccc;
}

.container {
  width: 200%;
  height: 60vh;
  display: flex;
  flex-direction:row;
  flex-wrap: nowrap;
  padding: 0px;
  overflow: hidden;
  justify-content: stretch;
}

.panel {
  width: 33vw;
  height: auto;
  text-align: left;
  color: white;
  position: relative;
  overflow: hidden;
}
  img {
    max-width: 100vw;
    width:100%;
    height: auto;
    display: block;
  }

  p {
    font-weight: 300;
  }

  .step-number {
    font-size: 24px;
    line-height: 27px;
    color: blue;
    font-weight: 800;
  }
  



.spacer {
  margin-top:100px;
  position: relative;
  display: block;
  background: #F8BD4F;
  height: 50vh;
}
.fadeInUp{
  background-color: white;
  
}

</style>
 
-->DAS ESCH FÖR S JAVASCRIPT
<script>

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default{
  name: "grend3", 
  mounted: function(){
    gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".container .panel");
console.log(sections)
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".side-scrolling-wrapper",
    pin: true,
    start: "top +=10px",
    markers: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      duration: {min: 0.2, max: 0.3},
      delay: 0
    },
    // Base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + (document.querySelector(".container").offsetWidth / 3.4)
  }
});

  }
}
/*
import myVideo from 'vue-video'
export default {
    data () {
        return {
            video: {
                sources: [{
                    src: '/assets/getraenke_holen.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.6,
                }
            }
        }
    },
    components: {
        myVideo
    }
}*/








</script>
