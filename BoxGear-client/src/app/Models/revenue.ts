export class Revenue{
    typeOfTicket: string;
    reason: string;
     dateOfRecord: string;
     receiver:string;
     value :number;
    constructor(){
        this.typeOfTicket = "";
        this.reason ="";
        this.dateOfRecord ="";
        this.receiver = "";
        this.value=0;
    }
}