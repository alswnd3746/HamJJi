<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
    <p>{{ counter }}</p>
    <p>pinia api call</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref,
} from 'vue';
import { Todo, Meta } from './models';
import { useCounterStore } from 'src/stores/example-store';
import { ExampleData } from 'src/ts/example';


function useClickCount() {
  const clickCount = ref(0);

  function increment() {
    clickCount.value += 1
    console.log(ExampleData);
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

export default defineComponent({
  name: 'ExampleComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => []
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup (props) {
    const store = useCounterStore()
    const { name, counter, userData, doubleCount, registerUser } = store

    store.registerUser()

    return {
      // will always be "Eduardo"
      name,
      // will always be 0
      counter,
      userData,
      doubleCount,
      registerUser,

      // will also always be 0
      doubleNumber: store.doubleCount,

      // ✅ this one will be reactive
      doubleValue: computed(() => store.doubleCount),

      ...useClickCount(),
      ...useDisplayTodo(toRef(props, 'todos'))
    };
  },
});
</script>
