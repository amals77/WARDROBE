import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent implements OnInit {
size:string[]=["XS","S","M","+"]

  constructor() { }

  ngOnInit(): void {
  }

}
