/* Dylan/PFE/Api
*
* /src/controllers/pret/list.js Pret list controllers
*
* At 23/02/17
*/
import getHome from "../../models/home";
import { send, error } from "../../core/utils/api";

export default function( oRequest, oResponse ) {
    let sUserID = oRequest.query.user || "" ;

    if ( !sUserID ) {
        error( oRequest, oResponse, "Mandatory country query params not found!", 400 );
    }
    getHome()
    .find( {
        "user": sUserID,
    } )
    .toArray()
    .then( ( aHome = [] ) => {

        let aCleanHome,
            aHomeToReset = [];

        aCleanHome = aHome.map( ( { _id, month, maxdepense } ) => {
            aHomeToReset.push( _id );

            return {
                "id": _id,
                "month":month,
                "maxdepense": maxdepense,
            };
        } );
        send( oRequest, oResponse, aCleanHome );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
