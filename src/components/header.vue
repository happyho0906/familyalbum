<template>
  <nav id="nav">
    <div class="container">
      <div class="logo">
        <img src="../assets/imgs/camera.png" alt="" />
        <h1 class="logoText">the Hou's family album</h1>
      </div>
      <NavOptions />
    </div>
  </nav>
</template>

<script>
import NavOptions from './NavOptions.vue';
export default {
  name: 'Header',
  components: {
    NavOptions
  }
}
</script>