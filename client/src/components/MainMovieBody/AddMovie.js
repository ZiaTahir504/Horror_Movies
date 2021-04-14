import React, { Fragment, useState, setState } from "react";
import styled from 'styled-components';

const Div = styled.div`
    width: 80vw;
    margin: auto;
    padding-top: 1vw;
`;

const AddMovie = () => {
    const [newMovie, setNewMovie] = useState([]);

    const addMovie = async (body) => {
        try {
            console.log(body);
        } catch(err) {
            console.error(err.message);
        }
    };

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
                                <form>
                                    <div className='form-group'>
                                        <label for='inputTitle'>Title</label>
                                        <input type='text' className='form-control' id='inputTitle' placeholder='Title'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label for='inputYear'>Year</label>
                                        <input type='text' className='form-control' id='inputYear' placeholder='Year'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label for='inputScore'>RT Score</label>
                                        <input type='text' className='form-control' id='inputScore' placeholder='Rotten Tomato Score'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label for='inputCountry'>Country</label>
                                        <input type='text' className='form-control' id='inputCountry' placeholder='Country'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label for='inputSeen'>Seen?</label>
                                        <input type='text' className='form-control' id='inputSeen' placeholder='Seen?'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-success'
                                data-dismiss='modal'
                                onClick={(e) => { 
                                    addMovie('hi!!!'); 
                                    window.location.reload(); 
                                }}
                            >
                                Add Movie
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </Div>
        </Fragment>
    );
};

export default AddMovie;
