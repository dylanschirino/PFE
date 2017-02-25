/* Dylan/PFE/Api
*
* /src/controllers/depense/details.js Depense details controllers
*
* At 18/02/17
*/
import getDepenses from "../../models/depense";
import { send, error } from "../../core/utils/api";
import { ObjectID } from "mongodb";

export default function( oRequest, oResponse ) {
    let sDepenseID = ( oRequest.params.id || "" ).trim();

    if ( !sDepenseID ) {
        error( oRequest, oResponse, "Invalid depense ID", 400 );
    }

    getDepenses()
    .findOne( {
        "_id": new ObjectID( sDepenseID ),
        "deleted_at": null,
    } )
    .then( ( oDepense ) => {
        if ( !oDepense ) {
            return error( oRequest, oResponse, "Unknow Depense", 404 );
        }

        let { _id, name, montant, repeater, categorie, created_at, payement } = oDepense,
            oCleanDepense;

        oCleanDepense = {
            "id": _id,
            "name": name,
            "montant": montant,
            "categorie": categorie,
            "payement": payement,
            "repeater": repeater,
            "created_at": created_at,
        };
        send( oRequest, oResponse, oCleanDepense );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
