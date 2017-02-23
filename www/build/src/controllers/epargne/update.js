/* Dylan/PFE/Api
*
* /src/controllers/epargne/update.js Epargne update controllers
*
* At 23/02/17
*/
import { ObjectID } from "mongodb";
import getEpargne, { checkEpargne } from "../../models/epargne";
import { send, error } from "../../core/utils/api";


export default function( oRequest, oResponse ) {

    const POST = oRequest.body;

    let sEpargneID,
        sName = ( POST.name || "Epargne sans nom" ).trim(),
        iMontant = +POST.montant,
        iMensualite = +POST.mensualite,
        dDateDepart = POST.depart,
        dDuree = iMontant / iMensualite,
        aModification = [];

    try {
        sEpargneID = new ObjectID( oRequest.params.id );
    } catch ( oError ) {
        return error( oRequest, oResponse, new Error( "Invalid ID!" ), 400 );
    }

    getEpargne()
    .findOne( {
        "_id": sEpargneID,
    } )
    .then( ( oEpargne ) => {
        if ( !oEpargne ) {
            return error( oRequest, oResponse, new Error( "Unknow Epargne" ), 400 );
        }
        // On check et on modifie ici
        if ( sName ) {
            oEpargne.name = sName;
            oEpargne.slug = sName;
            aModification.push( "name", "slug" );
        }
        if ( iMontant ) {
            oEpargne.montant = iMontant;
            aModification.push( "montant" );
        }
        if ( iMensualite ) {
            oEpargne.mensualite = iMensualite;
            aModification.push( "mensualite" );
        }
        if ( dDateDepart ) {
            oEpargne.depart = dDateDepart;
            aModification.push( "depart" );
        }
        if ( dDuree ) {
            oEpargne.duree = dDuree;
            aModification.push( "duree" );
        }

        return checkEpargne( sEpargneID ).then( () => {
            let oModificationToApply = {};

            if ( aModification.length === 0 ) {
                return error( oRequest, oResponse, new Error( "No changes" ), 400 );
            }
            aModification.forEach( ( sPropertyName ) => {
                oModificationToApply[ sPropertyName ] = oEpargne[ sPropertyName ];
            } );

            oModificationToApply.updated_at = new Date();

            return getEpargne()
            .updateOne( {
                "_id": oEpargne._id,
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
