<template>
  <Header/>
  <router-view/>
</template>

<!-- ---------- script ---------- -->

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
