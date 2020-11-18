<template>
  <div class="mapbox">
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "Map",
  mounted: async function() {
    mapboxgl.accessToken = "pk.eyJ1IjoiaG9uZXlwaSIsImEiOiJja2gzZjZ4c2owbG5sMnBwY2h3ODcxejM5In0.1yvnDVALnpYli5NUNLj-iw";
    const map = new mapboxgl.Map({
      container: this.$refs.container,
      style: "mapbox://styles/honeypi/ckhm37dyc0vw31ar03zqade6u",
      center: [8.307675, 47.0526],
      zoom: 15
    });
    map.on("load", async function(){

    });
  }
}


</script>

//Designer
<style>
@import url("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css");

.map {
  float: left;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
} 

</style>