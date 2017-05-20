/* Dylan/PFE/Api
*
* /src/controllers/pret/create.js Prêt create controllers
*
* At 18/02/17
*/
import { ObjectID } from "mongodb";
import getPret, { checkPret } from "../../models/pret";
import { checkUser } from "../../models/user";
import { send, error } from "../../core/utils/api";
import moment from "moment";
import duration from "moment-duration-format";


export default function( oRequest, oResponse ) {
    const POST = oRequest.body;

    let sPretID = new ObjectID(),
        sName = ( POST.name || "Pret sans nom" ).trim(),
        sSlug = ( POST.slug || "Pret sans nom" ).trim(),
        iMontant = +POST.montant,
        iMensualite = +POST.mensualite,
        iInteret = +POST.interet/ 100,
        dDateDepart = POST.depart,
        sUserID = ( POST.user || "" ).trim(),
        oPret,
        fCreatePret,
        monthArray = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

        if( iInteret === 0 ){
          iInteret = 0.01/1000;
          var dDuree = Math.log( -iMensualite / ( ( ( 0.0001 / 12 ) * iMontant ) - iMensualite ) ) / Math.log( 1 + ( 0.0001 / 12 ) );
        }
        else{
          var dDuree = Math.log( -iMensualite / ( ( ( iInteret / 12 ) * iMontant ) - iMensualite ) ) / Math.log( 1 + ( iInteret / 12 ) );
        }

        var timeStamp = moment(dDateDepart,'DD-MM-YYYY');
        var datecreated = new Date(timeStamp);
        var timeStampFinal = datecreated.setMonth(datecreated.getMonth()+dDuree);
        var finalDate = new Date(timeStampFinal);
        var dd = finalDate.getDate();
        var mm = finalDate.getMonth()+1;
        var y = finalDate.getFullYear();
        var end = dd + '/'+ mm + '/'+ y;
        var a = moment(timeStamp);
        var b = moment(timeStampFinal);
        var timer = b.diff(a,'days');
        var time = moment.duration(timer,'days').format('Y [Ans] et M [Mois] et D[Jours]');


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
    sUserID && ( oPret.user = sUserID );
    dDuree && ( oPret.duree = dDuree );
    end && ( oPret.end = end );

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
              "depart": oPret.depart,
              "user": oPret.user,
              "duree": oPret.duree,
              "end": oPret.end
          }, 201 );
      } )
      .catch( ( oError ) => {
          error( oRequest, oResponse, oError );
      } );

}
