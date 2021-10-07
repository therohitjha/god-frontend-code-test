export interface CarTypes {
  bodyType: string;
  id: string;
  imageUrl: string;
  modelName: string;
  modelType: string;
}

export interface CarInfoTypes{
  id?:string,
  body:string,
  name:string,
  type:string,
  src:string
}

export interface ImageType{
src:string,
alt:string,
width:number,
height:number,
layout?:string,
objectFit?:string
}