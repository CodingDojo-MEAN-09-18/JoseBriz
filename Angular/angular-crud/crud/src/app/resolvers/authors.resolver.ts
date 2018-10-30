import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpService } from '../http.service';
import { Author } from '../models';

@Injectable()
export class AuthorResolve implements Resolve<Author> {

    constructor(private httpService: HttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Author> {
        console.log(route.paramMap.get('_id'));
        return this.httpService.getAuthor(route.paramMap.get('_id'));
    }
}
