<template>
    <div class="w-1/2 flex shadow-xl bg-amber-300 flex-col d-flex justify-center w-full">
        <h2 class="font-bold text-xl text-center">Composant affichage données utilisateur</h2>
        <p class="font-bold text-xl text-center">{{name.toUpperCase()}}</p>
        <p class="font-bold text-lg text-center">{{age}} ans </p>
        
        
    </div>
</template>
<script setup>

defineProps({
    name: {
        type:String,
        required: true,
        default: "John"
    }, 
    age: {
        type: Number,
        required:true,
        default: "25"
    }
    
})



</script>