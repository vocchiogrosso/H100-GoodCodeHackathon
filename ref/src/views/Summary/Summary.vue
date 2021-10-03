<template>
  <div class="page">
    <NavBar id="navbar"/>
    <Changes id="changes"/>
    <Map id="map"/>
  </div>
</template>

<script>
import Changes from './components/Changes/Changes.vue';
import Map from './components/Map/Map.vue';
import NavBar from './components/NavBar/NavBar.vue';
export default {
  name: 'Summary',
  components:{
    Changes,
    Map,
    NavBar
  },
  props: ['id'],
  methods:{
   
  },
  mounted(){

  }
}
</script>

<style scoped>
  #changes {
    background-color: blue;
    position: absolute;
    left: 0vw;
    top: 10vh;
    height: 90vh;
    width: 40vw;
  }

  #map {
    background-color: red;
    position: absolute;
    left: 40vw;
    top: 10vh;
    height: 90vh;
    width: 60vw;
  }

  #navbar{
    background-color: green;
    position: absolute;
    left: 0;
    top: 0;
    height: 10vh;
    width: 100vw;
  }
</style>