export type exploreDataItem = {
  img: string;
  location: string;
  distance: string;
};
export type exploreDataParent = exploreDataItem[];
export type liveDataItem = {
  img: string;
  title: string;
};
export type liveDataParent = liveDataItem[];
export type searchDataItem = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
export type searchDataParent = searchDataItem[];
