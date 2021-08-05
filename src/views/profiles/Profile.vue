<template>
  <div class="profile">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
   
              <br>
              <br>
              <center>  <strong>DATA PROFILE PEGAWAI </strong> </center>
     <br>
    <hr class="my-3">
      <router-link class="btn btn-success" to="/createprofiles">Tambah Data Profile</router-link>
<br>
<br>
      <Cardprofiles :profiles="profiles"/>
      <br>
      <br>
   <table class="table table-bordered table-hover table-striped">
  <thead>
    <tr> 
     <th scope="col">No</th>
      <th scope="col">Nama Pegawai</th>
      <th scope="col">Alamat</th>
      <th scope="col">Jenis Kelamin</th>
        <th scope="col">Jabatan</th>
       <th scope="col">File Photo</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="(profile, index) in profiles" :key="index">
       <td>{{ profile.id }}</td>
      <td>{{ profile.nama }}</td>
      <td>{{ profile.alamat }}</td>
      <td>{{ profile.jenis_kelamin }}</td>
       <td>{{ profile.jabatan }}</td>
       <td>{{ profile.photo }}</td>
      <td>
        <router-link class="btn btn-warning" :to="{name:'Editprofiles', params:{id:profile.id}}">Edit</router-link>
        <button @click.prevent="profileDelete(profile.id)" class="btn btn-danger">Delete</button>
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
import Cardprofiles from "@/components/Cardprofiles.vue";
import { ref, onMounted } from 'vue';

export default {
  name: 'Profile',
  components: {
    Cardprofiles,
  },
  setup(){
    let profiles = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/profiles')
      .then(response => {
        profiles.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function profileDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/profiles/${id}`)
      .then(()=>{
        let z = this.profiles.map(profiles => profiles.id).indexOf(id);
        this.profiles.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      profiles,
      profileDelete
    }
  }
};
</script>