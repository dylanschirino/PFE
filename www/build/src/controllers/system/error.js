/* Dylan/PFE/Api
*
* /src/controllers/system/error.js Error System JS file
*
* At 18/02/17
*/
import { error } from "../../core/utils/api";
export default function( oRequest, oResponse ) {
    error( oRequest, oResponse, { "message": "Oups ! An error occured" } );
}
