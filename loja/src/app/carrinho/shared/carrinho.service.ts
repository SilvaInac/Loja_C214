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
    getById(id:string)
    {
      return this.http.get<Tenis>(`${environment.api}/shoes/${id}`);
    }

    save (tenis: Tenis)
    {
      if(tenis._id)
      {
        return this.http.put<Tenis>(`${environment.api}/shoes/${tenis._id}`,{
          name: tenis.name,
          preice: tenis.price
        });
      }else{
        return this.http.post<Tenis>(`${environment.api}/shoes`,{
          description: tenis.name,
          completed: tenis.price
        });
      }
    }

    delete(id: string){
      return this.http.delete<Tenis>(`${environment.api}/shoes/${id}}`);
    }

}
