export default {
  template: `
    <div id="art-gallery">
      <input type="text" placeholder="Search.." list="test" v-model="searchText">
      <datalist id="test">
        <option v-for="artName, index in artNames['RESULTS']">{{artName['ARTNAME']}} </option>
      </datalist>
      <button @click="getSearchResults">Search</button>
      <p>Search Text: {{ searchText }}</p> 


      <h6 v-if="artlist['RESULTCOUNT'] > 0">(Count: {{artlist['RESULTCOUNT']}})</h6>
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
      fetch("http://localhost:8500/vue/vueArtGallery/model/data.cfc?method=getArtNames")
      .then(response => response.json())
      .then((data) => {
      this.artNames = data;
      })
    },
      data() {
        return {
          artlist: [],
          artNames: [],
          mediaTypeList: [],
          testList: [],
          searchText: ""
      }
    
    },
    methods: {
      formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          let newval = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
          let dollarsign ='$'        
          return dollarsign.concat(newval)
      },
      getMediaType() {
        fetch("http://localhost:8500/vue/vueArtGallery/model/data.cfc?method=getMedia")
        .then(response => response.json())
        .then((data) => {
          this.mediaTypeList = data;
        })
      },
      getSearchResults() {
        fetch("http://localhost:8500/vue/vueArtGallery/model/data.cfc?method=getArt&searchTerm="+this.searchText)
        .then(response => response.json())
        .then((data) => {
          this.artlist = data;
        })          
      }        
    }
  }