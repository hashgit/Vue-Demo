<template>
  <div class="hello">
    <h1>Create Customer</h1>
    <div class="form">
      <div class="notice">
        {{ message }}
      </div>
      <div class="errors" v-if="errors && errors.length">
        <p v-for="(error, ind) in errors" :key="ind">
          {{ error }}
        </p>
      </div>
      <p>
        <input type="text" class="field" placeholder="customer name" v-model="name" />
      </p>
      <p>
        <input type="button" class="input" @click="submit" value="Create" />
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
      errors: [],
      message: null,
    };
  },

  methods: {
    submit: function() {
      // eslint-disable-next-line
      console.log(this.name);

      if (this.name === '' || this.name.length < 2) {
        this.errors.push('Name must have at least 2 characters');
        this.message = null;
      } else {
        axios.post('http://localhost:3000/customer/', {
          id: uuid(),
          name: this.name
        })
        .then(() => {
          this.name = '';
          this.errors = [];
          this.message = 'Created!';
        })
        .catch(() => {
          this.errors = ['Failed to create customer!'];
          this.message = null;
        });
      }
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
