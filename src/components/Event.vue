<template>
  <div class="event">
    <h2>
      {{fasnacht.event}}
    </h2>
    <p>
      {{fasnacht.event}} findet beim {{fasnacht.standort}} statt}
    </p>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: {
    event: Object,
    standort: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.person {
  color: rgb(103, 189, 189);
  font-weight: bold;;
}

</style>