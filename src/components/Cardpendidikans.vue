<template>
<div class="row">
 <div class="col-lg-4 mt-3"  v-for="(pendidikan, index) in pendidikans" :key="index">
<div class="card">
 <center><strong> <div class="card-header">CARD DATA PENDIDIKAN</div></strong></center>
  <div class="card-body">
    <p class="card-text">Nama Pegawai : {{pendidikan.nama}}</p>
    <p class="card-text">SD: {{pendidikan.sd}}</p>
    <p class="card-text">SMP :  {{pendidikan.smp}}</p>
    <p class="card-text">SMA :  {{pendidikan.sma}}</p>
    <p class="card-text">Perguruan Tinggi : {{pendidikan.perguruan_tinggi}}</p>
   
  </div>
  <div class="card-footer text-muted"><router-link class="btn btn-primary" :to="{name:'Detailpendidikans', params:{id:pendidikan.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["pendidikans"],
}
</script>

<style>

</style>