<template>
<div class="grend2">   

<video class="grend_video" controls><source src="../assets/grend_frauen.mp4"></video>

 <section class="grend">
     <section class="vid-wrapper">
           <!-- <video class="grend_vid" src="assets/Rathaustreppen.mp4"></video> -->
        <p class="dialog">Dä, wo do verbi gloffe esch!</p>
        <img class="" src="">
        <p class="dialog">Do nomol!</p>
        
    <span class="dialog-wrap dialog"> <span class="">Das esch jo en cooli </span>
        <span class="nono"> Larva!</span></span>
    <span class="esch"> esch</span>
    <span class="tabu"> Tabu!</span>

        <div class="nono-words">
            <p class="nono">Waggis!</p>
            <p class="nono">Cortège!!</p>
            <p class="nono">Schnitzelbängg!</p>
            <p class="nono">Morgenschtraich!!</p>
        </div>
        <div class="grid_bilder">
            <img class="grend_1" src="../assets/grend_1.jpg">
            <img class="grend_2" src="../assets/grend_2.jpg">
            <img class="grend_3" src="../assets/grend_3.jpg">
            <img class="grend_4" src="../assets/grend_4.jpg">
            <img class="grend_5" src="../assets/grend_5.jpg">
            <img class="grend_6" src="../assets/grend_6.jpg">
        </div>
        <div class="layer">
            <img class="" src="">
            <p class="dialog">Dä, wo do verbi gloffe esch!</p>
            <p class="dialog">Ha grad es Déjà Vue.</p>
            <p class="dialog">Das esch jo en coole Grend!</p>
        </div>
      
            <h4>Guugge </h4>
            <p>Rathaustreppe</p>
            <video class="grend_gugge" controls><source src="../assets/Rathaustreppen.mp4"></video>
            <img class="gugge_1" src="../assets/grend_gugge_1.jpg">
            <img class="gugge_2" src="../assets/grend_gugge_2.jpg">
            <p class="treppen_text">Die Treppe ist stark belebt und regelmässig finden Aufführungen statt. Highlight für Guggenfans. </p>
            
    </section>  
    </section>

    <a class="footer" href="../#/jesuitenkarte">Wiiter uf de Chart</a>
   </div>
</template>

-->DAS ESCH FÖR S CSS
<style>
.footer {
  height: 10%;
  text-align: center;
  padding-top: 8%;
  color: #86ddb4;
  padding-bottom: 8%;
  font-size: 70px;
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap") ;
@import url("reset.css");
/*color*/
.blue{color:#4CC9F0;}
.yellow{color: #F8BD4F;}
.red{color:#ED5250;}
.green{color:#86DDB4;}
.purple{color:#701ABF;}

.html{
  font-family: 'Noto Sans', sans-serif;
}
 /*
.parent {
    display: grid;
    border: 1px solid red;
    width:100vw;
    height:auto;
    grid-template-columns: repeat(12, 8.33vw);
    grid-template-rows: repeat(5, 8.33vw);     /*just for onepage ... how we do over multiple pages? just add more rows */
    /*grid-column-gap: 0px;
    grid-row-gap: 0px;
    } */

.grend {
font-size: 60px;
text-align: center;
color: black;
    }
.nono-words {
font-size: 100px;
text-decoration-line: line-through;
text-align: center;
color: black;
    }

.grend_frauen {
    width: 100%;
    height: 100%;
}
.grid_bilder {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}
.grend_1 {
    grid-area: 1 / 1 / 2 / 2;
}
.grend_2 {
   grid-area: 1 / 2 / 2 / 3; 
}
.grend_3 {
   grid-area: 1 / 3 / 2 / 4; 
}
.grend_4 {
    grid-area: 2 / 1 / 3 / 2;
}
.grend_4 {
    grid-area: 2 / 2 / 3 / 3;
}
.grend_4 {
  grid-area: 2 / 3 / 3 / 4;  
}
.grend_gugge {
    width: 100%;
    height: 100%;
}
.gugge_1 {
    width: 25%;
    height: 25%;
    margin-top: 10%;
    margin-left: 10%;
}
.gugge_2 {
    width: 50%;
    height: 50%;
    margin-top: -5%;
    margin-left: 40%;
}
.treppen_text {
    text-align: left;
    margin-top: -20%;
    margin-left: 10%;
    font-size: 60%;
    font-weight: 600;
}
</style>

-->DAS ESCH FÖR S JAVASCRIPT
<script>

export default {
  name: "Grend",
  data: function () {
    return {
      ort: [],
    };
  },
  mounted: async function () {

  }
}
</script>
