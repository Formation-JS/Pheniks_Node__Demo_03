import z from 'zod';
import { ProductData } from '../@types/product';

//! Gestion des types
// -  Utiliser "z.ZodType<ExempleData>" qui permet de lier le validateur Zod et le typage existant.
// -  Utiliser la méthode "z.infer<typeof ExempleValidator>" pour générer le type TS.

export const productDataValidator : z.ZodType<ProductData> = z.object({
  name: z.string().min(3).max(50),
  desc: z.string().max(5_000).nullable(),
  price: z.number().positive(),
  inStock: z.boolean()
});
