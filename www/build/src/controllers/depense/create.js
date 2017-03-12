/* Dylan/PFE/Api
*
* /src/controllers/depense/create.js Depense create controllers
*
* At 18/02/17
*/
import { ObjectID } from "mongodb";
import getDepenses, { checkDepense } from "../../models/depense";
import { checkUser } from "../../models/user";
import { send, error } from "../../core/utils/api";
import fs from "fs";
import Mongo from "mongodb";

const PAYEMENT = [ "cash", "carte" ];

export default function( oRequest, oResponse ) {
  // Petit test d'upload d'une image
  let path = "test.png";
      fs.writeFileSync( path );
  let oData = fs.readFileSync( path ),
      oImage = new Mongo.Binary( oData );
      console.log( oImage );
    const POST = oRequest.body;

    let sDepenseID = new ObjectID(),
        sName = ( POST.name || "Depense sans nom" ).trim(),
        sSlug = ( POST.slug || "Depense sans nom" ).trim(),
        iMontant = +POST.montant,
        aCategorie = POST.categorie,
        sPayement = POST.payement,
        bRepeater = POST.repeater,
        sUserID = ( POST.user || "" ).trim(),
        aPicture = oImage,
        oDepense,
        fCreateDepense;

    oDepense = {
        "created_at": new Date(),
        "updated_at": new Date(),
    };

    if ( isNaN( iMontant ) ) {
        return error( oRequest, oResponse, "Montant must be a number", 400 );
    }
    if ( PAYEMENT.indexOf( sPayement ) === -1 ) {
        return error( oRequest, oResponse, "Invalid payement method : Must be carte or cash", 400 );
    }

    // On assigne les données ici
    sName && ( oDepense.name = sName );
    sSlug && ( oDepense.slug = sSlug );
    iMontant && ( oDepense.montant = iMontant );
    aCategorie && ( oDepense.categorie = aCategorie );
    sPayement && ( oDepense.payement = sPayement );
    bRepeater && ( oDepense.repeater = bRepeater );
    sUserID && ( oDepense.user = sUserID );
    aPicture = oImage;

    fCreateDepense = () => {

        return getDepenses().insertOne( oDepense );
    };

    checkDepense( sDepenseID )
      .then( fCreateDepense )
      .then( () => {
          send( oRequest, oResponse, {
              "id": oDepense._id,
              "name": oDepense.name || null,
              "slug": oDepense.slug || null,
              "montant": oDepense.montant,
              "payment": oDepense.payement,
              "categorie": oDepense.categorie,
              "repeater": oDepense.repeater,
              "user": oDepense.user,
              "picture": aPicture,
          }, 201 );
      } )
      .catch( ( oError ) => {
          error( oRequest, oResponse, oError );
      } );

}