<template>
      <h2 class="title">Books</h2>
      <div v-if="books.length < 1">
        <p>There are no books click the button below to go back</p>
      </div>
      <li v-for="(book, index) in books" :key="book.title">
        {{ book.title }}
      </li>  
      <button type="button"><router-link to="/">Go Back</router-link></button>
</template>
  
<script setup>
  import { mainStore } from '../store/index';
  import { computed } from 'vue'
  
  const store = mainStore();
  const books = computed(() => store.getBooks)
  
</script>

<style scoped>
 .title {
    color: blue;
    font-size: 35px;
 }
</style>
  