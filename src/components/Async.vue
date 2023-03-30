<template>
  <div class="async">
    <fieldset>
      <legend>{{ title }}</legend>
      <button @click="fetchPost">get posts</button>
      <button @click="changeTitle">changeTitle</button>
      <ul>
        <li v-for="post of posts" :key="post.id">
          <h4>{{ post.title }}</h4>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script setup>
import { onBeforeUnmount } from 'vue';
import {useAsyncStore} from '@/store'
import {storeToRefs} from 'pinia'

const asyncStore = useAsyncStore()
const {fetchPost, changeTitle} = asyncStore
const {title, posts} = storeToRefs(asyncStore)

onBeforeUnmount(() => {
  console.log('Async.vue --- onBeforeUnmount')
})
</script>