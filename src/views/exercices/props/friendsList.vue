<template>
  <div class="max-w-4xl mx-auto p-6 font-sans">
    <!-- En-tête avec titre -->
    <div class="text-center mb-8">
      <h2 class="text-2xl text-gray-700 font-normal">Ici c'est le composant parent ExoPropsView</h2>
    </div>



    <!-- Formulaire -->
    <div class="bg-gradient-to-br from-cyan-400 to-blue-600 p-6 rounded-lg mb-8">
      <div class="space-y-4">
        <Field label="name" type="text" placeholder="Votre nom"  @fieldValue="updateForm"/>
        <Field label="tel" type="tel" placeholder="votre Tel"  @fieldValue="updateForm"/>
        <Field label="votre EMAIL" type="email" placeholder="votre email"  @fieldValue="updateForm"/>

        <div class="text-center pt-4">
          <button 
            class="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-2 rounded hover:opacity-90 transition-opacity" v-on:click="submitForm"
          >
            Ajouter Ami
          </button>
        </div>
      </div>
    </div> 
  </div>
  <div>
    <div v-for="user in lesAmis" class="friend-item">
      <OneFriend :id="user.id" :name="user.name" :phone="user.phone" :email="user.email" :premium="user.premium" @deleteMember="deleteMember" @changePremiumStatus="changePremiumStatus"/>
  
    </div>
  </div>

</template>
<script lang="js" setup>
  
  import { v4 as uuidv4 } from 'uuid';
  import { ref, watch } from 'vue';
  import Field from './Field.vue'
  import OneFriend from './OneFriend.vue';


  const form = ref({})
  let lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
  ]);
  const updateForm = (newValue) => {
    form.value[newValue.label] = newValue.value
  // form[newValue.label] = newValue.value
}

  const submitForm = () => {

    const options = {
      random : true,
  } ;
    form.value["id"] = uuidv4(options)
    form.value["premium"] = false
    lesAmis.value.push(form.value)
    console.log(lesAmis);
  }

  const deleteMember = (id) => {
    lesAmis.value = lesAmis.value.filter(friend => friend.id !== id)
  
  }

  const changePremiumStatus = (id) => {
    lesAmis.value = lesAmis.value.map((friend) => {
      if(friend.id == id) {

        friend.premium = !friend.premium  
      }  
      return friend
    }
  )
  console.log(lesAmis.value)
  
}
</script>
