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
   width: 15vw;
   max-width: 300px;
`;

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const getMovies = async () => {
        try {
            const movies = await fetch('http://localhost:3000/movies');
            const jsonData = await movies.json();
            
            setMovies(jsonData.sort((a,b) => b.year - a.year));
        } catch(err) {
            console.error(err.message);
        }
    };

    const deleteMovie = async (id) => {
        try {
            await fetch(`http://localhost:3000/movies/${id}`, {
                method: 'DELETE'
            });

            await setMovies(movies.filter(movie => movie._id !== id));
        } catch(err) {
            console.error(err.message);
        }
    };

    const searchMovies = async () => {
        try {
            const filtered = await movies.filter((movie) => Object.values(movie)
                .join(' ')
                .toLowerCase()
                .includes(searchTerm.toLowerCase()));
            setMovies(filtered);
        } catch(err) {
            console.error(err.message);
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
                            <Th scope='col' className='input-group'>
                                <Input 
                                    type="text" 
                                    className='form-control' 
                                    placeholder='Search for title / keyword'
                                    aria-label='Search for title / keyword'
                                    aria-describedby='basic-addon2'
                                    onChange={(e) => setSearchTerm(e.target.value)} 
                                />
                                <div className='input-group-append'>
                                    <button 
                                        className='btn btn-secondary btn-sm' 
                                        type='button'
                                        onClick={() => searchMovies()}
                                        >
                                            Search
                                        </button>
                                    <button 
                                        className='btn btn-danger btn-sm' 
                                        type='button'
                                        onClick={() => getMovies()}
                                        >
                                            Reset
                                        </button>
                                </div>
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
                                        onClick={() => {
                                            deleteMovie(movie._id);
                                            window.location.reload();
                                        }}
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
