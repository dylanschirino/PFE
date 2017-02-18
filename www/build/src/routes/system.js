/* Dylan/PFE/Api
*
* /src/routes/system.js System Route file
*
* At 18/02/17
*/
import { Router } from "express";

import sysEchoController from "../controllers/system/echo";

let oRouter = new Router();

oRouter.get( "/sys/echo", sysEchoController );

export default oRouter;
