<template>
    <div class="card w-1/2 flex shadow-xl mx-auto bg-emerald-300 gap-4 p-10">
        <h1 class="font-bold text-xl text-center">Composant gestion de l'utilisateur</h1>
        <UserActive :name="name" :age="age" />
        <UserData @user="defineUser($event)"/>
    </div>
</template>

<script setup >
import { ref } from 'vue';
import  UserActive from "./UserActive.vue"
import UserData from './UserData.vue';

const name = ref("john")
const age = ref(25)

const defineUser = (user) => {
    if(user.name.value.trim() !== name.value && user.name.value.trim() !== "") {
        name.value = user.name.value
    }
    if(user.age.value !== age.value && user.age.value !== "") {
        age.value = user.age.value

    }

}


</script>