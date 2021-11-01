<template>
    <div>
        <input type="text" v-model="title" @keydown.enter="addTodo" />
        <ul v-if="todos.length">
            <li v-for="todo in todos">
                <input type="checkbox" v-model='todo.done'>
                <span class="{done:todo.done}">{{todo.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import useTodos from '../hooks/useTodosHooks'
let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
</script>

<style scoped>
h1 {
    color: red;
}
.done {
    text-decoration: line-through;
}
</style>