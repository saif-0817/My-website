export interface LatestNews{
    header?:boolean,
    background?:String,
    topTitle?:string,
    bigTitle?:string
    blogs?:Blogs[];
}


interface Blogs{
id:number,
image:string,
date:string,
text:string
}
