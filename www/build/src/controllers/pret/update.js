/* Dylan/PFE/Api
*
* /src/controllers/pret/update.js Pret update controllers
*
* At 23/02/17
*/
import { ObjectID } from "mongodb";
import getPret, { checkPret } from "../../models/pret";
import { send, error } from "../../core/utils/api";


export default function( oRequest, oResponse ) {

    const POST = oRequest.body;

    let sPretID,
        sName = ( POST.name || "Pret sans nom" ).trim(),
        iMontant = +POST.montant,
        iMensualite = +POST.mensualite,
        iInteret = +POST.interet / 100,
        dDateDepart = POST.depart,
        dDuree = Math.log( -iMensualite / ( ( ( iInteret / 12 ) * iMontant ) - iMensualite ) ) / Math.log( 1 + ( iInteret / 12 ) ),
        aModification = [];

    try {
        sPretID = new ObjectID( oRequest.params.id );
    } catch ( oError ) {
        return error( oRequest, oResponse, new Error( "Invalid ID!" ), 400 );
    }

    getPret()
    .findOne( {
        "_id": sPretID,
    } )
    .then( ( oPret ) => {
        if ( !oPret ) {
            return error( oRequest, oResponse, new Error( "Unknow Pret" ), 400 );
        }
        // On check et on modifie ici
        if ( sName ) {
            oPret.name = sName;
            oPret.slug = sName;
            aModification.push( "name", "slug" );
        }
        if ( iMontant ) {
            oPret.montant = iMontant;
            aModification.push( "montant" );
        }
        if ( iMensualite ) {
            oPret.mensualite = iMensualite;
            aModification.push( "mensualite" );
        }
        if ( iInteret ) {
            oPret.interet = iInteret;
            aModification.push( "interet" );
        }
        if ( dDateDepart ) {
            oPret.depart = dDateDepart;
            aModification.push( "depart" );
        }
        if ( dDuree ) {
            oPret.duree = dDuree;
            aModification.push( "duree" );
        }

        return checkPret( sPretID ).then( () => {
            let oModificationToApply = {};

            if ( aModification.length === 0 ) {
                return error( oRequest, oResponse, new Error( "No changes" ), 400 );
            }
            aModification.forEach( ( sPropertyName ) => {
                oModificationToApply[ sPropertyName ] = oPret[ sPropertyName ];
            } );

            oModificationToApply.updated_at = new Date();

            return getPret()
            .updateOne( {
                "_id": oPret._id,
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
