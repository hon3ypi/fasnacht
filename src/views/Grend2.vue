<template>

<div class="parent1">
    <img class="kid1" src="../assets/Grend.svg">

      <p class="kid2">Der Grend do</p>
      <p class="kid3">Dä, wo do verbi gloffe esch!</p>

    </div>

  

<div class="grend2">   

<video class="grend_video" controls><source src="../assets/grend_frauen.mp4"></video>






 <section class="grend">




     <section class="vid-wrapper">
       
        <img class="" src="">
        <p class="dialog001">Do nomol ene!</p>
         <br/>
        
    <span class="dialog002"> <span class="">Das esch jo en cooli </span>
        <span class="txtthrough"> Larva!</span></span>
    <span class="esch"> esch</span>
    <span class="tabu"> Tabu!</span>

        <div class="nono-words">
            <p class="nono1">Waggis!</p>
            <p class="nono2">Cortège!!</p>
            <p class="nono3">Schnitzelbängg!</p>
            <p class="nono4">Morgenschtraich!!</p>
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
            <p class="dialog003">Dä, wo do verbi gloffe esch!</p>
            <p class="dialog004">Ha grad es Déjà Vue.</p>
             <br/>
            <p class="dialog005">Das esch jo en coole Grend!</p>
             <br/>
        </div>
      
            <p class="ort">Guugge bei der Rathaustreppe</p>
            <video class="grend_gugge" controls><source src="../assets/Rathaustreppen.mp4"></video>
            <img class="gugge_1" src="../assets/grend_gugge_1.jpg">
            <img class="gugge_2" src="../assets/grend_gugge_2.jpg">
            <p class="treppen_text">Die Treppe ist stark belebt und regelmässig finden Aufführungen statt. Highlight für Guggenfans. </p>
            
    </section>  
     <br/>
        <a class="footer" href="../#/jesuitenkarte">WIITER UF DE CHARTE</a>
    </section>


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
  text-transform: uppercase;
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
text-transform: uppercase;
text-decoration: ;
    }
.nono-words {
font-size: 100px;
padding-left:8vw;
padding-bottom:3vw;
text-decoration-line: line-through;
text-align: center;
color: black;
    }

 .txtthrough   {  text-decoration: line-through;}


.parent1 {
  display: grid;
  font-size: 4.4vw;
  text-align: left;
  text-transform: uppercase;
  width: 100vw;
  height: auto;
  grid-template-columns: repeat(12, 8.33vw);
  grid-template-rows: repeat(12, 8.33vw);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.kid1 {
  grid-area: 1 / 6 / 5 / 12;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 4.4vw;
  text-align: left;
}

.kid2 {
  text-align: left;
  font-weight: 800;
  font-size:4.4vw;
  grid-area: 2 / 2 / 4 / 3;
}

.kid3 {
  grid-area: 6 /2 / 8 / 9;
  font-weight: 800;
    font-size:4.4vw;

}
.esch{
    padding-right:8vw;
    padding-left:69vw;
}
.tabu{
    font-size:17.6vw;
    text-align:right;
    padding-right:8vw
}


.dialog001 , .dialog003{padding-left:8%;
    padding-right:8%;
    padding-top:8%;
    font-size:4.4vw;
        font-weight:800;

    text-align:left;

}
.dialog002, .dialog004{padding-left:8%;
    padding-right:8%;
    padding-top:8%;
    font-size:4.4vw;
    font-weight:800;
    text-align:right;

}

.dialog005{padding-left:8%;
    padding-right:8%;
    padding-top:8%;
    font-size:4.4vw;
        font-weight:800;

    text-align:right;

}


.grend_frauen {
    width: 100%;
    height: 100%;
}

/* grid 2*/
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
    margin-top: 10%;
    padding-left: 8%;
    font-weight: 400;
    font-size:3.4vw;
}
.ort{margin-left:8vw;
font-size:3.2vw;
font-weight:600;
color:#86DDB4
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
