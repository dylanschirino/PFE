/* Dylan/PFE/Api
*
* /src/controllers/depense/list.js Users list controllers
*
* At 18/02/17
*/
import getUsers from "../../models/user";
import { send, error } from "../../core/utils/api";

export default function( oRequest, oResponse ) {

    getUsers()
    .find()
    .toArray()
    .then( ( aUsers = [] ) => {

        let aCleanUsers,
            aUsersToReset = [];

        aCleanUsers = aUsers.map( ( { _id, email, password } ) => {
            aUsersToReset.push( _id );

            return {
                "id": _id,
                "email": email,
                "password": password,
            };
        } );
        send( oRequest, oResponse, aCleanUsers );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
