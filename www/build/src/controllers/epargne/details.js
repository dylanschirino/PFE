/* Dylan/PFE/Api
*
* /src/controllers/epargne/details.js Epargne details controllers
*
* At 23/02/17
*/
import getEpargne from "../../models/epargne";
import { send, error } from "../../core/utils/api";
import { ObjectID } from "mongodb";

export default function( oRequest, oResponse ) {
    let sEpargneID = ( oRequest.params.id || "" ).trim();

    if ( !sEpargneID ) {
        error( oRequest, oResponse, "Invalid pret ID", 400 );
    }

    getEpargne()
    .findOne( {
        "_id": new ObjectID( sEpargneID ),
        "deleted_at": null,
    } )
    .then( ( oEpargne ) => {
        if ( !oEpargne ) {
            return error( oRequest, oResponse, "Unknow Epargne", 404 );
        }

        let { _id, name, montant, mensualite, duree, depart, created_at } = oEpargne,
            oCleanEpargne;

        oCleanEpargne = {
            "id": _id,
            "name": name,
            "montant": montant,
            "mensualite": mensualite,
            "duree": duree,
            "depart": depart,
            "created_at": created_at,
        };
        send( oRequest, oResponse, oCleanEpargne );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
