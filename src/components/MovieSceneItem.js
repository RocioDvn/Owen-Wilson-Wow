function MovieSceneItem(props) {
  return (
    <a className='card' href='#'>
      <img src={props.movie.poster} alt='poster' title='poster' />
      <p>
        {props.movie.movie} {props.movie.year}
      </p>
    </a>
  );
}
export default MovieSceneItem;