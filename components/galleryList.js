export default {
  template: `
    <div id="art-gallery">
      <input type="text" placeholder="Search.." id="gallerySearch">
      <h6>(Count: {{artlist['RESULTCOUNT']}})</h6>
      <div v-for="a, i in artlist['RESULTS']">
        <!-- <b>Art ID:</b>  {{a['ARTID']}} -->
        [{{a['ARTID']}}] {{a['ARTNAME']}} {{a['DESCRIPTION']}} ({{a['MEDIATYPE']}})
        <!-- <b>issold:</b>  {{a['ISSOLD']}}
        <b>Large Image:</b>  {{a['LARGEIMAGE']}}
        <b>Media Type:</b>  {{a['MEDIATYPE']}} -->
        {{ formatPrice(a['PRICE']) }}
      </div>
    </div>
    `,
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
