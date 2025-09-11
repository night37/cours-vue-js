<template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <h2 class="text-2xl font-bold mb-4">WatchList 🎬 (Films à voir) - Mode : Composition</h2>

            <input  type="text" placeholder="Entrez le nom d'un film" v-model="movie"
                class="input input-bordered w-full mb-3" />

            <button  class="btn btn-primary mb-4" @click="addMovie(movie)">
                Ajouter à votre Liste
            </button>
            <button  class="btn btn-error mb-4" @click="moviesList = []">
                Vider la liste
            </button>

            <hr class="my-4" />

            <div >
                <h3 class="text-xl font-semibold mb-2">Votre film ajouté : </h3>
            </div>

            <div v-if="moviesList.length == 0" class="text-gray-500">
                <p>Pas encore de films dans votre liste ? Veuillez en ajouter un.</p>
            </div>
            <div v-if="moviesList.length > 0" class="text-gray-500">
                <ul>
                    <li class="badge badge-outline hover:bg-amber-100" v-for="movie, key in moviesList" @click="moviesList.splice(idx, 1)">
                        {{ movie }} <img class="h-[16px] w-[16px]" src="/trash.svg" alt=""/>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="js">
import { watch, ref } from 'vue';

    const moviesList = ref([])
    const movie = ref("")
    const addMovie = (movie) => {
        if(movie) {
            
            moviesList.value.push(movie)
        }
    }
    const clearList = () => {
        moviesList.value = []
    }
</script>