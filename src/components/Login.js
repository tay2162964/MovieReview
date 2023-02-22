import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Input from "./form/Input";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setJwtToken } = useOutletContext();
    const { setAlertClassName } = useOutletContext();
    const { setAlertMessage } = useOutletContext();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email/pass", email, password);
        if(email ==="admin@example.com") {
            setJwtToken("abc");
            setAlertClassName("d-none");
            setAlertMessage("");
            navigate("/");
        }
        else {
            setAlertClassName("alert-danger");
            setAlertMessage("Invalid Credentials");
        }

    }
    return (

        <div className="col-md-5 offset-md-3">
            <h2>Login</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <Input
                    title="Email Address"
                    type="Email"
                    className="form-control"
                    name="email"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    title="Password"
                    type="Password"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <input 
                    type="submit"
                    className="btn btn-primary offset-md-10"
                    value="Login"
                />
            </form>
        </div>

    )
}
export default Login;