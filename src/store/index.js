import {defineStore} from 'pinia'
import { computed, reactive, ref } from 'vue'

const useCountStore = defineStore({
  id: 'countStore',
  state: () => {
    return {
      count: 1,
      age: 20
    }
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2
    }
  },
  actions: {
    increment() {
      this.count ++
    },
    decrement() {
      this.count --
    },
    incrementByNum(num) {
      this.count += num
    },
    reset() {
      this.$reset()
    },
    changeAge() {
      this.age += 10
    }
  }
})

const useTodoStore = defineStore('todo', () => {
  const initialList = [
    {
      key: 1,
      text: '睡觉'
    }
  ]
  const list = reactive([...initialList])
  const len = computed(() => list.length)
  const searchValue = ref('')

  function addItem() {
    list.unshift({
      text: '吃饭',
      key: Math.random()
    })
  }

  function removeItem(idx) {
    list.splice(idx, 1)
  }

  function clearItem() {
    list.length = 0
  }

  function reset() {
    list.length = 0
    list.push(...initialList)
  }

  function search() {
    const compaerNum = +searchValue.value / 10
    const filtedList = list.filter(v => v.key < compaerNum)
    list.length = 0
    list.push(...filtedList)
  }

  return {
    list,
    len,
    searchValue,
    addItem,
    removeItem,
    clearItem,
    reset,
    search
  }
})

const useAsyncStore = defineStore('asyncStore', () => {
  const title = ref('Async.vue')
  const posts = reactive([])

  async function fetchPost() {
    const r = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await r.json()
    posts.length = 0
    posts.push(...data.slice(0, 5))
  }

  function changeTitle() {
    title.value = Math.random().toString()
  }

  return {
    posts,
    fetchPost,
    title,
    changeTitle
  }

})

export {
  useCountStore,
  useTodoStore,
  useAsyncStore
}