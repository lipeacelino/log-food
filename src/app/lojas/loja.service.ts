import {Injectable} from '@angular/core';
import {Loja} from './loja/loja.model';

import {MEAT_API} from '../app.api';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ErrorHandler} from '../app.error-handler';

import {MenuItem} from '../menu-item/menu-item.model';
import { Observable } from 'rxjs';

@Injectable()
export class LojaService {

    constructor(private http: Http) {}

    Lojas(): Observable<Loja[]> {
        return this.http.get(`${MEAT_API}/Lojas`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    lojaById(id: string): Observable<Loja> {
        console.log('Aqui');

        return this.http.get(`${MEAT_API}/Lojas/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
    menuOfLoja(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/Lojas/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
      }
}