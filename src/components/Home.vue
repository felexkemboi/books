<template>
  <div class="home">    
    <h2>Search books</h2>    
    <input type="text" placeholder="Filter Search" v-model="query" />    
    <button type="button" @click="search">Search</button>
    {{ query }}  
    <ul>      
      <li v-for="book in filteredBooks" :key="book.title">        
        {{ book.title }}      
      </li>    
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')

const filteredBooks = ref([{'title':'Enjoyment'},{'title':'Amigo'}])  

const search = () => {  console.log(query.value)    }

</script>

<style scoped>
.home {
  margin-top: 20px;
}
</style>
