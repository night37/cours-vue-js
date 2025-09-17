


<template>
        <div>
          <label class="block text-white font-bold mb-2">{{ label }}</label>
          <input 
            :type=type 
            :placeholder=placeholder
            v-model="emitField"
            class="w-full px-3 py-2 border-none bg-white rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
        </div>

</template>

<script setup> 
    import { ref, watch, defineEmits} from 'vue';

    const props = defineProps({
        label: String,
        type: String,
        placeholder: String,    
    
    })
    const emit = defineEmits(["fieldValue"])

    
    const emitField = ref(null)
    console.log(emitField);
    watch(emitField, async (newEmitField, oldEmitField) => {
        emitField.value = newEmitField
        emit("fieldValue", {"label":props.label,"value":emitField.value} )
        
    })   
    

</script >


<style scoped>
</style>