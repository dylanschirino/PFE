/* Dylan/PFE/Api
*
* /src/routes/pret.js Prêt Route file
*
* At 23/02/17
*/
import { Router } from "express";

import create from "../controllers/pret/create";
// import update from "../controllers/pret/update";
// import destroy from "../controllers/pret/destroy";
// import list from "../controllers/pret/list";
// import details from "../controllers/pret/details";

let oRouter = new Router();

// oRouter.get( "/pret", list );
// oRouter.get( "/pret/:id", details );
oRouter.post( "/pret", create );
// oRouter.patch( "/pret/:id", update );
// oRouter.delete( "/pret/:id", destroy );

export default oRouter;
