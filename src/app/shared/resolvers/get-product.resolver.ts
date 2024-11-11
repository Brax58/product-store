import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProductService } from "../services/product.service";

export const getProduct = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const productService = inject(ProductService);

  return productService.getById(route.paramMap.get('id') as string);
}
