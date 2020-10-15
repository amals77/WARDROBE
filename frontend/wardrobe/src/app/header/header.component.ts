import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // url: any;
  // onSelectFile(event) {
  //   console.log(event)
  //     if (event.target.files && event.target.files[0]) {
  //       var reader = new FileReader();

  //       reader.readAsDataURL(event.target.files[0]); // read file as data url

  //       reader.onload = (event) => { // called once readAsDataURL is completed
  //         this.url = event.target.result;
  //       }
  //     }
  // }
}
