export class Playground{
        closingTime:string
        openingTime:string
        constructor(
        public name:string,
        public owner:string,
        public email:string,
        public password:string,
        public hourPrice:number,
        public phone:string,
        public location:string,
        public description:string,
        public image:string,
         _openingTime:Date,
         _closingTime:Date){
                this.closingTime=_closingTime.toLocaleTimeString("en-EN",{ hour12: false, hour: '2-digit', minute: '2-digit' })
                this.openingTime=_openingTime.toLocaleTimeString("en-EN",{ hour12: false, hour: '2-digit', minute: '2-digit' })
         }
            static factoryMethod(formInfo:any){
                return new Playground(formInfo.playgroundName,formInfo.ownerName,formInfo.email,formInfo.password,formInfo.hourPrice,formInfo.mobile,formInfo.location,formInfo.description,formInfo.image,formInfo.openingTime,formInfo.closingTime)
            }   
}