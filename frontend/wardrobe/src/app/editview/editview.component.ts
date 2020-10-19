import { Component, OnInit,Input } from '@angular/core';
import { Data } from '../data';
import { UploadService } from '../upload.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-editview',
  templateUrl: './editview.component.html',
  styleUrls: ['./editview.component.css']
})
export class EditviewComponent implements OnInit {
  @Input("editproduct")
  public editproduct
  formData = new Data();
  constructor(private upload: UploadService, private httpClient: HttpClient) { }
  url:any='../../assets/images/'
url1:any='../../assets/images/'
url2:any='../../assets/images/'
url3:any='../../assets/images/'
count: number = 0;
condition: any;
material: any;
brand: any;
fit: any;
occation: any;
size: any;
color: any;
pattern: any;
care: any;
  ngOnInit(): void {
    this.httpClient.get('assets/condition.json').subscribe((data) => {
      this.condition = data;
    });
    this.httpClient.get('assets/material.json').subscribe((data) => {
      this.material = data;
    });
    this.httpClient.get('assets/brand.json').subscribe((data) => {
      this.brand = data;
    });
    this.httpClient.get('assets/care.json').subscribe((data) => {
      this.care = data;
    });
    this.httpClient.get('assets/color.json').subscribe((data) => {
      this.color = data;
    });
    this.httpClient.get('assets/fit.json').subscribe((data) => {
      this.fit = data;
    });
    this.httpClient.get('assets/occation.json').subscribe((data) => {
      this.occation = data;
    });
    this.httpClient.get('assets/pattern.json').subscribe((data) => {
      this.pattern = data;
    });
    this.httpClient.get('assets/size.json').subscribe((data) => {
      this.size = data;
    });
    this.url+=this.editproduct.image
   this.url1+=this.editproduct.image
   this.url2+=this.editproduct.image1
   this.url3+=this.editproduct.image2
this.formData.name=this.editproduct.name
this.formData.date=this.editproduct.date
this.formData.condition=this.editproduct.condition
this.formData.rentalRate=this.editproduct.rentalRate
this.formData.retailRate=this.editproduct.retailRate
this.formData.type=this.editproduct.type
this.formData.subtype=this.editproduct.subtype
this.formData.material=this.editproduct.material
this.formData.brand=this.editproduct.brand
this.formData.fit=this.editproduct.fit
this.formData.occation=this.editproduct.occation
this.formData.size=this.editproduct.size
this.formData.color=this.editproduct.color
this.formData.pattern=this.editproduct.pattern
this.formData.productdetail=this.editproduct.productdetail
this.formData.damage=this.editproduct.damage
this.formData.care=this.editproduct.care
this.formData.desc=this.editproduct.desc

  }
  subimg1(){
    this.url=this.url1
   }
   subimg2(){
    this.url=this.url2
    }
    subimg3(){
      this.url=this.url3
    }
  save(e) {
    this.formData.status = e;

    this.upload.updateProduct(this.formData).subscribe(
      res => {
        console.log(res);
      }
    )
    alert("DATA HAS BEEN UPDATED")
  }
  publish(e) {
    this.formData.status = e;

    this.upload.updateProduct(this.formData).subscribe(
      res => {
        console.log(res);
      }
    )

    alert("DATA HAS BEEN UPDATED")
  }
  onSelectFile(event) {
    this.count+=1

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      if (this.count==1){
        this.formData.image=event.target.files[0].name
      }
      if (this.count==2){
        this.formData.image1=event.target.files[0].name
      }
      if (this.count==3){
        this.formData.image2=event.target.files[0].name
      }
      reader.onload = (event) => {
        if (this.count == 1) {
          this.url1 = event.target.result;
        }
        if (this.count == 2) {
          this.url2 = event.target.result;
        }
        if (this.count == 3) {
          this.url3 = event.target.result;

        }
      };
    }
  }
}
