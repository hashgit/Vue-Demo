<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="loading">Loading...</div>

    <div v-if="!loading">
      <table v-if="data" class="list">
        <thead class="heading">
          <tr>
            <td width="50%">
              Id
            </td>
            <td>
              Name
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in data" :key="index">
            <td width="50%">{{ customer.id }}</td>
            <td>{{ customer.attributes.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ShowAll',
  data() {
    return {
      msg: 'Show All',
      loading: false,
      error: null,
      data: null,
    };
  },

  mounted() {
    this.loading = true;

    axios.get('http://localhost:3000/customer/')
      .then((response) => {
        this.data = response.data.data;
        this.loading = false;
      })
      .catch(() => {
        this.error = true;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  margin-top: 100px;
  color: darkslategrey;
  width: 100%;
}

.heading {
  font-weight: bold;
}
</style>
