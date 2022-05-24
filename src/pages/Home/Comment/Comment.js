import React from 'react';

const Comment = () => {
    return (
        <div>
            <br />
            <h4>Leave your message here</h4>
            <hr className='mx-5' />
            <section className='p-5 mx-5'>
                <div className="form-floating mb-3">

                    <input type="text"
                        id="floatingInput" className="form-control"
                        placeholder="Dip Das" />
                    <label htmlFor="floatingInput">Name</label>

                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>

                <button type="button" className="btn btn-secondary btn-lg mt-3">Submit</button>
            </section>
        </div>
    );
};

export default Comment;