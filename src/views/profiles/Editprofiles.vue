<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <center><h5 class="card-title">Edit Profiles</h5></center>
     <form class="row g-3" @submit.prevent="update">
  
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Nama Pegawai</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="profile.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  
    <div class="col-md-12">
    <label for="inputPassword4" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="profile.alamat"/>
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
  </div>
   
  <div class="form-group">
  <div class="col-md-12">
        <label for="formFile" class="form-label">Jenis Kelamin</label>
            <select class="form-control" id="jenis_kelamin" name="jenis_kelamin" >
                <option value="Peremuan">Peremuan</option>
                <option value="Laki-Laki">Laki-Laki</option> 
                </select>
              </div>   
              </div> 
 <br>
 <br>
  <div class="col-md-12">
     <label for="formFile" class="form-label">Photo</label>
  <input class="form-control" type="file" id="formFile">
    <div class="alert alert-danger" v-if="validation.profile">
        {{ validation.profile[0] }}
      </div>
  </div>
   <div class="form-group">
            <button type="submit" class="btn btn-success">Simpan Data</button>
         </div>
            </form>
            </div>
            </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const profile = reactive({
      nama: '',
      alamat: '',
      jenis_kelamin: '',
      jabatan: '',
      photo:''
    });

   
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios
      .get(`http://127.0.0.1:8000/api/profiles/${route.params.id}/edit`)
      .then((response) => {
        console.log(response.data.data.nama)

        profile.nama = response.data.data.nama
        profile.alamat = response.data.data.alamat
        profile.jenis_kelamin = response.data.data.jenis_kelamin
         profile.jabatan= response.data.data.jabatan
         profile.photo = response.data.data.photo
      })
      .catch(error =>{
        console.log(error.response.data);
      })
      })

    function update(){
      let nama = profile.nama
      let alamat = profile.alamat
      let jenis_kelamin = profile.jenis_kelamin
      let jabatan = profile.jabatan
      let photo = profile.photo
    
      axios.put(`http://127.0.0.1:8000/api/profiles/${route.params.id}`, {
        nama: nama,
        alamat: alamat,
        jenis_kelamin: jenis_kelamin,
        jabatan: jabatan,
        photo: photo
      })
      .then(() => {
        router.push({
          name:'Profile',
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
    return {
      profile,
      validation,
      router, 
      update,
      route
      
    }
  },
}
</script>