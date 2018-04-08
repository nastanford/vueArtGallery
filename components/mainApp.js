import GalleryList from "./galleryList.js";

export default {
  template: `
  <div>
    Main App
    <ul>
      <li v-for="art in artlist.results">{{art.artname}}</li>
    </ul>
  <div>
  {{artlist}}
  </div>

  </div>
  `,
  components: {
  },
  mounted() {
    fetch("http://localhost:8500/vue/vueArtGallery/model/data.cfc?method=getData&searchTerm=")
    .then(response => response.json())
    .then((data) => {
      this.artlist = data;
    })
  },
    data() {
      
    return {
      artlist: [],
    }
  
  }
}