/* Dylan/PFE/Api
*
* /src/controllers/depense/details.js DepenseSum details controllers
*
* At 18/02/17
*/
import getDepenseSum from "../../models/depense_sum";
import { send, error } from "../../core/utils/api";
import { ObjectID } from "mongodb";

export default function( oRequest, oResponse ) {
    let sDepenseSumID = ( oRequest.params.id || "" ).trim();

    if ( !sDepenseSumID ) {
        error( oRequest, oResponse, "Invalid depense ID", 400 );
    }

    getDepenseSum()
    .findOne( {
        "_id": sDepenseSumID,
        "deleted_at": null,
    } )
    .then( ( oDepenseSum ) => {
        if ( !oDepenseSum ) {
            return error( oRequest, oResponse, "Unknow DepenseSum", 404 );
        }

        let { _id, total } = oDepenseSum,
            oCleanDepenseSum;

        oCleanDepenseSum = {
            "id": _id,
            "total":total,
        };
        send( oRequest, oResponse, oCleanDepenseSum );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
