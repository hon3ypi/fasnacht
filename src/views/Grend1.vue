<template class="">
  <div class="grend1">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet" href="reset.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
      rel="stylesheet"/>
    <section class="fritschi parent">
      <p class="child5">
        <span class="blue">DU</span> hast
        <span class="blue">Bruder Fritschi</span> gewählt
      </p>
      <img src="../assets/BruderFritschi.svg" class="child2" />
      <h4 class="child3 blue">Bru<br />der <br />Frit<br />schi</h4>
      <span class="child4">
        <h5>Gute Wahl</h5>
        <p class="">
          Unübersehbar. Mit ehrfurchtgebietender gefurchter Holzmaske, langem
          Bart und im blauweissen Luzerner Staatsmantel. Einige sehen in ihm die
          mythische Symbolfigur eines heidnischen Fruchtbarkeitskults.
          Wahrscheinlicher ist, dass sein Vorbild ein «trinkfreudiger» Luzerner
          Landsknecht namens Fridolin (Friedrich, Fritschi) ist, der in der
          Schlacht von Ragaz 1446 am 6. März (Fridolinstag) beim Sieg der
          Eidgenossen über die Österreicher mitkämpfte. Heute eröffnet er mit
          der Fritschifamilie am Schmudo die Fasnacht. Folge ihm. Er wird dir
          Orte zeigen, die du noch nicht kennst.
        </p>
      </span>
    </section>

  <h4 class="yellow textTagwach">tagwach</h4>

  <section class="tagwach parent2">
      <div class="yellowbg child6">
        <h6 class="datumSchmudo">Kapellplatz, SchmuDO 5:00 Uhr</h6>
        <div class="bluebg">
          <video class="tagwach_urknall" controls>
          <source src="../assets/Urknall_Foetzelirege.mp4" />
        </video>
        </div>
        
      </div>
      <video class="tagwach_bruele">
        <source src="../assets/Bruele.mp4" controls ></video>

      <p class="child12">
        1-0-0- t-a-u-s-e-n-d-e- P-a-p-i-e-r- s-c-h-n-i-t-z-e-l
        z-e-r-s-c-h-n-i-t-t-e-n-e T-e-l-e-f-o-n-b-ü-c-h-e-r-n-
        r-e-g-n-e-t-e-s-a-n-d-e-r-T-a-g-w-a-c-h-e-a-u-f-d-e-n-K-a-p-e-l-l-p-l-a-t-z-h-i-n-u-n-t-e-r-.
      </p>
    </section>
    
    <a class="footer" href="../#/rathauskarte">WIITER UF DE CHARTE</a>

    <!--------------------- 3 Bilder am schluss --------------------->
    <div class="fritschi_bilder">
      <img class="fritschi_bild_1" src="../assets/fritschi_1.jpg" />
      <img class="fritschi_bild_2" src="../assets/fritschi_2.jpg" />
      <img class="fritschi_bild_3" src="../assets/fritschi_3.jpg" />
    </div>
   
  </div>
</template>

-->DAS ESCH FÖR S CSS
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap");
@import url("reset.css");

.footer {
  height: 10%;
  text-align: center;
  padding-top: 8%;
  color: #86ddb4;
  padding-bottom: 8%;
  font-size: 70px;
}
/*color*/
.blue {
  color: #4cc9f0;
  font-weight: bold;
}

.yellow {
  color: #f8bd4f;
}

.yellowbg {
  background-color: #f8bd4f;
  width: 100vw;
  height: 56.2275vw;
}

.red {
  color: #ed5250;
}

.green {
  color: #86ddb4;
}

.purple {
  color: #701abf;
}

.html {
  font-family: "Noto Sans", sans-serif;
  margin: 0%;
  padding: 0%;
}

h4 {
  text-align: left;
  font-size: 4em;
  text-transform: uppercase;
  line-height: 110%;
  font-weight: 900;
  margin-bottom: 0;
}

h5 {
  text-align: left;
  font-size: 2em;
  font-weight: 900;
  text-align: start;
  margin-bottom: 0%;
  margin-top: 5%;
}

h6 {
  text-align: left;
  padding-top: 5%;
  padding-left: 3%;
  font-size: 2em;
}

p {
  text-align: left;
  margin-top: 1%;
  font-size: 1.2em;
  font-weight: 600;
}

/* grid*/
.parent {
  display: grid;
  width: 100vw;
  height: auto;
  grid-template-columns: repeat(12, 8.33vw);
  grid-template-rows: repeat(5, 8.33vw);
  /*just for onepage ... how we do over multiple pages? just add more rows */
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow: hidden;
}

.child5 {
  grid-area: 2 / 2 / 4 / 6;
  margin-top: 0;
  align-self: flex-end;
  font-size: 50px;
  font-weight: bold;
}
.child2 {
  grid-area: 2 / 6 / 12 / 11;
  width: 100%;
  height: auto;
}

.child3 {
  grid-area: 2 / 9 / 7 / 13;
  margin-top: 4.15vw;
  font-size: 7em;
}

.child4 {
  grid-area: 7 / 2 / 4 / 6;   /*  VORHERgrid-area: 7 / 2 / 13 / 5;*/
  font-size: 20px;
  margin-bottom: 50px;
  margin-top: 470px;
}

.parent2 {
  display: grid;
  width: 100vw;
  height: auto;
  grid-template-columns: repeat(12, 8.33vw);
  grid-template-rows: repeat(45, 8.33vw);
  /*just for onepage ... how we do over multiple pages? just add more rows */
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.fritschi_bild_1 {
  position: absolute;
  width: 20%;
  height: auto;
  margin-left: 17%;
  margin-top: 5%;
}
.fritschi_bild_2 {
  position: absolute;
  width: 20%;
  height: auto;
  margin-left: 37%;
  margin-top: 30%;
}
.fritschi_bild_3 {
  position: absolute;
  width: 20%;
  height: auto;
  margin-left: 57%;
  margin-top: 5%;
}

img {
  overflow: hidden;
}

.child8 {
  background-color: red;
  grid-area: 13 / 3 / 18 / 8;
}

.child12 {
  grid-area: 20 / 3 / 45 / 11;
  font-size: 11vw;
  text-transform: capitalize;
  animation: blinker 3s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

img {
  overflow: hidden;
}
.tagwach {
  margin-top: 16.5vw;
}
.textTagwach {
  margin-bottom: -220px;
  align-self: flex-end;
  font-size: 70px;
  font-weight: bold;
  margin-left: 50px;
}
.datumSchmudo {
 /* VORHER grid-area: 5 / 2 / 8 / 6;*/
  color: white;
  margin-top: 10px;
  margin-left: 150px;
  font-size: 25px;
  font-weight: bold;
}
.tagwach_bruele {
  width:90vw;
  height:auto;
  margin-top: 45px;
  margin-left: -50px;  
}
.tagwach_urknall{
  /*padding-top:60vw;*/
  width: 90%;
  height: auto; 
  margin-top: 2.5vw;
  margin-left: 40px;
}
.bluebg {
  background-color: #4cc9f0;
  width: 70vw;
  height: 40vw;
  margin-top: 55vw;
  margin-left: 10vw;
}
.footer{
    color: #86ddb4;
    font-size:1vw;
}

</style>

-->DAS ESCH FÖR S JAVASCRIPT
<script>
export default {
  name: "Fritschi",
  data: function () {
    return {
      ort: [],
    };
  },
  mounted: async function () {},
};
</script>