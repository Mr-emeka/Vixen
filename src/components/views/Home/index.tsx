import React, { useState } from 'react'
import MovieCard from '../../custom/MovieCard'
import { IMovie } from '../../../types'
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual } from "react-redux"
import ReactPaginate from 'react-paginate';


type IProps = {
  movies: IMovie[],
}
type IPropsList = {
  movies: IMovie[],
  offset: number,
  perPage: number
}
type SelectState = {
  movies: any,
}

const HomeView: React.FC<IProps> = ({ movies }) => {

  //SearchTerm 
  const searchTerm: string = useSelector(
    (state: SelectState) => state.movies.searchTerm,
    shallowEqual
  )
  const perPage: number = useSelector(
    (state: SelectState) => state.movies.perPage,
    shallowEqual
  )
  const [offset, setOffset] = useState(0)

  var pageCount = Math.ceil(movies.filter(({ name }) =>
    name?.toLowerCase().includes(searchTerm.toLowerCase())
  ).length / perPage);

  const handlePageSelected = (e: any) => {
    setOffset(e.selected * perPage);
  }

  return <div className="home">
    <MovieArea movies={movies.filter(({ name }) =>
      name?.toLowerCase().includes(searchTerm.toLowerCase())
    )}
      offset={offset}
      perPage={perPage}
    />
    {pageCount > 1 && <div className="home__pagination">
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageSelected}
        containerClassName={"pagination"}
        activeClassName={"active"} />
    </div>}
  </div>

}

export default HomeView;

const MovieArea: React.FC<IPropsList> = ({ movies, offset, perPage }) => {

  return <div>
    {movies.length > 1 ?
      <div className="home__grid">
        {movies.slice(offset, offset + perPage).map(({ name, id, image, genres, premiered, }, idx) => {
          return <Link to={`movie/${id}`} key={idx}>
            <MovieCard name={name} url={image?.medium} premiered={premiered} genres={genres} />
          </Link>
        })}

      </div>
      :
      <div className="home__noResult">
        <h1>Search Not found</h1>
      </div>
    }

  </div>
}