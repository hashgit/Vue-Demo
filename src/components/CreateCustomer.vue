<template>
  <div class="hello">
    <h1>Create Customer</h1>
    <div class="form">
      <div class="notice">
        {{ message }}
      </div>
      <div class="errors" v-if="nameInvalid">
          Name must have at least 2 characters
      </div>
      <p>
        <input type="text" class="field" placeholder="customer name" v-model="name" />
      </p>
      <p>
        <input type="button" :disabled="nameInvalid" class="input" @click="submit" value="Create" />
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import uuid from 'uuid/v1';

export default {
  name: 'CreateCustomer',
  data() {
    return {
      name: '',
      message: null,
    };
  },

  computed: {
    nameInvalid() {
      return this.name === '' || this.name.length < 2;
    }
  },

  methods: {
    submit: function() {
      axios.post('http://localhost:3000/customer/', {
        id: uuid(),
        name: this.name
      })
      .then(() => {
        this.message = 'Created!';
      })
      .catch(() => {
        this.message = 'Failed!';
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  margin-top: 200px;
}

.input {
  height: 40px;
  width: 200px;
  font-size: 1.1rem;
}

.field {
  height: 30px;
  padding: 5px;
  font-size: 1.3rem;
  width: 330px;
  border-width: 2px;
  border-color: green;
  border-style: solid;
}

.errors {
  color: red;
}

.notice {
  color: darkgreen;
  font-size: 1.3rem;
}

</style>
