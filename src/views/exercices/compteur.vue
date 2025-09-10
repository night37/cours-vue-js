<template>
  <div class="bg-emerald-100 flex flex-col gap-4">
  <h1 class="mx-auto">Compteur</h1>
  <div class="flex gap-3 mx-auto items-center">
    <button type="button" class="btn btn-error text-white"  @click.middle="decrement">-</button>
        <span>le compteur: {{ counter }}</span>
    <button type="button" class="btn btn-success text-white" @click.right="increment">+</button>
  </div>
  </div>

</template>

<script setup> 
import { ref } from 'vue';

const counter = ref(0)
const number = ref(11)

const decrement = () => {
    if(counter.value > 0) 
    {
            counter.value -= number.value
            
    }
}

const increment = () => {
    counter.value += number.value
}



</script >


<style scoped>
</style>