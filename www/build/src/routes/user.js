/* Dylan/PFE/Api
*
* /src/routes/user.js User Route file
*
* At 18/02/17
*/
import { Router } from "express";

import create from "../controllers/user/create";
import destroy from "../controllers/user/destroy";
import details from "../controllers/user/details";

let oRouter = new Router();

oRouter.post( "/user", create );
oRouter.delete( "/user/:id", destroy );
oRouter.get( "/user/:id", details );

export default oRouter;
