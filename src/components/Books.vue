<template>
    <div class="">    
      <h2>Books</h2>
      <button type="button"><router-link to="/">Back</router-link></button>      
      <ol>      
        <li v-for="book in books" :key="book.title">        
          {{ book.title }}      
        </li>    
      </ol>
    </div>
</template>
  
<script setup>
  import { mainStore } from '../store/index';
  import { computed } from 'vue'
  
  const store = mainStore();
  const books = computed(() => store.getBooks)
  
</script>

<style scoped>

</style>
  