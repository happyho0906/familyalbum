<template>
  <div class="navOptions">
    <router-link to="/intro"><span @click="toTop">intro</span></router-link>
    <router-link to="/design"><span @click="toTop">design</span></router-link>
    <router-link to="/theory"><span @click="toTop">theory</span></router-link>
    <router-link to="/concept"><span @click="toTop">concept</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'NavOption',
  methods: {
    toTop: () => window.scrollTo({ top: 0 })
  }
}
</script>