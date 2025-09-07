export interface ButtonType{
btnTxt?:string;
btnClass?: string | string[] | Record<string, boolean>;
btnType?:string,
handler?:()=> void;

}