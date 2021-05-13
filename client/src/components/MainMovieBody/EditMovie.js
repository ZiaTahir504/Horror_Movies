import React, { Fragment, useState } from "react";

const EditMovie = ( {movie} ) => {
    const [comment, setComment] = useState(movie.comment);

    const updateComment = async e => {
        e.preventDefault();
        try {
            const body = { comment };
            await fetch(
                `http://localhost:3000/movies/${movie._id}`,
                {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
        } catch(err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <button
                type='button'
                className='btn btn-warning btn-rounded btn-sm m-0'
                data-toggle='modal'
                data-target={`#id${movie._id}`}
            >
                Edit
            </button>
            <div
                className="modal"
                id={`id${movie._id}`}
                onClick={() => setComment(movie.comment)}
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title'>Edit Movie Entry</h4>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                onClick={() => setComment(movie.comment)}
                            >
                                &times;
                            </button>
                        </div>
                        <div className ='modal-body'>
                            <text>Movie Comment</text>
                            <p></p>
                            <input
                                type='text'
                                className='form-control'
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                            />
                            <p></p>
                            <text>Seen?</text>
                            <p></p>
                            <div className='form-check form-check-inline'>
                                <input
                                    type='checkbox'
                                    id="inlineCheckbox1"
                                    className='form-check-input'
                                    value='option1'
                                />
                                <label class='form-check-label' for='inlineCheckbox1'>Yes</label>
                                &nbsp;&nbsp;&nbsp;
                                <input
                                    type='checkbox'
                                    id="inlineCheckbox2"
                                    className='form-check-input'
                                    value='option2'
                                />
                                <label class='form-check-label' for='inlineCheckbox2'>No</label>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-warning'
                                data-dismiss='modal'
                                onClick={(e) => { 
                                    updateComment(e); 
                                    window.location.reload(); 
                                }}
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

export default EditMovie;
