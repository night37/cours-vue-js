<template>
    <form  @submit.prevent="onSubmit" class="flex flex-col gap-3">
        <label for="name-input">
            <input class="bg-pink-200 text-lg w-full text-center" type="text" name="name-input" id="name-input" placeholder="Entrez votre nom" required v-model="name">
        </label>
        <label for="age-input">
            <input class="bg-pink-200 text-lg w-full text-center" id="age-input" type="number" name="age-input" placeholder="Entrez votre âge" required v-model="age">

        </label>
        <button class="btn btn-primary hover:btn-secondary" type="submit">Mettre à jour</button>
    </form>
</template>
<script setup>

import {ref, defineEmits} from "vue"

const name = ref("john")
const age = ref(25)
const emit = defineEmits({
    user: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }
})


const onSubmit = () =>{
    emit("user", {name, age})
}

</script>