import { useState } from "react";
import Axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate=useNavigate()
  
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    gender: " ",
    age: " ", 
    phoneNumber: " ",
    Address: " ",
    Location: " ",
    Job: " ",
  });

  const handlelogin = async (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = Axios.post("/postForm", formData);
      navigate('/users')
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">User Details</h1>

        <form onSubmit={onSubmit}>
        <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            name:
          </label>
          <input
            type="name"
            id="name"
            name="name"
            required
            onChange={handlelogin}
            value={formData.name}
            className="w-full px-4 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handlelogin}
            value={formData.email}
            className="w-full px-4 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="gender"
          >
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            required
            onChange={handlelogin}
            value={formData.gender}
            className="w-full px-4 mb-4 border rounded-md"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="age"
          >
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            onChange={handlelogin}
            value={formData.age}
            className="w-full px-4 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="phoneNumber"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            onChange={handlelogin}
            value={formData.phoneNumber}
            className="w-full px-4 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="Address"
          >
            Address:
          </label>
          <input
            type="tel"
            id="Address"
            name="Address"
            required
            onChange={handlelogin}
            value={formData.Address}
            className="w-full px-4 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="Location"
          >
            Location:
          </label>
          <input
            type="tel"
            id="Location"
            name="Location"
            required
            onChange={handlelogin}
            value={formData.Location}
            className="w-full px-4 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="Job"
          >
            Job:
          </label>
          <input
            type="tel"
            id="Job"
            name="Job"
            required
            onChange={handlelogin}
            value={formData.Job}
            className="w-full px-4 mb-4 border rounded-md"
          />

          <button
            type="submit"
            className="px-6 mr-5 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
          >
            Save
          </button>

          <button
            type="submit"
            className="px-4 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
