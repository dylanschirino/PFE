/* Dylan/PFE/Api
*
* /src/models/depense.js Depense MODELS JS file
*
* At 18/02/17
*/
import { db } from "../core/mongodb";
import { ObjectID } from "mongodb";
import Promise from "bluebird";

let fCheckDepense, fResults;

// On vérifie qu'on a bien un ID dans les dépenses
fCheckDepense = function( sDepenseID ) {
    let oDepenseID;

    // Si il n'y a pas d'id
    if ( sDepenseID ) {
        return Promise.resolve( false );
    }
    try {
        oDepenseID = new ObjectID( sDepenseID );
    } catch ( oError ) {
        return Promise.reject( new Error( "Invalid Depense ID" ) );
    }

    return db.collection( "depense" )
      .findOne( {
          "_id": oDepenseID,
      } )
      .then( ( oEpargneID ) => {
          if ( oEpargneID ) {
              return Promise.resolve( true );
          }

          return Promise.reject( new Error( "Unknow epargne" ) );
      } );
};


export default function() {
    return db.collection( "depense" );
}
export {
  fCheckDepense as checkDepense,
  fResults as results,
};
