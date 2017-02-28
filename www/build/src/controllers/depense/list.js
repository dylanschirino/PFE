/* Dylan/PFE/Api
*
* /src/controllers/depense/list.js Depense list controllers
*
* At 18/02/17
*/
import getDepenses from "../../models/depense";
import { send, error } from "../../core/utils/api";
import { db } from "../../core/mongodb";
export default function( oRequest, oResponse ) {

    getDepenses().aggregate( [ {
        $group: {
            _id: "",
            total: {
                $sum: "$montant",
            },
        },
    },
    {
        $out: "depense_sum",
    },
    ] )
    .toArray()
    .then( () => {
        return Promise.resolve( true );
    } );


    getDepenses()
    .find()
    .toArray()
    .then( ( aDepenses = [] ) => {

        let aCleanDepense,
            aDepenseToReset = [];


        aCleanDepense = aDepenses.map( ( { _id, name, montant, repeater, payement } ) => {
            aDepenseToReset.push( _id );

            return {
                "id": _id,
                "name": name,
                "montant": montant,
                "payement": payement,
                "repeater": repeater,
            };
        } );

        send( oRequest, oResponse, aCleanDepense );

    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
