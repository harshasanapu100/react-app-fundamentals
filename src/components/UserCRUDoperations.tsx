import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService, { User } from "../services/user-service";

const UserCRUDoperations = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request: getAllUsers, cancel } = userService.getAll<User>();

    getAllUsers
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.Message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id != user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.Message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Harsha Reddy" };
    setUsers([...users, newUser]);

    userService
      .add<User>(newUser)
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setError(err.Message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id == user.id ? updatedUser : u)));

    userService.update<User>(updatedUser).catch((err) => {
      setError(err.Message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}

      <div className="mb-3" style={{ fontWeight: "bold" }}>
        List of Users:
      </div>
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-primary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserCRUDoperations;
