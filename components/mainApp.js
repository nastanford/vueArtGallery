import GalleryList from "./galleryList.js";

export default {
  template: `
  <div>
    <gallery-list></gallery-list>
  </div>

  `,
  components: {
    'gallery-list': GalleryList
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
  
  },
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        let newval = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        let dollarsign ='$'        
        return dollarsign.concat(newval)
    }
  }
}
