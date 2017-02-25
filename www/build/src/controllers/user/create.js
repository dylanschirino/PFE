/* Dylan/PFE/Api
*
* /src/controllers/user/create.js User create controllers
*
* At 18/02/17
*/
import { ObjectID } from "mongodb";
import getUsers, { checkUser } from "../../models/user";
import { send, error } from "../../core/utils/api";


export default function( oRequest, oResponse ) {

    const POST = oRequest.body;

    let sUserID = new ObjectID(),
        sEmail = POST.email,
        sPassword = POST.password,
        oUser,
        fCreateUser;

    oUser = {
        "created_at": new Date(),
        "updated_at": new Date(),
    };

    // On assigne les données ici
    sEmail && ( oUser.email = sEmail );
    sPassword && ( oUser.password = sPassword );

    fCreateUser = () => {
        return getUsers().insertOne( oUser );
    };

    checkUser( sUserID )
      .then( fCreateUser )
      .then( () => {
          send( oRequest, oResponse, {
              "id": oUser._id,
              "email": oUser.email,
              "password": oUser.password,
          }, 201 );
      } )
      .catch( ( oError ) => {
          error( oRequest, oResponse, oError );
      } );

}
