/* Dylan/PFE/Api
*
* /src/controllers/epargne/destroy.js Epargne destroy controllers
*
* At 23/02/17
*/
import { ObjectID } from "mongodb";
import getEpargne from "../../models/epargne";
import { send, error } from "../../core/utils/api";

export default function( oRequest, oResponse ) {
    let oEpargneID;

    try {
        oEpargneID = new ObjectID( oRequest.params.id );
    } catch ( oError ) {
        return error( oRequest, oResponse, new Error( "Invalid ID!" ), 400 );
    }

    getEpargne()
    .deleteOne( {
        "_id": oEpargneID,
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
