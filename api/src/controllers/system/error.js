/* Dylan / PFE
*
* /src/controllers/system/error.js - Error.js
*
* At 11/02/2017
*/
import { error } from "../../core/utils/api";
export default function( oRequest, oResponse ) {
    error( oRequest, oResponse, { "message": "There is an error occured !" } );
}
