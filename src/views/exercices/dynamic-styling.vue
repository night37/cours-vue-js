<template>
    <div class="flex gap-3 p-10 bg-green-200 justify-center mb-3">
        <div class="card card-border bg-base-100 w-96" :class="card1" @click="changeBackgroundOnClick">
        <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        <div class="card card-border bg-base-100 w-96" :class="card2"  @click="changeBackgroundOnClick">
        <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    </div>
        <div class="flex gap-3 p-10 bg-green-200 justify-center">
    <div class="card card-border w-96" :style="{ backgroundColor: card3isActive ? 'yellow' : 'yellowgreen' }" @click="card3isActive = !card3isActive" >
        <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>  
        </div>
        </div>
    <div class="card card-border w-96" :style="{ backgroundColor: card4isActive ? 'yellow' : 'yellowgreen' }" @click="card4isActive = !card4isActive" >
        <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';

const card1 = ref("card1")
const card2 = ref("card2")
const card3isActive = ref(false)
const card4isActive = ref(false)


const changeBackgroundOnClick = () => {


    if(event.target.closest(".card").classList.contains("card1")) {
        if(card1.value.includes("isActive")) {
            card1.value = "card1"

        }else{

            card1.value = "card1 isActive"
        }
    }else{

         if(card2.value.includes("isActive")) {
            card2.value = "card2"

        }else{

            card2.value = "card2 isActive"
        }
    }   
}



</script>
<style lang="css">
.card1, .card2 {
    background-color: yellowgreen;
}
.isActive {
    background-color: yellow;
}
</style>


