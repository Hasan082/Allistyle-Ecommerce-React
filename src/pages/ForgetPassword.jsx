


const ForgetPassword = () => {
    return (
        <section className="min-h-[84vh] flex items-center justify-center">
            <div className="max-w-[400px] w-full h-full box-border px-5 py-8 bg-white border rounded-md">
                    <div className="mb-3">
                        <h2 className="text-center mb-8 text-3xl text-secondary-color">Forget Password</h2>
                        <form className="w-full">
                            <input className="rounded-md block w-full mb-5 h-10 px-3 py-[8px] border" type="email" placeholder="Your registered email" name="name" />
                            <button className="as-primary-btn w-full" type="submit">Send</button>
                        </form>
                    </div>
            </div>
        </section>
    );
};

export default ForgetPassword;