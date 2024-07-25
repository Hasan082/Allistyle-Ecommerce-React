import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <section className="min-h-[84vh] flex items-center justify-center">
            <div className="max-w-[550px] w-full h-full box-border p-5 bg-white border rounded-md">
                <div className="mb-3">
                    <h2 className="text-center mb-8 text-3xl text-secondary-color">Register</h2>
                    <form className="w-full">
                        <div className="grid grid-cols-2 gap-3">
                            <input className="rounded-md block w-full mb-5 h-10 px-3 py-[8px] border" type="text" placeholder="First Name" name="f_name" />
                            <input className="rounded-md block w-full mb-5 h-10 px-3 py-[8px] border" type="text" placeholder="Last Name" name="l_name" />
                        </div>
                        <div>
                            <input className="rounded-md block w-full mb-5 h-10 px-3 py-[8px] border" type="email" placeholder="Email" name="email" />
                        </div>
                        <div className="w-full h-10">
                            <span className="mr-4">
                                <input type="radio" id="male" name="gender" />
                                <label className="inline-block pl-2" htmlFor="male">Male</label>
                            </span>
                            <span>
                                <input type="radio" id="female" name="gender" />
                                <label className="inline-block pl-2" htmlFor="female">Female</label>
                            </span>                            
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input className="rounded-md block w-full mb-5 h-10 px-3 py-[8px] border" type="password" placeholder="Password" name="password" />
                            <input className="rounded-md block w-full mb-5 h-10 px-3 py-[8px] border" type="password" placeholder="Confirm Password" name="confirm_password" />
                        </div>
                        <button className="as-primary-btn w-full" type="submit">Register</button>
                    </form>
                    <p className="text-center mt-4 text-sm flex items-center justify-center">
                        Already registered? please
                        <Link className="text-xs px-2 py-1 rounded-xl ms-2 bg-secondary-color text-white transition-all duration-200 hover:text-tertiary-color" to="/login">Log in</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;