/* Dylan/PFE/Api
*
* /src/routes/depense.js Depense Route file
*
* At 18/02/17
*/
import { Router } from "express";

import create from "../controllers/depense/create";

let oRouter = new Router();

oRouter.post( "/depense", create );

export default oRouter;
