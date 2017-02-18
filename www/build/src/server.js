/* Dylan/PFE/Api
*
* /src/server.js Server JS file
*
* At 18/02/17
*/

// init db
import { init as initDB } from "./core/mongodb.js";
import { init as initExpress } from "./core/express";
const APP_PORT = 12345;

// init express
initDB()
  .then( () => {
      initExpress( APP_PORT );
  } );
