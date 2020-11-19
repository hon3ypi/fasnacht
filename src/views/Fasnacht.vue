<template>

  <div class="fasnacht">
    <div v-for="element in orte" :key="element.ortsname">
      {{element.fields.ortsname}}
      {{element.fields.location}}
    </div>

    <div v-for="grend in orte" :key="grend.grendname">
      {{grend.fields.grendname}}
      {{grend.fields.grendmedia.fields.file.url}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import contentfulClient from "@/module/contentful.js";

export default {
  name: "Fasnacht",
  data: function() {
    return {
      orte: []
    };
  },
   created: async function() {
    let result = await contentfulClient
      .getEntries({
        content_type: "standort"
      });
    console.log(result);
    this.orte = result.items;

    let resultgrend = await contentfulClient
      .getEntries({
        content_type: "grende"
      });
    console.log(resultgrend);
    this.orte = resultgrend.items;
  }
};
</script>
