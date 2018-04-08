<cfcomponent output="false"  >
<cfset variables.dsn = "cfartgallery" />

<!---    Date: 4/6/2018 Usage: getData --->
    <cffunction name="getData" output="false" access="remote" returntype="any" returnformat="plain" hint="getData">
        <cfargument name="searchTerm" type="any" required="false"/>
        <cfset var getArt = ""/>

        <cfquery name="getArt" datasource="cfartgallery">
            SELECT a.ARTID, a.ARTNAME, a.DESCRIPTION, a.ISSOLD, a.LARGEIMAGE, m.MEDIATYPE, a.PRICE
            FROM ART a, MEDIA m
            WHERE a.MEDIAID = m.MEDIAID
            <cfif structKeyExists(arguments,"searchTerm") and len(trim(arguments.searchTerm))>
                and upper(a.DESCRIPTION) like upper(<cfqueryparam cfsqltype="cf_sql_varchar" value="%#arguments.searchTerm#%" />)
            </cfif>
            ORDER BY a.PRICE DESC
        </cfquery>
        
        <cfset var qryStruct = structNew() />
        <cfset qryStruct.resultCount = getArt.recordCount />
        <cfset qryStruct.results = getArt />
        
        <cfreturn serializeJSON(qryStruct, "struct") />
    </cffunction>
<!--- &returnformat=json&queryformat=struct put into calling url --->
</cfcomponent>