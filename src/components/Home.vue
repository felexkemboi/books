<template>
  <div class="home">    
    <h2>Search books</h2>    
    <input type="text" placeholder="Filter Search" v-model="query" />    
    <button type="button" @click="search">Search</button>
    {{ query }} 
    <div class="loader" v-if="loading"></div> 
    <ol>      
      <li v-for="book in filteredBooks" :key="book.title">        
        {{ book }}      
      </li>    
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const query = ref('')
const loading = ref(false)

const filteredBooks = ref([{'title':'Enjoyment'},{'title':'Amigo'}])  

const search = async function () {
  const q = query.value.split(" ")
  loading.value = true
  await axios.get(`http://openlibrary.org/search.json?q=${q.join('+')}`).then(
    response => (console.log(response.data.docs))
  )
  loading.value = false
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
