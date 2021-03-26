import React from 'react'
import MovieCard from '../../custom/MovieCard'
import { IMovie } from '../../../types'
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual } from "react-redux"
import ReactPaginate from 'react-paginate';


type IProps = {
  movies: IMovie[],
  handlePageSelected: (e: any) => void,
  pageCount: number;
}
type SelectState = {
  movies: any,
}

const HomeView: React.FC<IProps> = ({ movies, handlePageSelected, pageCount }) => {

  //SearchTerm 
  const searchTerm: string = useSelector(
    (state: SelectState) => state.movies.searchTerm,
    shallowEqual
  )

  return <div className="home">
    <div className="home__grid">
      {movies.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      ).map(({ name, id, image, genres, premiered, }, idx) => {
        return <Link to={`movie/${id}`} key={idx}>
          <MovieCard name={name} url={image.medium} premiered={premiered} genres={genres}  />
        </Link>
      })}

    </div>
    <div className="home__pagination">
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
    </div>
  </div>

}

export default HomeView;