/* Dylan/PFE/Api
*
* /src/routes/depense.js Depense Route file
*
* At 18/02/17
*/
import { Router } from "express";
import create from "../controllers/depense/create";
import update from "../controllers/depense/update";
import destroy from "../controllers/depense/destroy";
import list from "../controllers/depense/list";
import details from "../controllers/depense/details";
import check from "../controllers/home/check";
import listHome from "../controllers/home/list";

let oRouter = new Router();

oRouter.get( "/depense", list );
oRouter.get( "/depense/:id", details );
oRouter.post( "/depense", create );
oRouter.patch( "/depense/:id", update );
oRouter.delete( "/depense/:id", destroy );
oRouter.post( "/home", check );
oRouter.get( "/home/", listHome)


export default oRouter;
