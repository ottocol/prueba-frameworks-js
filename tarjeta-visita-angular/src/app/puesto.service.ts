import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PuestoService {

  fakerURL = 'https://hook.io/examples/faker?property=company.bs&locale=es'

  constructor(private http: HttpClient) {

  }

  generarPuesto() : Observable<string> {
    return this.http.get<string>(this.fakerURL)
  }

}
