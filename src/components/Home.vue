<template>
  <div class="home">    
    <h2>Search books</h2>    
    <input type="text" placeholder="Filter Search" v-model="query" />    
    <button type="button" @click="search">Search</button>
    <div class="loader" v-if="loading"></div>
    <div v-else>
      <button type="button">
        <router-link to="/books">View Books</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { mainStore } from '../store/index';
import { computed } from 'vue'

const store = mainStore();
const query = ref('')
const loading = ref(false)
const books = computed(() => store.getBooks)

const search = async function () {
  const q = query.value.split(" ")
  // Incase this fails
  loading.value = true
  await axios.get(`http://openlibrary.org/search.json?q=${q.length > 1 ? q.join('+') : q}`).then(response => (
    store.setBooks(response.data.docs)
  ))
  loading.value = false
  query.value = ''
};

</script>

<style scoped>
.home {
  margin-top: 20px;
}

.loader {
  border: 6px solid #f3f3f3; /* Light grey */
  border-top: 6px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
