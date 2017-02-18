/* Dylan/PFE/Api
*
* /src/controllers/system/ping.js Ping System JS file
*
* At 18/02/17
*/
import { send } from "../../core/utils/api";

export default function( oRequest, oResponse ) {
    send( oRequest, oResponse, true );
}
