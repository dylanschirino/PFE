/* Dylan/PFE/Api
*
* /src/controllers/user/list.js Users list controllers
*
* At 18/02/17
*/
import getUsers from "../../models/user";
import { send, error } from "../../core/utils/api";

export default function( oRequest, oResponse ) {

  let sUserID = oRequest.query.user || "";

  if ( sUserID !="dylan.schirino@hotmail.fr" ) {
      error( oRequest, oResponse, "Vous n'avez pas le droit d'être ici!", 400 );
  }
  else{
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
}
