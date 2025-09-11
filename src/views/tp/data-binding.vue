<template>
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img v-bind:src=user.imgUrl >
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ user.name }}</h2>
            <p>nom dynamique {{ dynamicName }}</p>
            <p> age {{ user.age }}</p>
            <p>age plus dix {{ user.ageAdditionByTen}}</p>
            <p>nombre fétiche {{ user.feticheNumber }}</p>
            <input v-model="dynamicName" placeholder="edit me" />



        </div>
    </div>
</template>
<script lang="js" setup>
import { ref } from 'vue'
const age = 45
const dynamicName = ref()
const ageAdditionByTen = (age) => {
    return age + 10
}
const user = 
{   "imgUrl" : "/mario.jpg",
    "name":"Mario", 
    "age": `${age} ans`, 
    "feticheNumber": Math.random(), 
    "ageAdditionByTen": ageAdditionByTen(age),
    "dynamique": ""
}



</script>
<style>
    
</style>