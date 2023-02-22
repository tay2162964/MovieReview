import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardComponent from "./Card";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: "Minions: The Rise of Gru",
                release_date: "2022-07-01",
                run_time: 90,
                mpaa_rating: "PG",
                description: "Minions.... kek.",
                image_src: "https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_.jpg"
            },
            {
                id: 2,
                title: "Morbius",
                release_date: "2022-04-01",
                run_time: 104,
                mpaa_rating: "PG-13",
                description: "It's Morbin' time.",
                image_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0Cex3_WIDDSwfrA3lctOeA6uSX69mQPLNs3ra672F9A68fpF"
            }
        ];
        setMovies(moviesList);
    }, []);
    return (

        <div>
            <h2>Movies</h2>
            <hr></hr>
            <div className="container">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {movies.map((m) =>
                    <Link to={`/movies/${m.id}`}>
                            <CardComponent key={m.id}
                                title={m.title}
                                image_src={m.image_src}
                                text={m.description}
                            />
                        </Link>
                    )}
                </div>

            </div>


        </div>

    )
}
export default Movies;