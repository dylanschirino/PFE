/* Dylan/PFE/Api
*
* /src/routes/pret.js Pret Route file
*
* At 18/02/17
*/
import { Router } from "express";

import create from "../controllers/epargne/create";
import update from "../controllers/epargne/update";
// import destroy from "../controllers/epargne/destroy";
// import list from "../controllers/epargne/list";
// import details from "../controllers/epargne/details";

let oRouter = new Router();

oRouter.post( "/epargne", create );
oRouter.patch( "/epargne/:id", update );
// oRouter.delete( "/epargne/:id", destroy );
// oRouter.get( "/epargne/", list );
// oRouter.get( "/epargne/:id", details );

export default oRouter;
