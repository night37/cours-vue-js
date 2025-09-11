<template>
  <div class="bg-emerald-100 flex flex-col gap-4">
    <h1 class="mx-auto">double binding</h1>
    <div class="flex gap-3 mx-auto items-center flex-col">
        <input v-model="inputValue1" class="bg-white"/>
        <div class="input-1 flex  flex-col">le texte de l'input:  {{inputValue1}}</div>
        <input @keyup.esc=setinputValue2 class="bg-white"/>
        <div class="input-1 flex  flex-col">le texte de l'input:  {{inputValue2}}</div>
    </div>
        <button type="button" class="btn btn-info text-white w-fit" @click=alert>alert</button>
  </div>
</template>

<script setup> 
import { ref } from 'vue';

const inputValue1 = ref("")
const inputValue2 = ref("")
 
const setinputValue2 = (event) => {
    console.log(event.target.value);
    inputValue2.value = event.target.value
}
const alert = () => window.alert("Hello world!");



</script >


<style scoped>
</style>