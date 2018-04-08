export default {
  template: `
    <div id="add-blog">
      <h2>Add a New Blog Post</h2>
      <form>
        <label>Blog Title</label>
        <input type="text" v-model.lazy="blog.title" required />
        <label>Blog Content</label>
        <textarea v-model.lazy="blog.content"></textarea>    
        <div class="checkboxes">
          <label>Red</label>
          <input type="checkbox" value="red" v-model="blog.categories"/>
          <label>Blue</label>
          <input type="checkbox" value="blue" v-model="blog.categories"/>
          <label>Green</label>
          <input type="checkbox" value="green" v-model="blog.categories"/>
          <label>Yellow</label>
          <input type="checkbox" value="yellow" v-model="blog.categories"/>
        </div>
        <label>Author:</label>
        <select v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>
      </form>
      <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{ blog.title }}</p>
        <p>Blog Author: {{ blog.author }}</p>
        <p>Blog Content:</p>
        <p>{{ blog.content }}</p>
        <p>Blog Categories:</p>
        <ul>
          <li v-for="category in blog.categories">{{category}}</li>
        </ul>
      </div>
    </div>

    `,
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""          
      },
      authors:[
        'Jim Sample',
        'Nick Carter',
        'Rock Johnson',
        'Tom Motes'
      ]      
    }
  },
  methods: {
    
  }
}
