<template class="template">
<div class="boxen">
  <h1>Home</h1>

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="reset.css">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box4"></div>
    <div class="box5"></div>
    <div class="box6"></div>
    <div class="box7"></div>
    <div class="box8"></div>
    <div class="box9"></div>
    <div class="box10"></div>
    <div class="box11"></div>
    <div class="box12"></div>
        <p class="titel">Luzerner Fasnacht</p>

  </div>


</template>

-->DAS ESCH FÖR S CSS
<style>
html{
  font-family: 'Noto Sans', sans-serif;
}

.boxen { position:relative;
display: grid; 
grid-template-columns: repeat(12, 1fr); 
grid-template-rows: repeat(12, 1fr); 
grid-column-gap: 0px;
grid-row-gap: 0px; 
width:100vw;
height:100vh;
  overflow: hidden;


}
.box1 { grid-area: 1 / 1 / 4 / 5; 
background-color: #4CC9F0;

} 
.box2 { grid-area: 1 / 5 / 4 / 9; 
background-color: #7400b8;
} 
.box3 { grid-area: 1 / 9 / 4 / 13;
background-color: #ed5250;
 } 
.box4 { 
  grid-area: 4 / 1 / 7 / 5; 
  background-color: #7400b8;
} 
.box5 { 
  grid-area: 4 / 5 / 7 / 9; 
  background-color: #ed5250;

} 
.box6 { 
  grid-area: 4 / 9 / 7 / 13; 
  background-color: #f8bd4f;
} 
.box7 { 
  grid-area: 7 / 1 / 10 / 5;
  background-color: #ed5250;
 } 
.box8 { 
  grid-area: 7 / 5 / 10 / 9;
  background-color: #f8bd4f;
 } 
.box9 { 
  grid-area: 7 / 9 / 10 / 13;
  background-color: #86ddb4;
 } 
.box10 { 
  grid-area: 10 / 1 / 13 / 5;
  background-color: #f8bd4f;
 } 
.box11 { 
  grid-area: 10 / 5 / 13 / 9; 
  background-color: #86ddb4;
} 
.box12 { 
  grid-area: 10 / 9 / 13 / 13; 
  background-color: #4CC9F0;
} 
.titel { 
  font-size: 12vw; /* man kann font size nicht ändern */
  color: white;
  grid-area: 4/5/7/9;
  text-align: center;

  } 
.template{width:100vw;
height:100vh;
  overflow: hidden;
  scroll-behavior:none;
}
  
</style>

-->DAS ESCH FÖR S JAVASCRIPT
<script>
</script>
