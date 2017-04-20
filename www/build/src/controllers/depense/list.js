/* Dylan/PFE/Api
*
* /src/controllers/depense/list.js Depense list controllers
*
* At 18/02/17
*/
import getDepenses from "../../models/depense";
import { send, error } from "../../core/utils/api";
export default function( oRequest, oResponse ) {
    let sUserID = oRequest.query.user || "" ;

    if ( !sUserID ) {
        error( oRequest, oResponse, "Mandatory country query params not found!", 400 );
    }

    getDepenses().aggregate( [ {
        $match: { user: sUserID },
    },
    {
        $group: {
            _id: sUserID,
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
    .find( {
        "user": sUserID,
    } )
    .toArray()
    .then( ( aDepenses = [] ) => {

        let aCleanDepense,
            aDepenseToReset = [];


        aCleanDepense = aDepenses.map( ( { _id, name, montant, repeater, payement, created_at } ) => {
            aDepenseToReset.push( _id );

            return {
                "id": _id,
                "name": name,
                "montant": montant,
                "payement": payement,
                "repeater": repeater,
                "created_at":created_at,
            };
        } );

        send( oRequest, oResponse, aCleanDepense );

    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
