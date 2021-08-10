<template>
  <div class="page">
    <p>Info</p>
    <div id="viewDiv"></div>
  </div>
</template>

<script>
import ArcGISMap from '@arcgis/core/Map';
//import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

export default {
  name: 'Info',
  props: ['id'],
  methods:{
    buildMap: async function(){
      const map = new ArcGISMap({
        basemap: "arcgis-topographic" // Basemap layer service,
      });
      const view = new MapView({
        map: map,
        center: [-118.805, 34.027], // Longitude, latitude
        zoom: 13, // Zoom level
        container: "viewDiv" // Div element
      });
      const testLayer = new FeatureLayer({
        url: "https://ococeldpfdxg0rsk.maps.arcgis.com/home/item.html?id=4967dac3e13e4361be7b9f14cb4e631e"
      });
      map.add(testLayer, 0);
    }
  },
  mounted(){
    this.buildMap();
  }
}
</script>

<style scoped>
  @import "https://js.arcgis.com/4.19/@arcgis/core/assets/esri/themes/dark/main.css";
  #viewDiv {
        padding: 0;
        margin: 0;
        height: 80vh;
        width: 80vw;
      }
</style>