/* Dylan / PFE
*
* /src/routes/system.js - System.js
*
* At 11/02/2017
*/
import { Router } from "express";

import sysEchoController from "../controllers/system/echo";

let oRouter = new Router();

oRouter.get( "/sys/echo", sysEchoController );

export default oRouter;
