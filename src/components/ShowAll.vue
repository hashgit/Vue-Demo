<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ShowAll',
  data() {
    return {
      msg: 'Show All'
    };
  },

  mounted() {
    // eslint-disable-next-line
    console.log('mounted show all');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
