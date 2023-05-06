import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';

const Signup = () => {
	const [data, setData] = useState({
		fullName: "",

		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://fine-jade-rhinoceros-sock.cyclic.app/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="container">
			<div className="form">
				<h2>Welcome to do list</h2>
				<form onSubmit={handleChange}>
					<div className="form-group">
						<input type="text"
							name="fullName"
							onChange={handleChange}
							value={data.fullName}
							id="fullName"
							placeholder="Enter Your Full Name"

						/>
					</div>
					<div className="form-group">
						<input type="email"
							name="email"
							value={data.email}
							id="email"
							placeholder="Enter Your Username(email)"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<input type="password"
							name="password"
							value={data.password}
							id="password"
							placeholder="Enter Your Password"
							onChange={handleChange} />
					</div>

					<div className="form-group">
						<button type="submit">Sign Up </button>

					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;