export class Playground{
        closingTime:string
        openingTime:string
        constructor(
        private name:string,
        private owner:string,
        private email:string,
        private password:string,
        private hourPrice:number,
        private phone:string,
        private location:string,
        private description:string,
        private image:string,
         _openingTime:Date,
         _closingTime:Date){
                this.closingTime=_closingTime.toLocaleTimeString("en-EN",{ hour12: false, hour: '2-digit', minute: '2-digit' })
                this.openingTime=_openingTime.toLocaleTimeString("en-EN",{ hour12: false, hour: '2-digit', minute: '2-digit' })
         }
            static factoryMethod(formInfo:any){
                return new Playground(formInfo.playgroundName,formInfo.ownerName,formInfo.email,formInfo.password,formInfo.hourPrice,formInfo.mobile,formInfo.location,formInfo.description,formInfo.image,formInfo.openingTime,formInfo.closingTime)
            }   
}