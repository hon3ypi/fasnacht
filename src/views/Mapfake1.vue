<template>
  <div class="fritschikarte">
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
//Import
import mapboxgl from "mapbox-gl";
import contentfulClient from "@/module/contentful.js";
import fritschi from "../assets/fritschimarker.png";
import grend from "../assets/grendmarkersw.png";
import huereaff from "../assets/huereaffmarkersw.png";

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
      //console.log(result.item);
      let coordinates = result.items;

      /*******************************************************/
      map.addSource("fritschibrunnenrathaus", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [8.3076757, 47.0526],
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
          "line-color": "grey",
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
          "line-color": "grey",
          "line-width": 8,
        },
      });


      /* FRITSCHIBURNNEN ************************************************************/
      map.loadImage(fritschi, function (error, image) {
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
                  description:
                    'meh öber mech ond de tagwach erfahrsch <a href="../#/grend1">do</a>!',
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
      });
      /* RATHAUSTREPPE ************************************************************/
      map.loadImage(grend, function (error, image) {
        if (error) throw error;
        map.addImage("grend", image);

        //Point in Map
        map.addSource("point2", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                //Rathaustreppe
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [
                    coordinates[1].fields.location.lon,
                    coordinates[1].fields.location.lat,
                  ],
                },
                properties: {
                  title: coordinates[1].fields.ortsname,
                  description:
                    'weisch du scho gneug öber de fritschi, dassd zomer chonsch?<a href="../#/grend2"></a>',
                },
              },
            ],
          },
        });
        // Add a symbol layer
        map.addLayer({
          id: "point2",
          type: "symbol",
          source: "point2",
          layout: {
            "icon-image": "grend",
            // get the title name from the source's "title" property
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 1.25],
            "text-anchor": "top",
          },
        });
      });
      /* JESUITENPLATZ ************************************************************/
      map.loadImage(huereaff, function (error, image) {
        if (error) throw error;
        map.addImage("huereaff", image);

        //Point in Map
        map.addSource("point3", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                //Jesuitenplatz
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [
                    coordinates[2].fields.location.lon,
                    coordinates[2].fields.location.lat,
                  ],
                },
                properties: {
                  title: coordinates[2].fields.ortsname,
                  description:
                    'besch du scho mol ade tagwach gsi oder bede rathuusstäge gsi?<a href="../#/grend3"></a>',
                },
              },
            ],
          },
        });
        // Add a symbol layer
        map.addLayer({
          id: "point3",
          type: "symbol",
          source: "point3",
          layout: {
            "icon-image": "huereaff",
            // get the title name from the source's "title" property
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 1.25],
            "text-anchor": "top",
          },
        });
      });

      /***********************************************************************************/
      map.on("click", "point3", function (e) {
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
      map.on("mouseenter", "point3", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "point3", function () {
        map.getCanvas().style.cursor = "";
      });

      /***********************************************************************************/
      map.on("click", "point2", function (e) {
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
      map.on("mouseenter", "point2", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "point2", function () {
        map.getCanvas().style.cursor = "";
      });

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
  height: 50%;
  width: 100%;
  position: fixed;
  left: 0;
}


a
{
color: #ED5250;
text-decoration: underline;
font-weight:bold;
}
.mapboxgl-popup {
  min-width: 200px;
  max-width: 200px;
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
}
</style>