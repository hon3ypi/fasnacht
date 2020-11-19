<template class="">
<div>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet">
<div class="home boxen">
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

  </div>
    <p class="titel">Luzerner Fasnacht</p>
  </div>


</template>

-->DAS ESCH FÖR S CSS
<style>
html{
  font-family: 'Noto Sans', sans-serif;
}

.boxen { 
display: grid; 
border: 1px solid red;
grid-template-columns: repeat(12, 1fr); 
grid-template-rows: repeat(12, 1fr); 
grid-column-gap: 0px;
grid-row-gap: 0px; 
}
.box1 { grid-area: 1 / 1 / 4 / 5; 
border: 1px solid red;
background-color: aqua;
} 
.box2 { grid-area: 1 / 5 / 4 / 9; border: 1px solid red;
} 
.box3 { grid-area: 1 / 9 / 4 / 13;
border: 1px solid red;
 } 
.box4 { grid-area: 4 / 1 / 7 / 5; border: 1px solid red;
} 
.box5 { grid-area: 4 / 5 / 7 / 9; border: 1px solid red;
} 
.box6 { grid-area: 4 / 9 / 7 / 13; border: 1px solid red;
} 
.box7 { grid-area: 7 / 1 / 10 / 5;border: 1px solid red;
 } 
.box8 { grid-area: 7 / 5 / 10 / 9;border: 1px solid red;
 } 
.box9 { grid-area: 7 / 9 / 10 / 13;border: 1px solid red;
 } 
.box10 { grid-area: 10 / 1 / 13 / 5;border: 1px solid red;
 } 
.box11 { grid-area: 10 / 5 / 13 / 9; border: 1px solid red;
} 
.box12 { grid-area: 10 / 9 / 13 / 13; border: 1px solid red;
} 
.titel { 
  grid-area: 4 / 5 / 7 / 9; 
  font-size: 73px;
  color: black;
  } 
</style>

-->DAS ESCH FÖR S JAVASCRIPT
<script>
</script>
