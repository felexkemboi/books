<template>
  <div class="home">    
    <h2>Search books</h2>
    <div class="search flex-row">
      <input class="input" type="text" placeholder="Type the title of the book" v-model="query" />
      <button type="button" @click="search" v-if="!loading">Search</button>
      <button v-else type="button" class="spinner_button" disabled>
        <svg class="loader"></svg>
      </button>
    </div>    
    <div>
      <button type="button" :disabled="loading">
      <router-link to="/books">View Books</router-link>
    </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { mainStore } from '../store/index';

const store = mainStore();
const query = ref('')
const loading = ref(false)

const search = async function () {
  const q = query.value.split(" ")

  try {
    loading.value = true
    await axios.get(`http://openlibrary.org/search.json?q=${q.length > 1 ? q.join('+') : q}`).then(response => (
      store.setBooks(response.data.docs)
    ))
    loading.value = false
  } catch (error) {
    alert("Fetching of the titles failed ", error);
  }
  query.value = ''
};

</script>

<style scoped>
.home {
  margin-top: 20px;
}

.search {
  text-align: center;
}

.loader {
  border: 8px solid #f3f3f3;
  border-top: 6px solid #55db34;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

.spinner_button {
  margin-top: 10px;
  min-height: 50px;
  min-width: 80px;
}

input {
  border: 1px solid rgb(135, 170, 71);
  border-radius: 10px;
  min-height: 45px;
  min-width: 70vh;
  text-align: center;
  margin: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
