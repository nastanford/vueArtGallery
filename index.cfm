<cfinclude template="./includes/header.cfm">
  <div id="app">
    <div v-if="displayMainApp">
      <main-app></main-app>
    </div>
    <div v-if="displayGalleryList">
      <gallery-list></gallery-list>
    </div>
  </div>
<script type="module" src="app.js"></script>
<cfinclude template="./includes/footer.cfm">