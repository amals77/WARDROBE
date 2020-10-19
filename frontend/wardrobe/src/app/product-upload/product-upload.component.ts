import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Data } from '../data';
import { UploadService } from '../upload.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css'],
})
export class ProductUploadComponent implements OnInit {
  constructor(private upload: UploadService, private httpClient: HttpClient) {}
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
      console.log(data)
      this.color = data;
    });
    this.httpClient.get('assets/fit.json').subscribe((data) => {
      console.log(data)
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
  }
  url: any = '../../assets/images/uploadimage.png';
  url1: any = '../../assets/images/plus.png';
  url2: any = '../../assets/images/plus.png';
  url3: any = '../../assets/images/plus.png';
  formData = new Data();
  count: number = 0;
  subimg1() {
    this.url = this.url1;
  }
  subimg2() {
    this.url = this.url2;
  }
  subimg3() {
    this.url = this.url3;
  }
  save(e) {
    this.formData.status = e;

    this.upload.sendPostRequest(this.formData).subscribe((res) => {
      console.log(res);
    });
  }
  publish(e) {
    this.formData.status = e;
    this.upload.sendPostRequest(this.formData).subscribe((res) => {
      console.log(res);
    });
    console.log(typeof this.formData.date);
  }
  onSelectFile(event) {
    this.count += 1;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      if (this.count == 1) {
        this.formData.image = event.target.files[0].name;
      }
      if (this.count == 2) {
        this.formData.image1 = event.target.files[0].name;
      }
      if (this.count == 3) {
        this.formData.image2 = event.target.files[0].name;
      }
      reader.onload = (event) => {
        if (this.count == 1) {
          this.url = event.target.result;
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
