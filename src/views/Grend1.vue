<template class="">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet">
  <div class="grend1 ">

   <section class="fritschi parent">

    <p class="child1"><span class="blue">DU</span> hast <span class="blue">Bruder Fritschi</span> gewählt</p>
    <h4 class="child3 blue">Bru<br>der <br>Frit<br>schi</h4>
    <img src="Fritschi.svg" class="child2" >


   <span class="para-wrapper child4">
    <h5>Gute Wahl</h5>
<p class=""> Unübersehbar. Mit ehrfurchtgebietender gefurchter Holzmaske, langem Bart und im blauweissen Luzerner Staatsmantel. Einige sehen in ihm die mythische Symbolfigur eines heidnischen Fruchtbarkeitskults. Wahrscheinlicher ist, dass sein Vorbild ein «trinkfreudiger» Luzerner Landsknecht namens Fridolin (Friedrich, Fritschi) ist, der in der Schlacht von Ragaz 1446 am 6. März (Fridolinstag) beim Sieg der Eidgenossen über die Österreicher mitkämpfte.
    Heute eröffnet er mit der Fritschifamilie am Schmudo die Fasnacht. Folge ihm. Er wird dir Orte zeigen, die du noch nicht kennst.  </p>
</span>
</section> 

<section class="tagwach">

<h4 class="yellow">tagwach</h4>
<div class="wrapper-video">
    <h6 class="">Kapellplatz, SchmuDO 5 Uhr</h6>
<video src="" class="xl-vid"></video>
</div>
<p class="">brüele</p>
<p class="">Urknall</p>

<video src="" class="m-vid"></video>
<video src="" class="s-vid"></video>
<video src="" class="s-vid"></video>
<video src="" class="s-vid"></video>

<p class="">1-0-0- t-a-u-s-e-n-d-e- P-a-p-i-e-r- s-c-h-n-i-t-z-e-l z-e-r-s-c-h-n-i-t-t-e-n-e T-e-l-e-f-o-n-b-ü-c-h-e-r-n- r-e-g-n-e-t-e-s-a-n-d-e-r-T-a-g-w-a-c-h-e-a-u-f-d-e-n-K-a-p-e-l-l-p-l-a-t-z-h-i-n-u-n-t-e-r-.
</p>
<img class ="" src="">

</section>
  </div>
</template>

-->DAS ESCH FÖR S CSS
<style>
/*color*/
.blue{color:#4CC9F0;}
.yellow{color: #F8BD4F;}
.red{color:#ED5250;}
.green{color:#86DDB4;}
.purple{color:#701ABF;}
 
.html{
  font-family: 'Noto Sans', sans-serif;
}


/* grid*/
.parent {
    display: grid;
    border: 1px solid red;
    width:100vw;
    height:auto;
    grid-template-columns: repeat(12, 8.33vw);
    grid-template-rows: repeat(5, 8.33vw);     /*just for onepage ... how we do over multiple pages? just add more rows */
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    }
  .child1 { grid-area: 2 / 2 / 3 / 6; 
  border:solid 1px blue;
  }

  .child2{    grid-area: 2 / 6 / 8 / 11;
  width:100%;
  height:auto;
  border:solid 1px blue;
}
.child3 { grid-area: 2 / 9 / 7 / 13;
border:solid 1px blue;
    margin-top:4.15vw;


    }
.child4 { grid-area: 7 / 2 / 13 / 7; 
border:solid 1px blue;
}


    h4{text-align: left;
    font-size: 4em;
        text-transform:uppercase;
            line-height: 110%;
            font-weight:800;



    
    }
    h5{text-align: left;
    font-size:2em;
    font-weight: 900;
    text-align: start;
    margin-bottom: 0%;
    margin-top:0%;}
    h6{text-align: left;}
    p{text-align: left;
    margin-top:1%;
    font-size: 1.2em;
    font-weight:600;}
    img{}
    
    

   /*Videos difffernt sizes multiple of grid*/ 
.xl-vid{}
.m-vid{}
.s-vid{}

.video-wrapper{}
.para-wrapper{}

</style>

-->DAS ESCH FÖR S JAVASCRIPT
<script>
</script>
