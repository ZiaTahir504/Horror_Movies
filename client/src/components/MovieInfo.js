import React, { Fragment } from "react";

const MovieInfo = ( {movie} ) => {
    return (
        <Fragment>
            <button
                type='button'
                className="btn btn-link btn-anchor"
                data-toggle='modal'
                data-target={`#id${movie._id}2`}
            >
                {movie.title}
            </button>
            <div
                className="modal"
                id={`id${movie._id}2`}
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title'>{movie.title}</h4>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                            >
                                &times;
                            </button>
                        </div>
                        <div className ='modal-body'>
                            <p>
                                About: {movie.about}
                                <br></br>
                                <br></br>
                                Comment: {movie.comment}
                            </p>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-warning'
                                data-dismiss='modal'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MovieInfo;
