<template>
  <div class="orte">
    <li v-for="element in ort" :key="element.ortsname">
      {{element.fields.ortsname}}
      <p/>{{element.fields.standort}}
      <p/>{{element.fields.story.content[0].content[0].value}}
      
      <p/>
        <img :src="element.fields.media.fields.file.url" />
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
import contentfulClient from "@/module/contentful.js";

export default {
  name: "Orte",
  data: function() {
    return {
      ort: []
    };
  },
   created: async function() {
    let result = await contentfulClient
      .getEntries({
        content_type: "orte"
      });
    console.log(result);
    this.ort = result.items;
  }
};
</script>
