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
const map = new ArcGISMap({
      basemap: "arcgis-topographic" // Basemap layer service
    });
    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
    });
export default {
  name: 'Info',
  props: ['id'],
}
</script>

<style scoped>
  @import "https://js.arcgis.com/4.19/@arcgis/core/assets/esri/themes/light/main.css";
  #viewDiv {
    border: 1px solid black;
        padding: 0;
        margin: 0;
        height: 80vh;
        width: 80vw;
      }
</style>