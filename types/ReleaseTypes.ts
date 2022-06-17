export type ReleaseItemType = {
  album_type: string;
  artists: {
    external_urls: {
      spotify: string;
    };
  }[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export default interface ReleaseType {
  data: {
    albums: {
      href: string;
      items: ReleaseItemType[];
      limit: number;
      next: string;
      offset: number;
      previous: any;
      total: number;
    };
    status: number;
  };
}
