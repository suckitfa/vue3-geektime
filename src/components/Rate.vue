<template>
    <div :style="fontstyle">
    <div class="rate" @mouseout="mouseOut">
        <span  
            v-for="num in 5" 
            :key="num"
            @mouseover="mouseOver(num)"
        >☆</span>
        <span class="hollow" :style="fontwidth">
            <span
                v-for="num in 5"
                :key="num"
                @mouseover="mouseOver(num)"
                @click="onRate(num)"
            >★</span>
        </span>
    </div>
    </div>
</template>
<script setup>
import { defineProps, computed,ref,defineEmits} from 'vue';
// 定义props
let props = defineProps({
    modelValue:Number,
    theme:{type:String,default:'orange'}
});
let emits = defineEmits(['update:modelValue'])

function onRate(num) {
    emits('update:modelValue',num)
};
const themObj = {
    'black':'#00',
    'white': '#fff', 
    'red': '#f5222d', 
    'orange': '#fa541c', 
    'yellow': '#fadb14', 
    'green': '#73d13d',
}

const fontstyle = computed(()=>{
    return `color:${themObj[props.theme]};`
})

// 评分宽度
let width = ref(props.modelValue)
function mouseOver(i) {
    width.value = i;
}
function mouseOut() {
    width.value = props.modelValue;
}
const fontwidth = computed(()=>`width:${width.modelValue}em;`)
</script>

<style>
.rate{ position:relative; display: inline-block;}
.rate > span.hollow { position:absolute; display: inline-block; top:0; left:0; width:0; overflow:hidden;}
</style>