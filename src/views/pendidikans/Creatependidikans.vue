<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <center><h5 class="card-title">Tambah Data Pendidikan</h5></center>
     <form class="row g-3" @submit.prevent="store">
  
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Nama Pegawai</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pendidikan.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>

  <div class="col-md-12">
    <label for="inputPassword4" class="form-label">SD</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="pendidikan.sd"/>
    <div class="alert alert-danger" v-if="validation.sd">
        {{ validation.sd[0] }}
      </div>
  </div>
  <div class="col-md-12">
    <label for="inputPassword4" class="form-label">SMP</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="pendidikan.smp"/>
    <div class="alert alert-danger" v-if="validation.smp">
        {{ validation.smp[0] }}
      </div>
  </div>
   <div class="col-md-12">
    <label for="inputPassword4" class="form-label">SMA</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="pendidikan.sma"/>
    <div class="alert alert-danger" v-if="validation.sma">
        {{ validation.sma[0] }}
      </div>
  </div>
   <div class="col-md-12">
    <label for="inputPassword4" class="form-label">Perguruan Tinggi</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="pendidikan.perguruan_tinggi"/>
    <div class="alert alert-danger" v-if="validation.perguruan_tinggi">
        {{ validation.perguruan_tinggi[0] }}
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
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const pendidikan = reactive({
      nama: '',
      sd: '',
     smp: '',
     sma: '',
    perguruan_tinggi:''
    });

   
    const validation = ref([]);

    const router = useRouter();

    function store(){
      let nama = pendidikan.nama
      let sd = pendidikan.sd
      let smp= pendidikan.smp
      let sma = pendidikan.sma
      let perguruan_tinggi = pendidikan.perguruan_tinggi

  axios.post("http://127.0.0.1:8000/api/pendidikans", {
        nama: nama,
        sd: sd,
        smp:smp,
        sma: sma,
        perguruan_tinggi: perguruan_tinggi
      })
      .then(() => {
        router.push({
          name:'Pendidikan',
        })
      })
      .catch(error => {
      console.log(error);
      })
}
    return {
      pendidikan,
      validation,
      router, 
      store,
     
    }
  },
}
</script>