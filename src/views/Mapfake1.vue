<template>
  <div class="grendtest">
    <div ref="container" class="map"></div>
  </div>
</template>

<script>
//Import
import mapboxgl from "mapbox-gl";
import contentfulClient from "@/module/contentful.js";
import fritschi from '../assets/fritschimarker.png';

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


      let result = await contentfulClient
      .getEntries({
        content_type: "standort",
      });
      console.log(result.item);
      let coordinates = result.items;


      /*****************************************************/
      let resultfritschi = await contentfulClient
      .getEntries({
        content_type: "grende",
      });

      console.log(resultfritschi.item);
      //let fritschi = resultfritschi.items;
      /* FRITSCHIBURNNEN ************************************************************/
        map.loadImage(
        //fritschi.fields.grendmedia.fields.file.url,
        //"images.ctfassets.net/857folb0vp61/syTDePTB1SToGmTNhXyqI/3249e80243bdce19b4326cf8cd08ac0e/fritschimarker.png",
        //"@/assets/fritschimarker.png",
        fritschi,
        function (error, image) {
          if (error) throw error;
          map.addImage("fritschi", image);
          
          //Point in Map
          map.addSource("point", {
            type: "geojson",
            data: {
                  //Jesuitenplatz
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [coordinates[3].fields.location.lon, coordinates[3].fields.location.lat],
                  },
                  properties: {
                    title: coordinates[3].fields.ortsname,
                  },
                },
          });
          // Add a symbol layer
          map.addLayer({
            id: "point",
            type: "symbol",
            source: "point",
            layout: {
              "icon-image": "fritschi",
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        },
      );

    });
  },
};
</script>

-->CSS
<style>
.map {
  float: left;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
}
</style>