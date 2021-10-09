export interface CarTypes {
  bodyType: string;
  id: string;
  imageUrl: string;
  modelName: string;
  modelType: string;
}

export interface ImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: "responsive" | undefined;
  objectFit?: "contain" | undefined;
}
