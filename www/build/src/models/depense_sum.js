/* Dylan/PFE/Api
*
* /src/models/depense.js DepenseSum MODELS JS file
*
* At 18/02/17
*/
import { db } from "../core/mongodb";
import { ObjectID } from "mongodb";
import Promise from "bluebird";

let fCheckDepenseSum, fResults;

// On vérifie qu'on a bien un ID dans les dépenses
fCheckDepenseSum = function( sDepenseSumID ) {
    let oDepenseSumID;

    // Si il n'y a pas d'id
    if ( sDepenseSumID ) {
        return Promise.resolve( false );
    }
    try {
        oDepenseSumID = new ObjectID( sDepenseSumID );
    } catch ( oError ) {
        return Promise.reject( new Error( "Invalid DepenseSum ID" ) );
    }

    return db.collection( "depense_sum" )
      .findOne( {
          "_id": oDepenseSumID,
      } )
      .then( ( oEpargneID ) => {
          if ( oEpargneID ) {
              return Promise.resolve( true );
          }

          return Promise.reject( new Error( "Unknow epargne" ) );
      } );
};


export default function() {
    return db.collection( "depense_sum" );
}
export {
  fCheckDepenseSum as checkDepenseSum,
  fResults as results,
};
