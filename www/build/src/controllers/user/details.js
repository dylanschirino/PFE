/* Dylan/PFE/Api
*
* /src/controllers/user/details.js User details controllers
*
* At 18/02/17
*/
import getUsers from "../../models/user";
import { send, error } from "../../core/utils/api";
import { ObjectID } from "mongodb";

export default function( oRequest, oResponse ) {
    let sUserID = ( oRequest.params.id || "" ).trim();

    if ( !sUserID ) {
        error( oRequest, oResponse, "Invalid user ID", 400 );
    }

    getUsers()
    .findOne( {
        "_id": new ObjectID( sUserID ),
        "deleted_at": null,
    } )
    .then( ( oUser ) => {
        if ( !oUser ) {
            return error( oRequest, oResponse, "Unknow User", 404 );
        }

        let { _id, email, password } = oUser,
            oCleanUser;

        oCleanUser = {
            "id": _id,
            "email": email,
            "password": password,
        };
        send( oRequest, oResponse, oCleanUser );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
