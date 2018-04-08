import GalleryList from "./galleryList.js";

export default {
  template: `
  <div>
    <div v-for="a, i in artlist['RESULTS']">
      <b>Art ID:</b>  {{a['ARTID']}}
      <b>Art Name:</b>  {{a['ARTNAME']}}
      <b>Description:</b>  {{a['DESCRIPTION']}}
      <b>issold:</b>  {{a['ISSOLD']}}
      <b>Large Image:</b>  {{a['LARGEIMAGE']}}
      <b>Media Type:</b>  {{a['MEDIATYPE']}}
      <b>Price:</b>  {{a['PRICE']}}
      <hr />
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
