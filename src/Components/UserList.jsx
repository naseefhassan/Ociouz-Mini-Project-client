import { useEffect, useState } from "react";
import Axios from "../../api/axios";
import { Link } from "react-router-dom";

function UserList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get("/userList");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await Axios.delete(`/deleteUser/${userId}`);
      setUserData(userData.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const printData = () => {
    window.print();
  };
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-3xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h1 className="mb-4 text-2xl font-bold">User Details</h1>
        {userData.map((user) => (
          <div
            key={user._id}
            className="flex items-center justify-between p-4 mb-4 bg-gray-200 rounded-md"
          >
            <div>
              <p>
                <span className="font-semibold">Name:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">Age:</span> {user.age}
              </p>
              <p>
                <span className="font-semibold">Gender:</span> {user.gender}
              </p>
              <p>
                <span className="font-semibold">Phone Number:</span>{" "}
                {user.phoneNumber}
              </p>
              <p>
                <span className="font-semibold">Address:</span> {user.Address}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {user.Location}
              </p>
              <p>
                <span className="font-semibold">Job:</span> {user.Job}
              </p>
            </div>
            <div className="space-x-2">
             <Link to={"/edituser/:userId"}> <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Edit
              </button></Link>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={() => handleDelete(user._id)} // Use user._id instead of user.id
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={printData}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Print
      </button>
    </div>
  );
}

export default UserList;
