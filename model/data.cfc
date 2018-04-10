<cfcomponent output="false"  >
<cfset variables.dsn = "cfartgallery" />

    <!--- Search the Art by Art Name --->
    <cffunction name="getArt" output="false" access="remote" returntype="any" returnformat="plain" hint="Search the Art by Art Name">
        <cfargument name="searchTerm" type="any" required="false"/>
        <cfset var getArt = ""/>

        <cfquery name="getArt" datasource="cfartgallery">
            SELECT a.ARTID, a.ARTNAME, a.DESCRIPTION, a.ISSOLD, a.LARGEIMAGE, m.MEDIATYPE, a.PRICE
            FROM ART a, MEDIA m
            WHERE a.MEDIAID = m.MEDIAID
            <cfif structKeyExists(arguments,"searchTerm") and len(trim(arguments.searchTerm))>
                and upper(a.ARTNAME) like upper(<cfqueryparam cfsqltype="cf_sql_varchar" value="%#arguments.searchTerm#%" />)
            </cfif>
            ORDER BY lower(a.ARTNAME) ASC
        </cfquery>
        
        <cfset var qryStruct = structNew() />
        <cfset qryStruct.resultCount = getArt.recordCount />
        <cfset qryStruct.results = getArt />
        
        <cfreturn serializeJSON(qryStruct, "struct") />
    </cffunction>

    <!--- Get Art Names --->
    <cffunction name="getArtNames" output="false" access="remote" returntype="any" returnformat="plain" hint="Search the Art by Art Name">
        <cfset var results = ""/>

        <cfquery name="results" datasource="cfartgallery">
            SELECT a.ARTNAME
            FROM ART a
            ORDER BY lower(a.ARTNAME) ASC
        </cfquery>
        
        <cfset var qryStruct = structNew() />
        <cfset qryStruct.resultCount = results.recordCount />
        <cfset qryStruct.results = results />
        
        <cfreturn serializeJSON(qryStruct, "struct") />
    </cffunction>

    <!--- Get the List of the Media Types --->
    <cffunction name="getMedia" output="false" access="remote" returntype="any" returnformat="plain" hint="Get List of Media Types">
        <cfargument name="searchTerm" type="any" required="false"/>
        <cfset var getMedia = ""/>

        <cfquery name="getMedia" datasource="cfartgallery">
            SELECT m.MEDIAID, m.MEDIATYPE 
            FROM MEDIA m
            ORDER BY lower(m.MEDIATYPE) ASC
        </cfquery>
        
        <cfset var qryStruct = structNew() />
        <cfset qryStruct.resultCount = getMedia.recordCount />
        <cfset qryStruct.results = getMedia />
        
        <cfreturn serializeJSON(qryStruct, "struct") />
    </cffunction>

</cfcomponent>