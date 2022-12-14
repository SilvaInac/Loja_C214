import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tenis } from './tenis';
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient) {}

    getAll(){
      return this.http.get<Tenis[]>(`${environment.api}/shoes`);
    }

    getByCart(){
      return this.http.get<Tenis[]>(`${environment.api}/shoes/id/teste`);
    }

    getById(id:string){
      return this.http.get<Tenis>(`${environment.api}/shoes/${id}`);
    }

    updateAddCart(tenis: Tenis){
      return this.http.put<Tenis>(`${environment.api}/shoes/${tenis._id}`,{
        name: tenis.name,
        price: tenis.price
      });
    }

    save(tenis: Tenis){
      return this.http.post<Tenis>(`${environment.api}/shoes`,{
        name: tenis.name,
        price: tenis.price
      });
    }

    delete(id: string){
      return this.http.delete<Tenis>(`${environment.api}/shoes/${id}`);
    }

}
