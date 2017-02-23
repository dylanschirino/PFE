/* Dylan/PFE/Api
*
* /src/controllers/pret/create.js Prêt create controllers
*
* At 18/02/17
*/
import { ObjectID } from "mongodb";
import getPret, { checkPret } from "../../models/pret";
import { send, error } from "../../core/utils/api";


export default function( oRequest, oResponse ) {
    const POST = oRequest.body;

    let sPretID = new ObjectID(),
        sName = ( POST.name || "Pret sans nom" ).trim(),
        sSlug = ( POST.slug || "Pret sans nom" ).trim(),
        iMontant = +POST.montant,
        iMensualite = +POST.mensualite,
        iInteret = +POST.interet / 100,
        dDateDepart = POST.depart,
        dDuree = Math.log( -iMensualite / ( ( ( iInteret / 12 ) * iMontant ) - iMensualite ) ) / Math.log( 1 + ( iInteret / 12 ) ),
        oPret,
        fCreatePret;

    oPret = {
        "created_at": new Date(),
        "updated_at": new Date(),
    };

    if ( isNaN( iMontant ) ) {
        return error( oRequest, oResponse, "Montant must be a number", 400 );
    }
    if ( isNaN( iInteret ) && iInteret > 100 ) {
        return error( oRequest, oResponse, "Interet must be a number", 400 );
    }
    if ( isNaN( iMensualite ) ) {
        return error( oRequest, oResponse, "Mensualite must be a number", 400 );
    }

    // On assigne les données ici
    sName && ( oPret.name = sName );
    sSlug && ( oPret.slug = sSlug );
    iMontant && ( oPret.montant = iMontant );
    iMensualite && ( oPret.mensualite = iMensualite );
    iInteret && ( oPret.interet = iInteret );
    dDateDepart && ( oPret.depart = dDateDepart );
    dDuree && ( oPret.duree = dDuree )

    fCreatePret = () => {
        return getPret().insertOne( oPret );
    };

    checkPret( sPretID )
      .then( fCreatePret )
      .then( () => {
          send( oRequest, oResponse, {
              "id": oPret._id,
              "name": oPret.name || null,
              "slug": oPret.slug || null,
              "montant": oPret.montant,
              "mensualite": oPret.mensualite,
              "interet": oPret.interet,
              "debut": oPret.depart,
              "duree": dDuree,
          }, 201 );
      } )
      .catch( ( oError ) => {
          error( oRequest, oResponse, oError );
      } );

}
