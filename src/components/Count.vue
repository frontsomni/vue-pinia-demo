<template>
  <div class="count">
    <fieldset>
      <legend>{{ title }}</legend>
      <p>{{ count }} - doubleCount: {{ doubleCount }}</p>
      <p>age: {{ age }}</p>
      <hr />
      <h3>from action change</h3>
      <button @click="increment">increment + 1</button>
      <button @click="decrement">decrement - 1</button>
      <button @click="incrementByNum(2)">increment by any num</button>
      <button @click="reset">reset</button>
      <hr />
      <h3>from component change</h3>
      <button @click="countNum({type: 'increment'})">increment + 1</button>
      <button @click="countNum({type: 'decrement'})">decrement - 1</button>
      <button @click="countNum({type: 'increment', payload: 2})">increment by any num</button>
      <button @click="countNum({type: 'reset'})">reset</button>

      <hr />
      <button @click=" changeAge">reset test</button>
    </fieldset>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useCountStore} from '@/store'
import {storeToRefs} from  'pinia'

const countStore = useCountStore()
// 解构 state 或 computed 时，转换为 refs，避免失活
const {count, doubleCount, age} = storeToRefs(countStore)
// 解构 actions 时，不需要，它没有响应式
const {increment, decrement, incrementByNum, reset, changeAge} = countStore

const title = ref('Count.vue')

function countNum({type, payload}) {
  switch(type) {
    case 'increment':
      countStore.$patch({
        count: count.value + payload || 1
      })
    break
    case 'decrement':
      countStore.$patch({
        count: count.value - 1
      })
    break
    default:
      countStore.$reset()
  }
}
</script>