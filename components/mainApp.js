
export default {
  template: `
  <div>
    <ul>
      <li><a href="#" @click.prevent="displayThis('artList')">Art List</a></li>
    </ul>
  </div>
  `,
  components: {
  },
    data() {
    return {
      artlist: [],
    }
  },
  methods: {
    displayArtList() {
      alert('test');
    },
    displayThis(view) {
      if(view = 'artlist') {
        
      }
    }
  }
}
