/* Dylan/PFE/Api
*
* /src/core/express.js Express JS file
*
* At 18/02/17
*/
import express from "express";
import bodyParser from "body-parser";
import responseTime from "response-time";
import mitanEko from "mitan-eko";
import zouti from "zouti";
import jwt from "jsonwebtoken";
import { error } from "../core/utils/api";
import systemRoutes from "../routes/system";
import depenseRoutes from "../routes/depense";
import pretRoutes from "../routes/pret";
import epargneRoutes from "../routes/epargne";
import userRoutes from "../routes/user";

let oApp,
    fInit;
const APP_PORT = 8080;

fInit = function( iAppPort = APP_PORT ) {
    if ( oApp ) {
        return oApp;
    }
    oApp = express();

    // Configure middlewares( small softwares components )

    oApp.use( mitanEko( "api" ) );
    oApp.use( responseTime() );
    oApp.use( bodyParser.json() );
    oApp.use( bodyParser.urlencoded( {
        "extended": true,
    } ) );


    oApp.use( express.static( `${ __dirname }/../../static` ) );

    // configure templates
    oApp.set( "views", `${ __dirname }/../views` );
    oApp.set( "view engine", "pug" );

        oApp.use( systemRoutes );
        oApp.use( depenseRoutes );
        oApp.use( pretRoutes );
        oApp.use( epargneRoutes );
        oApp.use( userRoutes );

    // Listening on port
    oApp.listen( iAppPort, () => {
        zouti.success( `Server is listening on the port ${ iAppPort }.`, "API" );
    } );
};

export {
  fInit as init,
};
