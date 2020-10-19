import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Data} from './data'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  listUrl:string="http://localhost:3000/list"
  productUrl:string="http://localhost:3000/product"
  postUrl:string="http://localhost:3000/load"
  delUrl:string="http://localhost:3000/remove"
  updateUrl:string="http://localhost:3000/update"
  constructor(private httpClient:HttpClient) { }
  products:string[]=[]
sendPostRequest(data: any): Observable<any> {

  return this.httpClient.post<any>(this.postUrl, data);

}
getProduct():Observable<any[]>{
  return this.httpClient.get<any[]>(this.listUrl)
}
deleteproduct(id:any) :Observable<any> {


   return this.httpClient.delete<any>(this.delUrl+"/"+id)
}
editProduct(id){
  return this.httpClient.get<any[]>(this.productUrl+'/'+id)
}
updateProduct(data:Data): Observable<any>{
  var id=localStorage.getItem("edit")

  return this.httpClient.put<any>(this.updateUrl+'/'+id, data);
}
}
