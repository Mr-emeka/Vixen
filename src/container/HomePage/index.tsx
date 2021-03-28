import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import Loading from '../../components/layout/loadingScreen';
import HomeView from '../../components/views/Home'
import { fetchMoviesAsync, searchMovie } from '../../redux/movie/action'
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


  // dispatch action
  const dispatch: Dispatch<any> = useDispatch();

  // Effect for fetching movies
  useEffect(() => {
    dispatch(fetchMoviesAsync())
  }, [dispatch])



  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchMovie(e.target.value))
  }

  return <Layout show={true} handleSearch={handleSearch}>
    {loading ?
      <Loading /> :
      <HomeView movies={movies}
      />}
  </Layout>
}
export default Home;