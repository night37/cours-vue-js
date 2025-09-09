<script setup lang="ts">
let string  = "Les mémoires de Steven Seagal"
let boolean = false
let array = ["du texte", 99]
let object = {"name": "COOL", "tel": "0605030330"}
let hello ="Hello World"

</script>

<template>
  <div class="flex flex-col">
    {{string }}
    {{ boolean }}
    {{ array }}
    {{ array[0] }}
    {{ object }}
    {{ object.name }}
    {{ object.name }}
    {{ object.tel }}
    {{ object.tel }}
    {{ hello }}
  </div>


</template>

<style scoped>
</style>
