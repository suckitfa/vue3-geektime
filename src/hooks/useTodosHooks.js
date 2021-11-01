// 我们在使用 Composition API 拆分功能时，
// 也就是执行 useTodos 的时候，ref、computed 
// 等功能都是从 Vue 中单独引入，而不是依赖 this 上下文。
import { ref, computed } from 'vue'
import useStorage from './useStorageHooks'

function useTodos() {
    // 定义数据
    let title = ref('')
    let todos = useStorage('todos', [])

    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        })
        title.value = ''
    }

    function clear() {
        todos.value = todos.value.filter(v => !v.done)
    }
    let active = computed(() => {
        return todos.value.filter(v => !v.done).length
    })
    let all = computed(() => todos.value.length)
    let allDone = computed({
        get() {
            return active.value === 0
        },
        set(val) {
            todos.value.forEach(item => {
                item.done = val;
            })
        }
    })
    return {
        title,
        todos,
        addTodo,
        clear,
        active,
        all,
        allDone
    }
}

export default useTodos