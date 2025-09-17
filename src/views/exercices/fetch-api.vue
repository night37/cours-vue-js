<template>
    <h5>Une simple requête HTTP GET</h5>

    <div class="container pokemon-container">
        <h2>Les pokemon</h2>
        <div class="flex flex-wrap gap-1">
            <div v-if="pokemons.results" v-for="pokemon, key in pokemons.results">
                <div class="badge badge-primary">{{ pokemon?.name }}</div>
    
            </div>
        </div>
    </div>
    <div class="container pokemon-container">
        <h2>Météo Toulouse</h2>
        <div v-if="meteo.fcst_day_0" class="flex flex-wrap gap-1 flex-col">
                <div class="flex items-center"> <img :src="meteo.fcst_day_0.icon"/><p> Température max: {{meteo.fcst_day_0.tmax }}</p> </div>
                <div class="flex items-center"> <img :src="meteo.fcst_day_0.icon"/><p> Température min: {{meteo.fcst_day_0.tmin }}</p> </div>
                <div class="flex items-center"> <img :src="meteo.current_condition.icon"/><p> Température actuelle: {{meteo.current_condition.tmp }}</p> </div>
        </div>
    </div>
</template>

<script lang='js' setup>

import { onMounted, ref } from 'vue';

const pokemons = ref([])
const meteo = ref({})

onMounted(async() => {
    
    fetchApi("https://pokeapi.co/api/v2/pokemon/", pokemons)
    fetchApi("https://prevision-meteo.ch/services/json/toulouse",meteo)
})


async function fetchApi (url, ref) {
    try {
        let response = await fetch(url) 
        const data = await response.json();
        
        if(data){            
           ref.value = data
        }
        
    } catch (error) {
        console.error('une erreur a eu lieu lors de la reception des données ',error)
    }
}

</script>