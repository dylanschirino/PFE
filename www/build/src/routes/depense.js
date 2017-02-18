/* Dylan/PFE/Api
*
* /src/routes/depense.js Depense Route file
*
* At 18/02/17
*/
import { Router } from "express";

import create from "../controllers/depense/create";
import list from "../controllers/depense/list";

let oRouter = new Router();
oRouter.get( "/depense", list );
oRouter.post( "/depense", create );

export default oRouter;
