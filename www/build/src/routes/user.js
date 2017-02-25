/* Dylan/PFE/Api
*
* /src/routes/user.js User Route file
*
* At 18/02/17
*/
import { Router } from "express";

import create from "../controllers/user/create";

let oRouter = new Router();

oRouter.post( "/user", create );

export default oRouter;
