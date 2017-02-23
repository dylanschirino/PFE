/* Dylan/PFE/Api
*
* /src/controllers/pret/destroy.js Pret destroy controllers
*
* At 23/02/17
*/
import { ObjectID } from "mongodb";
import getPret from "../../models/pret";
import { send, error } from "../../core/utils/api";

export default function( oRequest, oResponse ) {
    let oPretID;

    try {
        oPretID = new ObjectID( oRequest.params.id );
    } catch ( oError ) {
        return error( oRequest, oResponse, new Error( "Invalid ID!" ), 400 );
    }

    getPret()
    .deleteOne( {
        "_id": oPretID,
    } )
    .then( ( { deletedCount } ) => {
        if ( deletedCount === 1 ) {
          // On supprime
            return send( oRequest, oResponse, "", 204 );
        }

        return error( oRequest, oResponse, "Unknow deletion error", 500 );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
