import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="lg:w-[40%] flex-col py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
          </div>
          <div className="w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="w-1/2 mx-auto form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="p-6 text-center font-bold">
              Do not have a Account Please{" "}
              <Link className="text-blue-400" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
