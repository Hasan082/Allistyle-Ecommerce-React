import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [isChecked, setIsChecked] = useState(true)

    return (
        <section className="min-h-[84vh] flex items-center justify-center">
            <div className="max-w-[400px] w-full h-full box-border p-5 bg-white border rounded-md">
                    <div className="mb-3">
                        <h2 className="text-center mb-8 text-3xl text-secondary-color">Login</h2>
                        <form className="w-full">
                            <input className="rounded-md block w-full mb-5 h-10 px-3 py-[8px] border" type="email" placeholder="Your email" name="name" />
                            <input className="rounded-md block w-full mb-3 h-10 px-3 py-[8px] border" type="password" name="password" placeholder="Password" />
                            <div className="mb-3 flex justify-between items-center">                                
                                <div className="text-sm">
                                    <input onChange={()=>setIsChecked(!isChecked)} checked={isChecked} type="checkbox" id="remember" className="mr-1" />
                                    <label htmlFor="remember">Remember</label>
                                </div>
                                <div>
                                    <Link className="text-sm" to="/forget-password">Forgot Password?</Link>
                                </div>
                            </div>
                            <button className="as-primary-btn w-full" type="submit">Login</button>
                        </form>
                        <p className="text-center mt-4 text-sm flex items-center justify-center">
                            Don&apos;t have account? 
                            <Link className="text-xs px-2 py-1 rounded-xl ms-2 bg-secondary-color text-white transition-all duration-200 hover:text-tertiary-color" to="/signup">Sign up</Link>
                        </p>
                    </div>
            </div>
        </section>
    );
};

export default Login;