import React from 'react'
import { useState } from 'react'
import swal from 'sweetalert'
import { ToastContainer, toast, Flip } from 'react-toastify';

const Search = ({ comingData }) => {
    const [keyword, setKeyword] = useState('');
    const notify = () => toast.warn("Please fill input!");
    const formSubmit = e => {
        e.preventDefault();
        if (!keyword) {
            // swal ( "Oops" ,  "Please fill input!" ,  "warning" )
            notify();
        } else {
            comingData(keyword);
            setKeyword("");
        }
    }


    return (
        <>
            <section className="search-panel">
                <div className="container py-5">
                    <div className="search-box">
                        <h1>Search GitHub Users</h1>
                        <p>Enter a username to fetch a the users's profile and repos.</p>
                        <form onSubmit={formSubmit} className="input-group mb-3">
                            <input value={keyword} onChange={e => setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter the username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Flip}
            />

        </>
    )
}

export default Search