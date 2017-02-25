/* Dylan/PFE/Api
*
* /src/controllers/depense/destroy.js User destroy controllers
*
* At 18/02/17
*/
import { ObjectID } from "mongodb";
import getUsers from "../../models/user";
import { send, error } from "../../core/utils/api";

export default function( oRequest, oResponse ) {
    let oUserID;

    try {
        oUserID = new ObjectID( oRequest.params.id );
    } catch ( oError ) {
        return error( oRequest, oResponse, new Error( "Invalid ID!" ), 400 );
    }

    getUsers()
    .deleteOne( {
        "_id": oUserID,
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
