
/** IMPORT**/


const express = require('express')
const apiRouter = express.Router()

/** DEFINITION */

apiRouter.get('/',(req,res) =>{
    res.json({msg:'Hello API'})
});

apiRouter.post('/register', ( req,res ) => {
  
  //Vérifier les données de la requête
  if(
      req.body.email != undefined && req.body.email.length > 4 &&
      req.body.password != undefined && req.body.password.length > 4 &&
      req.body.pseudo != undefined && req.body.pseudo.length > 1
  ){

  }
  
  
    // Envoyer le fichier "index" dans la réponse
        //Créer une collection de todoes
       
        console.log(req.body)

        // Renvoyer le flux json dans la réponse
        res.json( "register" );

        //récupérer les données de l'utilisateur
    });

    apiRouter.get('/login', ( req,res ) => {
        // Envoyer le fichier "index" dans la réponse
            //Créer une collection de todoes
           
            // Renvoyer le flux json dans la réponse
            res.json( "login" );
        });

/** EXPORT */

module.exports = apiRouter;