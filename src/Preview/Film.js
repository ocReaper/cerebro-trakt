const React = require('react');
const styles = require('./styles.css');

module.exports = ({
  title, year, poster, overview, director,
  writer, certification, runtime, genres, first_aired,
  actors, rating, votes
}) => (
    <div>
        <section className="summary-wrapper">
            <div className="movie summary-ratings-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-2 col-sm-9 col-sm-offset-3">
                            <ul className="ratings">
                                <li>
                                    <div className="icon fa fa-heart rating-8"></div>
                                    <div className="number">
                                        <div className="rating">89%</div>
                                        <div className="votes">
                                            <span>24.3k</span> votes
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="stats">
                                <li>
                                    <div className="number">
                                        <div className="rating">122k</div>
                                        <div className="votes">watchers</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="number">
                                        <div className="rating">148k</div>
                                        <div className="votes">plays</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="number">
                                        <div className="rating">47.7k</div>
                                        <div className="votes">collected</div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="number">
                                            <div className="rating">48</div>
                                            <div className="votes">comments</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="number">
                                            <div className="rating">13.7k</div>
                                            <div className="votes">lists</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container summary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-2 col-sm-9 col-sm-offset-3 mobile-title">
                            <h1>
                                The Matrix <span className="year">1999</span>
                                <div className="certification">R</div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="info-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-3 hidden-xs">
                        <div className="sidebar affixable affix-bottom">
                            <div className="poster">
                                <img className="real" src="https://walter.trakt.tv/images/movies/000/000/481/posters/thumb/373310d2ee.jpg.webp" alt="Poster"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-9 info overview">
                        <div className="row">
                            <div className="col-lg-8 col-md-7">
                                <ul className="additional-stats with-external-links">
                                    <li>
                                        <label>Director</label>
                                        <a href="#">Lilly Wachowski</a>,
                                        <a href="#">Lana Wachowski</a>
                                    </li>
                                    <li>
                                        <label>Released</label>
                                        March 30, 1999
                                    </li>
                                    <li>
                                        <label>Runtime</label>
                                        136 mins
                                    </li>
                                    <li>
                                        <label>Language</label>
                                        English
                                    </li>
                                    <li>
                                        <label>Genres</label>
                                        <span>Action</span>,
                                        <span>Science Fiction</span>
                                    </li>
                                </ul>
                                <div>
                                    <div className="tagline">Welcome to the Real World.</div>
                                    <div className="overview">Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
