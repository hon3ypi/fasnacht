<template>
  <div class="grendtest">
    <h1>Grend Test</h1>
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
//Import
import mapboxgl from "mapbox-gl";
import contentfulClient from "@/module/contentful.js";

//Stuff woni noni wörkli chegge
export default {
  name: "Mapbox",
  data: function () {
    return {
      ort: [],
    };
  },
  mounted: async function () {
    let result = await contentfulClient.getEntries({
      content_type: "standort",
    });
    this.ort = result.items;
    /******************************************************/
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGVsZW5hYnJhbnQiLCJhIjoiY2toM2R5a2c2MDVrZTJ5bnlrc2hjZHZ2cCJ9.RlPsoq3S7aj-I_v9tPyRZA";
    const map = new mapboxgl.Map({
      container: this.$refs.container,
      style: "mapbox://styles/helenabrant/ckhni7klz0vqj19qwkyq6kg57",
      center: [
        this.ort[0].fields.location.lon,
        this.ort[0].fields.location.lat,
      ],
      zoom: 17,
    });

    map.on("load", async function () {
      map.addSource("fritschibrunnenrathaus", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [8.307607, 47.052581],
              [8.307368, 47.052638],
              [8.305787, 47.052182],
              [8.305872, 47.052057],
              [8.306515, 47.052192],
              [8.306593, 47.051869],
              [8.30591, 47.051748],
            ],
          },
        },
      });
      map.addLayer({
        id: "fritschibrunnenrathaus",
        type: "line",
        source: "fritschibrunnenrathaus",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#ED5250",
          "line-width": 8,
        },
      });

      /*********************************************************** */

      map.addSource("rathausjesuiten", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [8.30591, 47.051748],
              [8.306173, 47.050865],
              [8.305379, 47.050838],
              [8.304574, 47.050684],
            ],
          },
        },
      });
      map.addLayer({
        id: "rathausjesuiten",
        type: "line",
        source: "rathausjesuiten",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#F8BD4F",
          "line-width": 8,
        },
      });
    });
  },
};
</script>

-->CSS
<style>
@import url("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css");
.map {
  float: left;
  height: 50%;
  width: 100%;
  position: fixed;
  left: 0;
}

.test {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 500px;
}
</style>