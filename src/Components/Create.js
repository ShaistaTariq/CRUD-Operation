import { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to ensure fields are not empty
    if (!name || !email) {
      alert("Please fill in both name and email fields.");
      return;
    }

    axios.post("https://6723b22c493fac3cf24bf22f.mockapi.io/crud-operation", {
      name: name,
      email: email,
    })
    .then(response => {
      console.log("Data sent successfully:", response.data);
      navigate("/read");  // Navigate only after successful data submission
    })
    .catch(error => {
      console.error("Error sending data:", error);
      alert("There was an error submitting the data. Please try again.");
    });
  };

  return (
    <div>
        <h1 style={{textAlign:'center',color:'black',font:'Arial black'}}>CRUD Operation</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Your Name" 
            value={name}
            onChange={(e) => setname(e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your Email" 
            value={email}
            onChange={(e) => setemail(e.target.value)} 
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
