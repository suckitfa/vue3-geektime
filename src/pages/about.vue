<template>
    <h1>about</h1>
    <h2>鼠标坐标:</h2>
    <div>x = {{x}}</div>
    <div>y = {{y}}</div>
</template>
<script setup>
import useMouse from '../hooks/useMouseHooks';
let {x,y} = useMouse()
</script>