/* Dylan/PFE/Api
*
* /src/controllers/depense/update.js Depense update controllers
*
* At 18/02/17
*/
import { ObjectID } from "mongodb";
import getDepenses, { checkDepense } from "../../models/depense";
import { send, error } from "../../core/utils/api";

const PAYEMENT = [ "cash", "carte" ];

export default function( oRequest, oResponse ) {

    const POST = oRequest.body;

    let sDepenseID,
        sName = POST.name,
        iMontant = +POST.montant,
        aCategorie = POST.categorie,
        sPayement = POST.payement,
        bRepeater = POST.repeater,
        month = POST.month,
        aModification = [];

    try {
        sDepenseID = new ObjectID( oRequest.params.id );
    } catch ( oError ) {
        return error( oRequest, oResponse, new Error( "Invalid ID!" ), 400 );
    }

    getDepenses()
    .findOne( {
        "_id": sDepenseID,
    } )
    .then( ( oDepense ) => {
        if ( !oDepense ) {
            return error( oRequest, oResponse, new Error( "Unknow Depense" ), 400 );
        }
        // On check et on modifie ici
        if ( sName ) {
            oDepense.name = sName;
            oDepense.slug = sName;
            aModification.push( "name", "slug" );
        }
        if ( iMontant ) {
            oDepense.montant = iMontant;
            aModification.push( "montant" );
        }
        if ( aCategorie ) {
            oDepense.categorie = aCategorie;
            aModification.push( "categorie" );
        }
        if ( PAYEMENT.indexOf( sPayement ) === -1 ) {
            return error( oRequest, oResponse, "Invalid payement method : Must be carte or cash", 400 );
        }
        if ( sPayement ) {
            oDepense.payement = sPayement;
            aModification.push( "payement" );
        }
        if ( bRepeater ) {
            oDepense.repeater = bRepeater;
            aModification.push( "repeater" );
        }
        if ( month ) {
            oDepense.month = month;
            aModification.push( "month" );
        }

        return checkDepense( sDepenseID ).then( () => {
            let oModificationToApply = {};

            if ( aModification.length === 0 ) {
                return error( oRequest, oResponse, new Error( "No changes" ), 400 );
            }
            aModification.forEach( ( sPropertyName ) => {
                oModificationToApply[ sPropertyName ] = oDepense[ sPropertyName ];
            } );

            oModificationToApply.updated_at = new Date();

            return getDepenses()
            .updateOne( {
                "_id": oDepense._id,
            },
                {
                    "$set": oModificationToApply,
                } )
           .then( ( { matchedCount, modifiedCount } ) => {
               if ( matchedCount !== 1 || modifiedCount !== 1 ) {
                   return error( oRequest, oResponse, new Error( "Unknown save error" ), 500 );
               }

               return send( oRequest, oResponse, null, 204 );
           } );
        } );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );

}
