import { Component, OnInit} from '@angular/core';
import { from } from 'rxjs';
import {UploadService} from '../upload.service'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
dress:any[]=[]
ls:any[]=[]
  constructor(private service:UploadService) { }
remove(id,item){

  this.service.deleteproduct(id).subscribe((data)=>{
    console.log(data)
  })
  var index=this.dress.indexOf(item)
  this.dress.splice(index,1)
  var pro=localStorage.getItem("product")
  var a=JSON.parse(pro)
  a.splice(index,1)

  this.ls=a
  localStorage.setItem("product",JSON.stringify(this.ls))
}
edit(id){

  localStorage.setItem("edit",id)
}

  ngOnInit(): void {
    this.service.getProduct().subscribe( (data)=>{

     data.map((a)=>{
        this.ls.push(a)
        localStorage.setItem("product",JSON.stringify(this.ls))
      })

  })
  let item=localStorage.getItem("product")
  this.dress=JSON.parse(item)
  }

}
