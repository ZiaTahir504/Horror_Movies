import React, { Fragment } from "react";
import styled from 'styled-components';

const Div = styled.div`
    width: 80vw;
    margin: auto;
    padding-top: 1vw;
`;

const AddMovie = () => {
    return (
        <Fragment>
            <Div>
                <button 
                    type='button' 
                    className='btn btn-secondary btn-sm'
                    data-toggle='modal'
                    data-target={'#addMovieModal'}
                >
                    Add Movie
                </button>
                <div
                className="modal"
                id={'addMovieModal'}
                >
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h4 className='modal-title'>Add a Movie</h4>
                                <button
                                    type='button'
                                    className='close'
                                    data-dismiss='modal'
                                >
                                    &times;
                                </button>
                            </div>
                            <div className='modal-body'>
                                <form action='http://localhost:3000/movies' method='POST'>
                                    <div className='form-group'>
                                        <label htmlFor='inputTitle'>Title</label>
                                        <input name='title' type='text' className='form-control' id='inputTitle' placeholder='Title'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='inputYear'>Year</label>
                                        <input name='year' type='text' className='form-control' id='inputYear' placeholder='Year'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='inputScore'>RT Score</label>
                                        <input name='score' type='text' className='form-control' id='inputScore' placeholder='Rotten Tomato Score'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='inputCountry'>Country</label>
                                        <input name='country' type='text' className='form-control' id='inputCountry' placeholder='Country'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='inputSeen'>Seen?</label>
                                        <input name='seen' type='text' className='form-control' id='inputSeen' placeholder='Seen?'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='inputAbout'>About</label>
                                        <input name='about' type='text' className='form-control' id='inputAbout' placeholder='About'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='inputComment'>Comment</label>
                                        <input name='comment' type='text' className='form-control' id='inputComment' placeholder='Leave blank if not yet seen'></input>
                                    </div>
                                    <div>
                                        <input 
                                            type='submit' 
                                            value='Add Movie'
                                            className='btn btn-success'
                                        ></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Div>
        </Fragment>
    );
};

export default AddMovie;
