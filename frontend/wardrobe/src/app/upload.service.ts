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
  constructor(private httpClient:HttpClient) { }
//   PostData (pd:Data){
//     console.log(pd)
// try{

//     this.http.post  (this.postUrl,
//       {"name": pd.name, "condition": pd.condition,"rentalRate":pd.rentalRate,
//     "retailRate":pd.retailRate,"type":pd.type,"subtype":pd.subtype,"material":pd.material,"barnd":pd.brand,
//     "fit":pd.fit,"occation":pd.occation,"pattern":pd.pattern,"productdetail":pd.productdetail,"damage":pd.damage,
//     "desc":pd.desc,"status":pd.status,"image":pd.image,"image1":pd.image1,"image2":pd.image2
//   }
// ) }
// catch(err){
// console.log("error is",err)
// }

sendPostRequest(data: any): Observable<any> {
  return this.httpClient.post<any>(this.postUrl, data);
}
}
