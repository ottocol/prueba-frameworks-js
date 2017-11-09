import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PuestoService {

  fakerURL = 'http://faker.hook.io/?property=company.bs&locale=es'

  constructor(private http: HttpClient) {

  }

  puestos = ["Community manager", "Whattefucker in-Chief", "Director of Myselfiness"]
  
  generarPuesto() : Observable<string> {
    return this.http.get<string>(this.fakerURL)
  }

}
