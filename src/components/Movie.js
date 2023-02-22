import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let currentMovie = {
            id: 1,
            title: "Minions: The Rise of Gru",
            release_date: "2022-07-01",
            run_time: 90,
            mpaa_rating: "PG",
            description: "Minions.... kek."
        }
        setMovie(currentMovie);
    }, [id]);
    return (

        <div>
            <h2>Movie: {movie.title}</h2>
            <small><em>Release date: {movie.release_date}, {movie.run_time} minutes, Rated {movie.mpaa_rating}</em></small>
            <hr></hr>
            <p>{movie.description}</p>
        </div>

    )
}
export default Movie;