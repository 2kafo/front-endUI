
import { Route, Routes, Navigate } from "react-router-dom";
import {Dashboard, Home, Login, Signup} from './pages';
import './App.css';

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/" exact element={<Home />} />

			{user && <Route path="/dashboard" exact element={<Dashboard />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
		</Routes>
	);
}

export default App;