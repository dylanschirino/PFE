/* Dylan/PFE/Api
*
* /src/controllers/epargne/list.js Epargne list controllers
*
* At 23/02/17
*/
import getEpargne from "../../models/epargne";
import { send, error } from "../../core/utils/api";

export default function( oRequest, oResponse ) {

    getEpargne()
    .find()
    .toArray()
    .then( ( aEpargne = [] ) => {

        let aCleanEpargne,
            aEpargneToReset = [];

        aCleanEpargne = aEpargne.map( ( { _id, name, montant, mensualite, duree, depart } ) => {
            aEpargneToReset.push( _id );

            return {
                "id": _id,
                "name": name,
                "montant": montant,
                "mensualite": mensualite,
                "duree": duree,
                "depart": depart,
            };
        } );
        send( oRequest, oResponse, aCleanEpargne );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
