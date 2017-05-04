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
import moment from "moment";
import duration from "moment-duration-format";

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
        fCreateEpargne,
        monthArray = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

    let datecreated = new Date(),
        days = datecreated.getDay(),
        month = monthArray[datecreated.getMonth()],
        year = datecreated.getFullYear();
    var timeStamp = + new Date();
    var timeStampFinal = datecreated.setDate(datecreated.getDate()+dDuree);
    var finalDate = new Date(timeStampFinal);
    var dd = finalDate.getDate();
    var mm = finalDate.getMonth()+1;
    var y = finalDate.getFullYear();
    var end = dd + '/'+ mm + '/'+ y;
    var a = moment(timeStamp);
    var b = moment(timeStampFinal);
    var timer = b.diff(a,'days');
    var time = moment.duration(timer,'days').format('Y [Ans] et M [Mois] et D[Jours]');

    oEpargne = {
        "created_at": days +' '+month+' '+year,
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
    dDuree && ( oEpargne.duree = time );
    end && ( oEpargne.end = end );

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
              "depart": oEpargne.depart,
              "user": oEpargne.user,
              "end": oEpargne.end,
              "duree": oEpargne.duree,
              "created_at":days +' '+month+' '+year,
          }, 201 );
      } )
      .catch( ( oError ) => {
          error( oRequest, oResponse, oError );
      } );

}
