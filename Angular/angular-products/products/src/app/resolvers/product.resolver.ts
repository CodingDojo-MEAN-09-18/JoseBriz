import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpService } from '../http.service';
import { Product } from '../models/product';

@Injectable()
export class ProductResolve implements Resolve<Product> {

    constructor(private httpService: HttpService) { }

    // resolves the information from the activated route and then loads route component associated with the route
    // we need to tell angular app that we're using resolve by importing in app.module.ts
    // we need to also include resolve in the routing module
    // lastly, on the component, modify so that it uses resolve

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {
        return this.httpService.showProduct(route.paramMap.get('id'));
    }
}

