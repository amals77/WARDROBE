export class Product implements Ipro {
  public _id:any;
  public name: string;
  public rentalRate: number;
  public retailRate: number;
  public type: string;
  public subtype: string;
  public productdetail:string
  public damage:string
  public desc:string
  public image: string;
  public image1: string;
  public image2: string;
  public status:string;
  constructor(_id:any, name:string,rentalRate:number,retailRate:number,type:string, subtype:string,
    productdetail:string, damage:string,desc:string,image:string,image1:string,image2:string,status:string) {
    this._id =_id;
    this.name = name;
    this.rentalRate=rentalRate;
    this.retailRate=retailRate;
    this.type=type;
    this.subtype=subtype;
    this.productdetail=productdetail;
    this.damage=damage
    this.desc = desc;
    this.image = image;
    this.image1 = image1;
    this.image2 = image2;
    this.status=status;
  }
}
export interface Ipro {
  _id:any;
  name :string;
  rentalRate: number;
  retailRate: number;
  type: string;
  subtype:string;
  productdetail:string
  damage:string
  desc: string;
  image:string;
  image1:string;
  image2:string;
  status:string
}
export class Data {
  name :string;
  condition:string;
  rentalRate: number;
  retailRate: number;
  type: string;
  subtype:string;
  material:string;
  brand:string;
  fit:string;
  occation:string;
  pattern:string;
  productdetail:string
  damage:string
  desc: string;
  status:string;
  image:string;
  image1:string;
  image2:string;
}
