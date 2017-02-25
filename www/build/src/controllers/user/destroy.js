/* Dylan/PFE/Api
*
* /src/controllers/depense/destroy.js Depense destroy controllers
*
* At 18/02/17
*/
import { ObjectID } from "mongodb";
import getDepenses from "../../models/depense";
import { send, error } from "../../core/utils/api";

export default function( oRequest, oResponse ) {
    let oDepenseID;

    try {
        oDepenseID = new ObjectID( oRequest.params.id );
    } catch ( oError ) {
        return error( oRequest, oResponse, new Error( "Invalid ID!" ), 400 );
    }

    getDepenses()
    .deleteOne( {
        "_id": oDepenseID,
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
