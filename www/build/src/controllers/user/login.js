/* Dylan/PFE/Api
*
* /src/controllers/user/login.js Users list controllers
*
* At 25/02/17
*/
import getUsers from "../../models/user";
import { send, error } from "../../core/utils/api";
import jwt from "jsonwebtoken";

export default function( oRequest, oResponse ) {

    getUsers()
    .findOne( {
        "email": oRequest.body.email,
    } )
    .then( ( oUser ) => {
        if ( !oUser ) {
            return error( oRequest, oResponse, "Unknow User", 404 );

        } else if ( oUser ) {
            if ( oUser.password !== oRequest.body.password ) {
                return error( oRequest, oResponse, "Wrong password", 404 );
            }
        }


        let tToken = jwt.sign( { email: oUser.email }, "shhhhh" );



        

        return send( oRequest, oResponse, { "token": tToken }, 200 );
    } )
    .catch( ( oError ) => {
        error( oRequest, oResponse, oError );
    } );
}
