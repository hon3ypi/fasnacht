<template>
  <div class="route">
    <div ref="container" class="map"></div> 
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import contentfulClient from "@/module/contentful.js";

export default {
  name: "Mapbox",
  data: function () {
    return {
      ort: [],
    };
  },
  created: async function () {},
  mounted: async function () {
    let result = await contentfulClient.getEntries({
      content_type: "standort",
    });
    //console.log(result);
    this.ort = result.items;
    /******************************************************/
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGVsZW5hYnJhbnQiLCJhIjoiY2toM2R5a2c2MDVrZTJ5bnlrc2hjZHZ2cCJ9.RlPsoq3S7aj-I_v9tPyRZA";
    const map = new mapboxgl.Map({
      container: this.$refs.container,
      style: "mapbox://styles/helenabrant/ckhni7klz0vqj19qwkyq6kg57",
      center: [this.ort[0].fields.location.lon, this.ort[0].fields.location.lat],
      zoom: 17,
    });
    map.on("load", async function () {
    });
  },
};
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