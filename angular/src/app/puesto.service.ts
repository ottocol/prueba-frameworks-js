import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PuestoService {

  fakerURL = 'http://faker.hook.io/?property=company.bs'

  constructor(private http: HttpClient) {

  }

  puestos = ["Community manager", "Whattefucker in-Chief", "Director of Myselfiness"]
  
  generarPuesto() : Observable<Object> {
    return this.http.get(this.fakerURL)
  }

}
