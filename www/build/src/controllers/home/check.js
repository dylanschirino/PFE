/* Dylan/PFE/Api
*
* /src/controllers/home/check.js Home depense check controllers
*
* At 18/02/17
*/
import { ObjectID } from "mongodb";
import getHome, { checkHome } from "../../models/home";
import { send, error } from "../../core/utils/api";


export default function( oRequest, oResponse ) {

    const POST = oRequest.body;

    let sHomeID = new ObjectID(),
        sDate = new Date(),
        sMonth = sDate.getMonth() + 1,
        sMaxDepense = +POST.maxdepense || 2002,
        oHome,
        fCreateHome;

    oHome = {
        "created_at": new Date(),
        "updated_at": new Date(),
    };

    // On assigne les données ici
    sMonth = sDate.getMonth() + 1;
    sMaxDepense && ( oHome.maxdepense = sMaxDepense );


    fCreateHome = () => {
        return getHome().insertOne( oHome );
    };


    checkHome( sHomeID )
      .then( fCreateHome )
      .then( () => {
          send( oRequest, oResponse, {
              "id": oHome._id,
              "month": sMonth,
              "maxdepense": oHome.maxdepense,
          }, 201 );
      } )
      .catch( ( oError ) => {
          error( oRequest, oResponse, oError );
      } );

}
