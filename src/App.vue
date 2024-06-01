<template>
  <Header/>
  <router-view/>
</template>

<!-- ---------- script ---------- -->

<script>
import Header from './components/Header.vue'
import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
