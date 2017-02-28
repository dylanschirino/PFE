/* Dylan/PFE/Api
*
* /src/models/depense.js Depense MODELS JS file
*
* At 18/02/17
*/
import { db } from "../core/mongodb";
import { ObjectID } from "mongodb";
import Promise from "bluebird";

let fCheckHome;

// On vérifie qu'on a bien un ID dans les dépenses
fCheckHome = function( sHomeID ) {
    let oHomeID;

    // Si il n'y a pas d'id
    if ( sHomeID ) {
        return Promise.resolve( false );
    }
    try {
        oHomeID = new ObjectID( sHomeID );
    } catch ( oError ) {
        return Promise.reject( new Error( "Invalid Home ID" ) );
    }

    return db.collection( "home" )
      .findOne( {
          "_id": oHomeID,
      } )
      .then( ( oHomeID ) => {
          if ( oHomeID ) {
              return Promise.resolve( true );
          }

          return Promise.reject( new Error( "Unknow depense" ) );
      } );
};

export default function() {
    return db.collection( "home" );
}
export {
  fCheckHome as checkHome,
};
