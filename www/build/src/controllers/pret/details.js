/* Dylan/PFE/Api
*
* /src/controllers/pret/details.js Pret details controllers
*
* At 23/02/17
*/
import getPret from "../../models/pret";
import { send, error } from "../../core/utils/api";
import { ObjectID } from "mongodb";

export default function( oRequest, oResponse ) {
    let sPretID = ( oRequest.params.id || "" ).trim();

    if ( !sPretID ) {
        error( oRequest, oResponse, "Invalid pret ID", 400 );
    }

    getPret()
    .findOne( {
        "_id": new ObjectID( sPretID ),
        "deleted_at": null,
    } )
    .then( ( oPret ) => {
        if ( !oPret ) {
            return error( oRequest, oResponse, "Unknow Pret", 404 );
        }

        let { _id, name, montant, interet, mensualite, duree, debut, created_at } = oPret,
            oCleanPret;

        oCleanPret = {
            "id": _id,
            "name": name,
            "montant": montant,
            "interet": interet,
            "mensualite": mensualite,
            "duree": duree,
            "debut": debut,
            "created_at": created_at,
        };
        send( oRequest, oResponse, oCleanPret );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
