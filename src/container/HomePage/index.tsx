import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import HomeView from '../../components/views/Home'
import { fetchMoviesAsync, searchMovie, setPageCountAsync, setOffsetAsync, setPartialMovies } from '../../redux/movie/action'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { IMovie } from '../../types'

type SelectState = {
  movies: any,
}

const Home: React.FC = () => {

  //Movie state
  const movies: IMovie[] = useSelector(
    (state: SelectState) => state.movies.movies,
    shallowEqual
  )
  const loading: boolean = useSelector(
    (state: SelectState) => state.movies.loading,
    shallowEqual
  )
  const partialMovies: IMovie[] = useSelector(
    (state: SelectState) => state.movies.partialMovies,
    shallowEqual
  )
  const perPage: number = useSelector(
    (state: SelectState) => state.movies.perPage,
    shallowEqual
  )
  const pageCount: number = useSelector(
    (state: SelectState) => state.movies.pageCount,
    shallowEqual
  )
  const offset: number = useSelector(
    (state: SelectState) => state.movies.offset,
    shallowEqual
  )
  // dispatch action
  const dispatch: Dispatch<any> = useDispatch();

  // Effect for fetching movies
  useEffect(() => {
    dispatch(fetchMoviesAsync())
  }, [dispatch])


  useEffect(() => {
    var count = Math.ceil(movies.length / perPage);
    dispatch(setPageCountAsync(count));
    let partialData = movies.slice(offset, offset + perPage);
    dispatch(setPartialMovies(partialData));
  }, [dispatch, movies, movies.length, offset, perPage])


  const handlePageSelected = (e: any) => {
    dispatch(setOffsetAsync(e.selected * perPage));
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchMovie(e.target.value))
  }

  return <Layout show={true} handleSearch={handleSearch}>
    <HomeView movies={partialMovies} handlePageSelected={handlePageSelected} pageCount={pageCount} />
  </Layout>
}
export default Home;