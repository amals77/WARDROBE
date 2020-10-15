import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
dress:number[]=[1,2,3,4,5,6,7,8,9]
  constructor() { }
remove(){
  console.log("remove")
}
edit(){
  console.log("edit")
}
  ngOnInit(): void {
  }

}
