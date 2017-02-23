/* Dylan/PFE/Api
*
* /src/models/pret.js Pret MODELS JS file
*
* At 23/02/17
*/
import { db } from "../core/mongodb";
import { ObjectID } from "mongodb";
import Promise from "bluebird";

let fCheckPret;

// On vérifie qu'on a bien un ID dans les prêt
fCheckPret = function( sPretID ) {
    let oPretID;

    // Si il n'y a pas d'id
    if ( sPretID ) {
        return Promise.resolve( false );
    }
    try {
        oPretID = new ObjectID( sPretID );
    } catch ( oError ) {
        return Promise.reject( new Error( "Invalid Pret ID" ) );
    }

    return db.collection( "pret" )
      .findOne( {
          "_id": oPretID,
      } )
      .then( ( oPretID ) => {
          if ( oPretID ) {
              return Promise.resolve( true );
          }

          return Promise.reject( new Error( "Unknow pret" ) );
      } );
};

export default function() {
    return db.collection( "pret" );
}
export {
  fCheckPret as checkPret,
};
