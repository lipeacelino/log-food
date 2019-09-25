import {Injectable} from '@angular/core';
import {Loja} from './loja/loja.model';

import {MEAT_API} from '../app.api';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErrorHandler } from '../app.error-handler';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import { MenuItem } from '../loja-detail/menu-item/menu-item.model';

@Injectable()
export class LojaService {

    constructor(private http: Http) {}

    lojas(): Observable<Loja[]> {
        return this.http.get(`${MEAT_API}/lojas`)
        .map(response => response.json()).catch(ErrorHandler.handleError);
    }

    lojaById(id: string): Observable<Loja> {
        console.log('Aqui');

        return this.http.get(`${MEAT_API}/lojas/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
    menuOfLoja(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/lojas/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
      }}
