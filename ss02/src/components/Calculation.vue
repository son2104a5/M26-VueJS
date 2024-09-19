<template>
    <div>
        <h2>Danh sách kết quả:</h2>
        <ul>
            <li>{{ n1 }} + {{ n2 }} = {{ sum() }}</li>
            <li>{{ n1 }} - {{ n2 }} = {{ sub() }}</li>
            <li>{{ n1 }} * {{ n2 }} = {{ mul() }}</li>
            <li>{{ n1 }} / {{ n2 }} = {{ div() }}</li>
        </ul>
    </div>
</template>

<script setup>
const n1 = 10
const n2 = 10

const sum = () => n1 + n2
const sub = () => n1 - n2
const mul = () => n1 * n2
const div = () => n1 / n2
</script>

<style>

</style>