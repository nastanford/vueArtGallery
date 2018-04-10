import MainApp from "./components/mainApp.js";
import GalleryList from "./components/galleryList.js";

new Vue({
  el: '#app',
  components: {
    'main-app': MainApp,
    'gallery-list': GalleryList
  },
  data() {
    return {
      displayMainApp:false,
      displayGalleryList:true
    }
  },
});
