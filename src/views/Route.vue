<template>
  <div class="route">
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
//Import
import mapboxgl from "mapbox-gl";
import contentfulClient from "@/module/contentful.js";
import getCoordinatesFromGpxFile from "@/module/gpx-utilities.js";

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
    //console.log(result);
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
      zoom: 16,
    });

    map.on("load", async function () {
      let result = await contentfulClient.getEntries({
        content_type: "track",
      });

      console.log(result);

      let coordinates = await getCoordinatesFromGpxFile(
        result.items[0].fields.gpxtrack.fields.file.url // a link to you gpx file in Contentful
      );

      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: coordinates,
          },
        },
      });
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "red",
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
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
}
</style>