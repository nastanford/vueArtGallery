<!DOCTYPE html>
<html>
<head>
  <title>Vue.js Single-File JavaScript Component Demo</title>
  <script src="./js/vue.js"></script>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container"><div class="navbar-header">
      <a href="#" class="navbar-brand">Nathan Stanford Sr</a>
    </div>
  </nav>
  <div class="container">
    <div class="jumbotron">
      <h1>Vue Art Gallery </h1>
      <p>
        This example was created using a Vue and the backend of ColdFusion 
        with a default sample database that is installed when you install 
        ColdFusion
      </p>
    </div>

    <div>
      <input type="text" placeholder="Search..">
    </div>

  <div id="app">
    <main-app></main-app>
  </div>
<script type="module" src="app.js"></script>
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</body>
</html>