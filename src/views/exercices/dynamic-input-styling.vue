<template>
    <div class="flex gap-3">
        <input class="bg-red-100" type="text" name="" id="" v-model="input1" :class="input1"/>
        <input class="bg-red-100" type="text" name="" id="" v-model="input2" :class="input2" :style="{backgroundColor: input2}"/>
    </div>


    
</template>

<script setup>
import { ref } from 'vue';
const input1 = ref("")
const input2 = ref()

console.log(input1);


</script>
<style lang="css">
.world {
    background-color: yellowgreen;
}

</style>


