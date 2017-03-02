const React = require('react');
const styles = require('./styles.css');

module.exports = ({
  title, year, poster, overview, director,
  writer, certification, runtime, genres, first_aired,
  actors, rating, votes
}) => (
  <div className={styles.traktPreview}>
    <div className={styles.traktHeader}>
      <div className={styles.traktTitle}>
        <span>{title}</span>
        <span className={styles.traktYear}>({year})</span>
      </div>
      <div className={styles.traktRating}>
        <strong className={styles.traktRatingNumber} title={`${rating} based on ${votes} user ratings`}>{rating}</strong>/10
        <div>{votes} votes</div>
      </div>
    </div>
    <div className={styles.traktMeta}>
      { certification && <span>{certification}</span> }
      { runtime && <span>{runtime} min</span> }
      { genres && <span>{genres.join(', ')}</span> }
      { first_aired && <span>{first_aired}</span> }
    </div>
    <div className={styles.traktMain}>
      { poster && <img src={poster} className={styles.traktPoster} /> }
      <p>{overview}</p>
    </div>
    <dl className={styles.traktDetails}>
      <dt>Directors:</dt>
      <dd>{director}</dd>
      <dt>Writers:</dt>
      <dd>{writer}</dd>
      <dt>Stars:</dt>
      <dd>{actors}</dd>
    </dl>
  </div>
);
