import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Users() {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const storedUsers = localStorage.getItem("users");
		if (storedUsers) {
			setUsers(JSON.parse(storedUsers));
		}
	}, []);

	const deleteUser = (id) => {
		const updatedUsers = users.filter(user => user.id !== id);
		localStorage.setItem("users", JSON.stringify(updatedUsers));
		setUsers(updatedUsers);
	};


	return (
		<div className="p-3 d-flex align-items-center flex-column">
			<div className="w-75 d-flex justify-content-end">
				<Link className="mb-3 d-grid gap-2" to="/users/add">
					<Button className="py-2 px-3" variant="success" size="sm">
						Add
					</Button>
				</Link>
			</div>
			<Table className="w-75" striped bordered hover size="sm">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.firstname} </td>
							<td>{user.lastname}</td>
							<td>{user.email}</td>
							<td>
								<Link to={`/update`}>
									<Button variant="info">
										Update
									</Button>
								</Link>
								<Button
									onClick={() => deleteUser(user.id)}
									variant="danger"
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default Users;
