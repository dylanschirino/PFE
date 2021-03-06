/* Dylan/PFE/Api
*
* /src/controllers/pret/list.js Pret list controllers
*
* At 23/02/17
*/
import getPret from "../../models/pret";
import { send, error } from "../../core/utils/api";

export default function( oRequest, oResponse ) {
    let sUserID = oRequest.query.user || "" ;

    if ( !sUserID ) {
        error( oRequest, oResponse, "Mandatory country query params not found!", 400 );
    }
    getPret()
    .find( {
        "user": sUserID,
    } )
    .toArray()
    .then( ( aPret = [] ) => {

        let aCleanPret,
            aPretToReset = [];

        aCleanPret = aPret.map( ( { _id, name, montant, interet, mensualite, duree, depart,end } ) => {
            aPretToReset.push( _id );

            return {
                "id": _id,
                "name": name,
                "montant": montant,
                "interet": interet,
                "mensualite": mensualite,
                "duree": duree,
                "depart": depart,
                "end":end,
            };
        } );
        send( oRequest, oResponse, aCleanPret );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
