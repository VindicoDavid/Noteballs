<script setup>
import NavBar from '@/components/Layout/NavBar.vue'


</script>

<template>
    <NavBar/>

    <div classs="container is-max-desktop px-2 py-4">
      <RouterView/>
    </div>

  <!-- <RouterLink to="/stats" class="button">Stats</RouterLink>|

  <RouterLink to="/" class="button">Notes</RouterLink> -->



</template>

<style>
@import 'bulma/css/bulma.min.css'
</style>

