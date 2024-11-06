import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaTrash, FaEdit } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Read() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    

    fetchData();

  }, []); // Empty dependency array means this runs once on mount

  const fetchData = async () => {
    try {
      const response = await axios.get("https://6723b22c493fac3cf24bf22f.mockapi.io/crud-operation");
      
      if (response.status === 200) {
        setData(response.data);
      } else {
        console.log("LOADING");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("There was an error fetching the data.");
    } finally {
      setLoading(false);  // Set loading to false regardless of success or error
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Placeholder functions for delete and update actions
  const onDelete = async (id) => {
    try {
       const response = await axios.delete(`https://6723b22c493fac3cf24bf22f.mockapi.io/crud-operation/${id}`);
       console.log(response.data);
       fetchData();
    } catch (error) {
       console.error(error);
    }
 };

  const onUpdate = (item) => {
    // navigate("/update",item); 
    navigate("/update", { state: { item } });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>
                <Button variant="danger" onClick={() => onDelete(e.id)} className="me-2">
                  <FaTrash /> Delete
                </Button>
              </td>
              <td>
                <Button variant="primary" onClick={() => onUpdate(e)}>
                  <FaEdit /> Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
