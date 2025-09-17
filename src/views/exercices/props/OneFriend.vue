    <template>
    <div class="space-y-6">
        <h3 class="text-lg text-gray-700 mb-3 font-normal">{{name }} {{premium ? "Ami premium" : "Ami discount"}}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button class="flex items-center justify-center gap-2 px-4 py-2 border border-green-300 text-green-700 rounded bg-white hover:bg-green-50 transition-colors">
            <span>🏠</span>
            <span>Afficher Détails</span>
          </button>
          <button class="flex items-center justify-center gap-2 px-4 py-2 border border-orange-300 text-orange-600 rounded bg-white hover:bg-orange-50 transition-colors" v-on:click="handlePremium">
            <div v-if="premium">
              <span>⭐</span>
              <span>Membre Premium</span>
            </div>
            <div v-else>
              <span>🙍</span>
              <span>Membre classique</span>
            </div>
          </button>
          <button class="flex items-center justify-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded bg-white hover:bg-red-50 transition-colors" v-on:click="deleteMember">
            <span>🗑️</span>
            <span>Suppr</span>
          </button>
        </div>
      </div>
</template>

<script lang="js" setup>


const props = defineProps({
  id :{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  premium: {
    type: Boolean,
    required: true
  }
}) 



const emit = defineEmits (["changePremiumStatus", "deleteMember"])

const  deleteMember = () => {
  if(props.id) {
    emit("deleteMember", props.id)

  }else {
    console.log("pas d'id");
  }
}
const  handlePremium =  () => {
  if(props.id) {
    emit("changePremiumStatus", props.id)
    return
  }else {
    console.log("pas d'id")
  }

}
</script>