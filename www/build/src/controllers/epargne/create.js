/* Dylan/PFE/Api
*
* /src/controllers/epargne/create.js Epargne create controllers
*
* At 18/02/17
*/
import { ObjectID } from "mongodb";
import getEpargne, { checkEpargne } from "../../models/epargne";
import { checkUser } from "../../models/user";
import { send, error } from "../../core/utils/api";


export default function( oRequest, oResponse ) {
    const POST = oRequest.body;

    let sEpargneID = new ObjectID(),
        sName = ( POST.name || "Epargne sans nom" ).trim(),
        sSlug = ( POST.slug || "Epargne sans nom" ).trim(),
        iMontant = +POST.montant,
        iMensualite = +POST.mensualite,
        dDateDepart = POST.depart,
        dDuree = iMontant / iMensualite,
        sUserID = ( POST.user || "" ).trim(),
        oEpargne,
        fCreateEpargne;

    oEpargne = {
        "created_at": new Date(),
        "updated_at": new Date(),
    };

    if ( isNaN( iMontant ) ) {
        return error( oRequest, oResponse, "Montant must be a number", 400 );
    }
    if ( isNaN( iMensualite ) ) {
        return error( oRequest, oResponse, "Mensualite must be a number", 400 );
    }

    // On assigne les données ici
    sName && ( oEpargne.name = sName );
    sSlug && ( oEpargne.slug = sSlug );
    iMontant && ( oEpargne.montant = iMontant );
    iMensualite && ( oEpargne.mensualite = iMensualite );
    dDateDepart && ( oEpargne.depart = dDateDepart );
    sUserID && ( oEpargne.user = sUserID );
    dDuree && ( oEpargne.duree = dDuree );

    fCreateEpargne = () => {
        return getEpargne().insertOne( oEpargne );
    };

    checkEpargne( sEpargneID )
      .then( fCreateEpargne )
      .then( () => {
          send( oRequest, oResponse, {
              "id": oEpargne._id,
              "name": oEpargne.name || null,
              "slug": oEpargne.slug || null,
              "montant": oEpargne.montant,
              "mensualite": oEpargne.mensualite,
              "interet": oEpargne.interet,
              "debut": oEpargne.depart,
              "user": oEpargne.user,
              "duree": dDuree,
          }, 201 );
      } )
      .catch( ( oError ) => {
          error( oRequest, oResponse, oError );
      } );

}
