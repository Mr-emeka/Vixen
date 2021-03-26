import React, { useEffect } from 'react';
import Layout from '../../components/layout'
import MoviePageView from '../../components/views/Movie'
import { fetchMovieAsync } from '../../redux/movie/action'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { IMovie } from '../../types'

export type IProps = {
    match: any,

}
export type SelectState = {
    movies: any,
}

const MoviePage: React.FC<IProps> = ({ match }) => {
    //Movie state
    const movie: IMovie = useSelector(
        (state: SelectState) => state.movies.movie,
        shallowEqual
    )
    const dispatch = useDispatch();
    const loading: boolean = useSelector(
        (state: SelectState) => state.movies.loading,
        shallowEqual
    )


    useEffect(() => {
        dispatch(fetchMovieAsync(match.params.id))
    }, [dispatch, match.params.id])



    return <Layout show={false}>
        {!loading && <MoviePageView movie={movie} />}
    </Layout>
}


export default MoviePage