export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'boiler' | 'bathroom' | 'heating' | 'plumbing';
}
