<template>
  <div class="test">
    <li v-for="event in events" :key="event.standort">
      {{event.fields.standort}}
      <img :src="event.fields.bild.fields.file.url" />
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
import contentfulClient from "@/module/contentful.js";

export default {
  name: "Test",
  data: function() {
    return {
      events: []
    };
  },
   created: async function() {
    let result = await contentfulClient
      .getEntries({
        content_type: "fasnacht"
      });
    console.log(result);
    this.events = result.items;
  }
};
</script>
