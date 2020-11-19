<template>
  <div class="grendtest">
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
//Import
import mapboxgl from "mapbox-gl";
import contentfulClient from "@/module/contentful.js";
import fritschi from "../assets/fritschimarker.png";


//Stuff woni noni wörkli chegge
export default {
  name: "Mapbox",
  data: function () {
    return {
      ort: [],
    };
  },
  /********************************************************/
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
      zoom: 16,
    });

    /******************************************************/
    map.on("load", async function () {
      let result = await contentfulClient.getEntries({
        content_type: "standort",
      });
      console.log(result.item);
      let coordinates = result.items;

      /*****************************************************/
      map.loadImage(
        fritschi,
        function (error, image) {
          if (error) throw error;
          map.addImage("fritschi", image);

          //Point in Map
          map.addSource("point1", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  //Fritschibrunnen
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [
                      coordinates[3].fields.location.lon,
                      coordinates[3].fields.location.lat,
                    ],
                  },
                  properties: {
                    title: coordinates[3].fields.ortsname,
                    description: '<a href="../#/grend1">Ech verzell der öppis dröbert...</a>',
                  },
                },
              ],
            },
          });
          // Add a symbol layer
          map.addLayer({
            id: "point1",
            type: "symbol",
            source: "point1",
            layout: {
              "icon-image": "fritschi",
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
   

      /***********************************************************************************/
      map.on("click", "point1", function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
        console.log("en String");

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on("mouseenter", "point1", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "point1", function () {
        map.getCanvas().style.cursor = "";
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

.mapboxgl-popup {
  min-width: 200px;
  max-width: 400px;
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
}
</style>