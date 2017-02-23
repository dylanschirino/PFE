/* Dylan/PFE/Api
*
* /src/routes/pret.js Pret Route file
*
* At 18/02/17
*/
import { Router } from "express";

import create from "../controllers/pret/create";
import update from "../controllers/pret/update";


let oRouter = new Router();

oRouter.post( "/pret", create );
oRouter.patch( "/pret/:id", update );

export default oRouter;
