<template>
<div class="card text-center mt-4" v-for="p in pendidikan" :key="p.id">
  <div class="card-header">Detail Pendidikan</div>
  <div class="card-body">
    <h5 class="card-title">{{p.nama}}</h5>
    <p class="card-text">{{p.sd}}</p>
      <p class="card-text">{{p.smp}}</p>
       <p class="card-text">{{p.sma}}</p>
      <p class="card-text">{{p.perguruan_tinggi}}</p>
  </div>
  <div class="card-footer">
    <router-link class="btn btn-warning" :to="{name:'Editpendidikans', params:{id:p.id}}">Edit</router-link>
        <button @click.prevent="pendidikanDelete(p.id)" class="btn btn-danger">Delete</button>
        </div>
        </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    let pendidikan = ref([]);
    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/pendidikans/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama)

        pendidikan.value = response.data.data;
       
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function pendidikanDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/pendidikans/${id}`)
      .then(()=>{
       router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      pendidikan,
      router, 
      pendidikanDelete,
      route
    }
  },
}
</script>

<style>

</style>