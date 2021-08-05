<template>
<div class="row">
 <div class="col-lg-4 mt-3"  v-for="(profile, index) in profiles" :key="index">
<div class="card">
 <center><strong> <div class="card-header">CARD DATA PROFILE</div></strong></center>
  <div class="card-body">
    <p class="card-text">Nama Pegawai : {{profile.nama}}</p>
    <p class="card-text">Alamat : {{profile.alamat}}</p>
    <p class="card-text">Jenis Kelamin :  {{profile.jenis_kelamin}}</p>
    <p class="card-text">Jabatan :  {{profile.jabatan}}</p>
    <p class="card-text">File Gambar Photo : {{profile.photo}}</p>
   
  </div>
  <div class="card-footer text-muted"><router-link class="btn btn-primary" :to="{name:'Detailprofiles', params:{id:profile.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["profiles"],
}
</script>

<style>

</style>