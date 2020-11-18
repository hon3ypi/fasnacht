<template>
  <div class="mapbox">
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "Map",
  mounted: async function () {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaG9uZXlwaSIsImEiOiJja2gzZjZ4c2owbG5sMnBwY2h3ODcxejM5In0.1yvnDVALnpYli5NUNLj-iw";
    const map = new mapboxgl.Map({
      container: this.$refs.container,
      style: "mapbox://styles/honeypi/ckhm37dyc0vw31ar03zqade6u",
      center: [8.306494, 47.051416],
      zoom: 16,
    });

    map.on("load", async function () {});

    map.on("load", function () {
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
                    coordinates: [8.304565, 47.05071 ],
                  },
                  properties: {
                    title: "Jesuitenplatz",
                  },
                },
                {
                  //Fritschibrunnen
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [8.307675, 47.0526 ],
                  },
                  properties: {
                    title: "Fritschibrunnen",
                  },
                },
                {
                  //Rathaustreppe
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [8.306024, 47.05181],
                  },
                  properties: {
                    title: "Rathaustreppe",
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