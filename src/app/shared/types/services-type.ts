export interface ServicesType {
    topTitle?: string,
    bigTitle?: string,
    description?: string,
    serviceOffers?: serviceOffersType[],
    allServices?: () => void
}


export interface serviceOffersType {
    id:any,
    offerBlueIcon: string,
    offerGreyIcon: string,
    offerTitle: string,
    offerDescription: string,
    offerDetails?: () => {}
}