/* Dylan/PFE/Api
*
* /src/controllers/pret/list.js Pret list controllers
*
* At 23/02/17
*/
import getPret from "../../models/pret";
import { send, error } from "../../core/utils/api";

export default function( oRequest, oResponse ) {

    getPret()
    .find()
    .toArray()
    .then( ( aPret = [] ) => {

        let aCleanPret,
            aPretToReset = [];

        aCleanPret = aPret.map( ( { _id, name, montant, interet, mensualite, duree, depart } ) => {
            aPretToReset.push( _id );

            return {
                "id": _id,
                "name": name,
                "montant": montant,
                "interet": interet,
                "mensualite": mensualite,
                "duree": duree,
                "depart": depart,
            };
        } );
        send( oRequest, oResponse, aCleanPret );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
