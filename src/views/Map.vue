<template>
  <div class="mapbox">
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
      zoom: 16,
    });
    map.on("load", async function () {
      let result = await contentfulClient
      .getEntries({
        content_type: "standort"
      });
      let coordinates = result.items;
      // Add an image to use as a custom marker
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          
          //Point in Map
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  //Jesuitenplatz
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [coordinates[1].fields.location.lon, coordinates[1].fields.location.lat],
                  },
                  properties: {
                    title: coordinates[1].fields.ortsname,
                  },
                },
                {
                  //Fritschibrunnen
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [coordinates[2].fields.location.lon, coordinates[2].fields.location.lat],
                  },
                  properties: {
                    title: coordinates[2].fields.ortsname,
                },
                },
                {
                  //Rathaustreppe
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [coordinates[3].fields.location.lon, coordinates[3].fields.location.lat],
                  },
                  properties: {
                    title: coordinates[3].fields.ortsname,
                  },
                },
              ],
            },
          });
          // Add a symbol layer
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
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