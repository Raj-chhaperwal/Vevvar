import React , {useState} from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook to navigate

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Check if the email and password match the required values
        if (email === 'vevvar@gmail.com' && password === '123456789') {
            navigate('/header'); // Redirect to the header page
        } else {
            alert('Invalid email or password'); // Show error message
        }
    };
    return (
        <>
            <section className="p-3 p-md-5 p-xl-5custom-container" style={{ backgroundColor: "#e5e5e5", minHeight: "100vh", width: "100%" }}>
                <div className="col-12 col-md-6 mt-5 px-5 m-auto">
                    <div className="col-12">
                        <div className="mb-4">
                            <h1 className="text-center" style={{ fontFamily: "times", fontSize: "3rem", fontWeight: "500" }}>Vevaar</h1>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} action="#!">
                        <div className="row gy-3 px-5">
                            <div className="col-12">
                                <div className="mb-2">
                                    <input type="email" className="form-control" name="email" id="email" required placeholder='Login' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mb-2">
                                    <input type="password" className="form-control" name="password" id="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}  />
                                </div>
                                <div className="col-12 d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                                        <label className="form-check-label" for="rememberMe">Remember Me</label>
                                    </div>
                                    <div>
                                        <Link to="/reset" className="text-secondary" role='button'>Forgot Password</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-grid">
                                    <button className="btn btn-lg" type="submit" style={{ backgroundColor: "#20df7f", color: "white", boxShadow: "0px 15px 10px -15px #111" }}>Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex gap-2 flex-column justify-content-center mt-3 mt-md-5">
                                <a href='#!' className="link-secondary text-decoration-none text-center">Does Not Have an Account Yet? Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" style={{ position: "absolute", bottom: "0", left: "0", width: "100%" }}>
                    <path fill="#00cba9" fill-opacity="1" d="M0,0L80,20C160,40,320,80,480,100C640,120,800,120,960,100C1120,80,1280,40,1360,20L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
                </svg>
            </section>
        </>
    )
}

export default LoginPage;