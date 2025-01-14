import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { DemoModel } from '../Model/DemoModel';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _url1 = "http://localhost:8081/allData";
  private _url2 = "";

  constructor(private http: HttpClient) { }

  getAllData(): Observable<DemoModel[]>{
    return this.http.get<DemoModel[]>(this._url1);
  }
  
  getById(id:String):Observable<DemoModel[]>{
    return this.http.get<DemoModel[]>("http://localhost:8081/getById/"+id);
  }

  getByName(name:String):Observable<DemoModel[]>{
    return this.http.get<DemoModel[]>("http://localhost:8081/getByName/"+name);
  }

  deleteById(id:String):Observable<String>{
    return this.http.delete<String>("http://localhost:8081/deleteData/"+id);
  }

  addData(demo: DemoModel): Observable<any>{
    return this.http.post("http://localhost:8081/addData",demo);
  }

  editData(model: DemoModel, id: String): Observable<any>{
    return this.http.put("http://localhost:8081/updateData/"+id,model);
  }
}
