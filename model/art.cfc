component {

  //
  variables.dsn = "cfartgallery";

  // Search through the Art by name
  remote any function getArt(string searchTerm) {
    var q = new query();
    q.setDatasource(variables.dsn);
    q.addParam(name="searchParam",value="%" & LCase(arguments.searchTerm) & "%", CFSQLTYPE="CF_SQL_VARCHAR");
    var qString = 'SELECT  a.* FROM ART a, MEDIA m WHERE a.MEDIAID = m.MEDIAID and LOWER(a.artname) like :searchParam'; 
    q.setSQL(qString);
    // This sets the return of this function to json format
    url.returnformat = 'json';
    return q.execute().getResult();
  }

  // get a list of the names of the Art
  remote any function getArtNames() {
    var get_results = new query(datasource=variables.dsn,sql="SELECT ARTNAME FROM ART ORDER BY lower(ARTNAME) ASC").execute().getResult(); 
    // Create array to stroe the list of names
    var results = ArrayNew(1);
    // Add each item to the array
    for (result in get_results) {
        arrayAppend(results, result.artname);
    }
    // This sets the return of this function to json format
    url.returnformat = 'json';
    return results;
  }
}

