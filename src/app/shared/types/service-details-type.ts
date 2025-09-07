export interface ServiceDetails{
    topTitle?: string,
    bigTitle?: string,
    description?: string,
    topTitleClr?: string,
    bigTitleClr?: string,
    descriptionClr?: string,
    image?: string,
    background?: string,
    dynamicOrder?: boolean,
     offerService?:OfferServiceType[]
    
}

interface OfferServiceType{
    type?:string,
    details?:string

}