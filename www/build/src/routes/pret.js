/* Dylan/PFE/Api
*
* /src/routes/pret.js Pret Route file
*
* At 18/02/17
*/
import { Router } from "express";

import create from "../controllers/pret/create";

let oRouter = new Router();

oRouter.post( "/pret", create );

export default oRouter;
