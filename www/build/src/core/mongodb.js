/* Dylan/PFE/Api
*
* /src/core/mongodb.js MongoDB JS file
*
* At 18/02/17
*/
import { MongoClient } from "mongodb";
import Promise from "bluebird";
import zouti from "zouti";

const MONGO_URL = "mongodb://127.0.0.1/api";

let oDB, fInit;

// Fonction d'initialisation de la base de données
fInit = function() {
    return new Promise( ( fResolve, fReject ) => {
        MongoClient.connect( MONGO_URL, ( oError, oLinkedDB ) => {

            if ( oError ) {
                return fReject( oError );
            }
            // Si y a pas d'erreur on affiche le message de connection
            zouti.success( "Connected to DB", "API" );
            fResolve( oDB = oLinkedDB );
        } );
    } );
};


export {
  fInit as init,
  oDB as db,
};
