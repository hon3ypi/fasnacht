<template>

  <div class="fasnacht">
    <li v-for="event in events" :key="event.ortsname">
      {{event.fields.ortsname}}
      {{event.fields.location}}
      <p/>
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
import contentfulClient from "@/module/contentful.js";

export default {
  name: "Fasnacht",
  data: function() {
    return {
      events: []
    };
  },
   created: async function() {
    let result = await contentfulClient
      .getEntries({
        content_type: "standort"
      });
    console.log(result);
    this.events = result.items;
  }
};
</script>
