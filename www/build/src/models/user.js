/* Dylan/PFE/Api
*
* /src/models/user.js User MODELS JS file
*
* At 25/02/17
*/
import { db } from "../core/mongodb";
import { ObjectID } from "mongodb";
import Promise from "bluebird";

let fCheckUser;

// On vérifie qu'on a bien un ID dans les dépenses
fCheckUser = function( sUserID ) {
    let oUserID;

    // Si il n'y a pas d'id
    if ( sUserID ) {
        return Promise.resolve( false );
    }
    try {
        oUserID = new ObjectID( sUserID );
    } catch ( oError ) {
        return Promise.reject( new Error( "Invalid User ID" ) );
    }

    return db.collection( "user" )
      .findOne( {
          "_id": oUserID,
      } )
      .then( ( oUserID ) => {
          if ( oUserID ) {
              return Promise.resolve( true );
          }

          return Promise.reject( new Error( "Unknow user" ) );
      } );
};

export default function() {
    return db.collection( "user" );
}
export {
  fCheckUser as checkUser,
};
