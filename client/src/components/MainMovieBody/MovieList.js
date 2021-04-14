import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import EditMovie from './EditMovie';
import MovieTitles from './MovieTitles';
import AddMovie from './AddMovie';

const Div = styled.div`
    margin: auto;
    width: 80vw;
    height: 60vh;
    overflow: auto;
    background-color: #EEC170;
`; 

const Thead = styled.thead`
    position: sticky;
    top: 0;
`;

const Th = styled.th`
    position: sticky;
    top: 0;
`;

const Input = styled.input`
   
`;

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const movies = await fetch('http://localhost:3000/movies');
            const jsonData = await movies.json();
            
            setMovies(jsonData);
        } catch(err) {
            console.error(err.message);
        }
    };

    const deleteMovie = async (id) => {
        try {
            await fetch(`http://localhost:3000/movies/${id}`, {
                method: 'DELETE'
            });

            setMovies(movies.filter(movie => movie._id !== id));
        } catch(err) {
            console.error(err.message);
        }
    };

    const searchTitles = async (e) => {
        if (e.keyCode === 13) {
            let input = e.target.value;
            console.log('bbep');
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <Fragment>
            <Div>
                <table className='table table-responsive{-md} table-borderless' data-toggle='table' cellSpacing='0'>
                    <Thead className='thead-dark'>
                        <tr>
                            <Th scope='col'>
                                <Input type="text" onkeydown='searchTitles(this)' placeholder="Search for movie title..." />
                            </Th>
                            <Th scope='col'>Year</Th>
                            <Th scope='col'>Rating</Th>
                            <Th scope='col'>Country</Th>
                            <Th scope='col'>Seen?</Th>
                            <Th scope='col'>Edit</Th>
                            <Th scope='col'>Delete</Th>
                        </tr>
                    </Thead>
                    <tbody>
                        {movies.map(movie => (
                            <tr key={movie._id}>
                                <th>
                                    <MovieTitles movie={movie} />
                                </th>
                                <td>{movie.year}</td>
                                <td>{movie.score}</td>
                                <td>{movie.country}</td>
                                <td>{movie.seen}</td>
                                <td>
                                    <EditMovie movie={movie} />
                                </td>
                                <td>
                                    <button 
                                        type='button' 
                                        className='btn btn-danger btn-rounded btn-sm m-0'
                                        onClick={() => deleteMovie(movie._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Div>
            <AddMovie />
        </Fragment>
    )
};

export default MovieList;
