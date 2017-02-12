/* Dylan / PFE
*
* /src/controllers/system/echo.js - Echo.js
*
* At 11/02/2017
*/
import { send } from "../../core/utils/api";
export default function( oRequest, oResponse ) {
    send( oRequest, oResponse, true );
}
