<template>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Program Profile</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/profiles">Data Profile </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/pendidikans">History Pendidikan</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="">Pengalaman Kerja</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="">Kontak</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {};
</script>

<style>
</style>
