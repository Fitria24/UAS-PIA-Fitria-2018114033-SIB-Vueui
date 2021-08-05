<template>
<div class="card text-center mt-4" v-for="p in profile" :key="p.id">
  <div class="card-header">Detail Profile</div>
  <div class="card-body">
    <h5 class="card-title">{{p.nama}}</h5>
    <p class="card-text">{{p.Alamat}}</p>
      <p class="card-text">{{p.jenis_kelamin}}</p>
       <p class="card-text">{{p.jabatan}}</p>
      <p class="card-text">{{p.photo}}</p>
  </div>
  <div class="card-footer">
    <router-link class="btn btn-warning" :to="{name:'Editprofiles', params:{id:p.id}}">Edit</router-link>
        <button @click.prevent="profileDelete(p.id)" class="btn btn-danger">Delete</button>
        </div>
        </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    let profile = ref([]);
    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/profiles/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama)

        profile.value = response.data.data;
       
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function profileDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/profiles/${id}`)
      .then(()=>{
       router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      profile,
      router, 
      profileDelete,
      route
    }
  },
}
</script>

<style>

</style>