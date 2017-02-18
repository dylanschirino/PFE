/* Dylan/PFE/Api
*
* /src/routes/system.js System Route file
*
* At 18/02/17
*/
import { Router } from "express";

import sysEchoController from "../controllers/system/echo";
import sysErrorController from "../controllers/system/error";
import sysPingController from "../controllers/system/ping";

let oRouter = new Router();

oRouter.get( "/sys/echo", sysEchoController );
oRouter.get( "/sys/error", sysErrorController );
oRouter.get( "/sys/ping", sysPingController );

export default oRouter;
