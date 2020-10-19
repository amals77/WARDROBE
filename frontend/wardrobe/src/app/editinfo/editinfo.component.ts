import { Component, OnInit } from '@angular/core';
import {UploadService} from '../upload.service'
@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {
editproduct:any[]
  constructor(private service : UploadService) { }

  ngOnInit(): void {
    var edit=localStorage.getItem("edit")
      this.service.editProduct(edit).subscribe( (data)=>{
    this.editproduct=data
  })
  }

}
