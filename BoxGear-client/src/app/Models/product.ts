export class Product{
    _id:string;
    ten: string;
    tien: number;
    hinh: string;
    soLuong:number;
    thongSo = Object({
        thongSo1: String,
        thongSo2: String,
        thongSo3: String
    });
    constructor(){
        this._id = "";
        this.ten ="";
        this.tien =0;
        this.hinh = "";
        this.soLuong=0;
        this.thongSo.thongSo2="";
        this.thongSo.thongSo1="";
        this.thongSo.thongSo3="";
       
    }
}