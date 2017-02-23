/* Dylan/PFE/Api
*
* /src/models/epargne.js Epargne MODELS JS file
*
* At 23/02/17
*/
import { db } from "../core/mongodb";
import { ObjectID } from "mongodb";
import Promise from "bluebird";

let fCheckEpargne;

// On vérifie qu'on a bien un ID dans les dépenses
fCheckEpargne = function( sEpargneID ) {
    let oEpargneID;

    // Si il n'y a pas d'id
    if ( sEpargneID ) {
        return Promise.resolve( false );
    }
    try {
        oEpargneID = new ObjectID( sEpargneID );
    } catch ( oError ) {
        return Promise.reject( new Error( "Invalid Epargne ID" ) );
    }

    return db.collection( "epargne" )
      .findOne( {
          "_id": oEpargneID,
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
  fCheckEpargne as checkEpargne,
};
