<template>
  <div class="pendidikan">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
  
              <br>
              <br>
              <center>  <strong>DATA HISTORY PENDIDIKAN </strong> </center>
     <br>
    <hr class="my-3">
      <router-link class="btn btn-success" to="/creatependidikans">Tambah Data Pendidikan</router-link>
<br>
<br>
      <Cardpendidikans :pendidikans="pendidikans"/>
      <br>
      <br>
   <table class="table table-bordered table-hover table-striped">
  <thead>
    <tr> 
     <th scope="col">No</th>
      <th scope="col">Nama Pegawai</th>
      <th scope="col">SD</th>
      <th scope="col">SMP</th>
        <th scope="col">SMA</th>
       <th scope="col">Perguruan Tinggi</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="(pendidikan, index) in pendidikans" :key="index">
       <td>{{ pendidikan.id }}</td>
      <td>{{ pendidikan.nama }}</td>
      <td>{{ pendidikan.sd }}</td>
      <td>{{ pendidikan.smp }}</td>
       <td>{{ pendidikan.sma}}</td>
      <td>{{ pendidikan.perguruan_tinggi }}</td>
      <td>
        <router-link class="btn btn-warning" :to="{name:'Editpendidikans', params:{id:pendidikan.id}}">Edit</router-link>
        <button @click.prevent="pendidikanDelete(pendidikan.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
// import Slider from "@/components/Slider.vue";
import Cardpendidikans from "@/components/Cardpendidikans.vue";
import { ref, onMounted } from 'vue';

export default {
  name: 'Pendidikan',
  components: {
    Cardpendidikans,
  },
  setup(){
    let pendidikans = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/pendidikans')
      .then(response => {
        pendidikans.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function pendidikanDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/pendidikans/${id}`)
      .then(()=>{
        let z = this.pendidikans.map(pendidikans => pendidikans.id).indexOf(id);
        this.pendidikans.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      pendidikans,
      pendidikanDelete
    }
  }
};
</script>