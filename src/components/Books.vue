<template>
    <div class="">    
      <h2>Books</h2>
      <button type="button"><router-link to="/home">Back</router-link></button>      
      <ol>      
        <li v-for="book in books" :key="book.title">        
          {{ book.title }}      
        </li>    
      </ol>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { mainStore } from '../store/index';
  import { computed } from 'vue'
  
  const store = mainStore();
  const books = computed(() => store.getBooks)
  
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
  