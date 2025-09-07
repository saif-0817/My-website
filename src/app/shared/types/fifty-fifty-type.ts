
export interface FiftyFifty {
    topTitle?: string,
    bigTitle?: string,
    description?: string,
    descriptionSecond?:string,
    image?: string,
    textEnd?:boolean,
    progressBar?: ProgressBarType[]
    offerService?:OfferServiceType[]
}


interface ProgressBarType {
    id?: number,
    title?: String,
    width?: number
}

interface OfferServiceType{
    type?:string,
    details?:string

}

export interface SubTopTitle {
    text?:string,
    destination?:string,
    clr?:string,
}