import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Data } from '../data';
import { UploadService } from '../upload.service';
@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css'],
})
export class ProductUploadComponent implements OnInit {
  constructor(private upload: UploadService) {}

  ngOnInit(): void {}
  url1: any = '../../assets/images/plus.png';
  url2: any = '../../assets/images/plus.png';
  url3: any = '../../assets/images/plus.png';
  formData = new Data();
  count: number = 0;
  save(e) {
    this.formData.status = e;
    this.upload.sendPostRequest(this.formData).subscribe(
      res => {
        console.log(res);
      }
    )
  }
  publish(e) {
    this.formData.status = e;
    this.upload.sendPostRequest(this.formData).subscribe(
      res => {
        console.log(res);
      }
    )

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
