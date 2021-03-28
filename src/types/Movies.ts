export interface IMovie {
  id?: number;
  name?: string;
  image?: IMovieImg;
  genres?: string[];
  premiered?: string;
  summary?: string;
}

export interface IMovieImg {
  medium: string;
  original?: string;
}

export type MovieState = {
  movies: IMovie[];
  loading: boolean;
  error: string;
  movie: Record<string, any>;
  filterBy: string;
  searchTerm: string;
  perPage: number;
};

export type Action = {
  type: string;
  payload?: any;
};

export type DispatchType = (args: Action) => Action;
