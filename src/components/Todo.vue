<template>
  <div class="todo">
    <fieldset>
      <legend>{{ title }}</legend>
      <p>TodoLen: {{ len }}</p>
      <button @click="addItem">add Item</button>
      <button @click="clearItem">clear Item</button>
      <button @click="reset">reset item</button>
      <div>
        <input type="text" placeholder="serach todo" v-model="searchValue">
        <button @click="search">filter todo</button>
      </div>
      <hr />
      <h3>$patch change item</h3>
      <button @click="todoStore.$patch(addItemWithPatch)">addItemWithPatch</button>
      <ul>
        <li v-for="({key, text}, idx) of list" :key="key">
          <span>{{key}} - {{ text }}</span>
          <button @click="removeItem(idx)">remove Item</button>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useTodoStore} from '@/store'
import { storeToRefs } from 'pinia';

const todoStore = useTodoStore()
const title = ref('Todo.vue')
const {addItem, removeItem, clearItem, reset, search} = todoStore
const {list, len, searchValue} = storeToRefs(todoStore)


function addItemWithPatch(state) {
  state.list.unshift({
    text: '学习',
    key: Math.random()
  })
}

</script>