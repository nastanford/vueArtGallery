export default {
  template: `
    <div id="art-gallery">
      <input type="text" placeholder="Search.." list="test" v-model="searchText" @keyup.enter="getSearchResults">
      <datalist id="test">
        <option v-for="artName, index in artNames['RESULTS']">{{artName['ARTNAME']}} </option>
      </datalist>
      <button @click="getSearchResults">Search</button>
      <div v-if="artlist['RESULTCOUNT'] > 0">
        <h5>(Count: {{artlist['RESULTCOUNT']}})</h5>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="a, i in artlist['RESULTS']">
              <th scope="row">{{a['ARTID']}}</th>
              <td>{{a['ARTNAME']}}</td>
              <td>{{a['DESCRIPTION']}}</td>
              <td>{{a['MEDIATYPE']}}</td>
              <td>{{ formatPrice(a['PRICE']) }}</td>
            </tr>
          </tbody>
        </table>
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