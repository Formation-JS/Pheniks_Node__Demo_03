import type { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';


// Body validator - Middleware Builder
export function bodyValidatorMiddleware(validator : ZodSchema) {

  // Body validator - Middleware
  return async function middleware(req : Request, res: Response, next: NextFunction) {
    
    // Validation avec Zod
    const result = await validator.safeParseAsync(req.body);
    
    // Erreur 422 avec les champs en erreur
    if(!result.success) {
      res.status(422).json({
        error: result.error.flatten().fieldErrors
      });
      return;
    }

    // Injection des données dans l'objet "req" d'express (necessite du typage)
    req.data = result.data;

    // On continue la suite de la requete
    next();
  };
  
}
