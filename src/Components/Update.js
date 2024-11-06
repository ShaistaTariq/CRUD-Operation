// // Update.js
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// export default function Update(props) {
//     console.log("data is comin from create,", props)
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { item } = location.state || {}; // Retrieve the item passed via state

//     // Initialize state with existing data
//     const [name, setName] = useState(item?.name || '');
//     const [email, setEmail] = useState(item?.email || '');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         setLoading(true); // Set loading state

//         try {
//             const response = await axios.put(`https://6723b22c493fac3cf24bf22f.mockapi.io/crud-operation/${item.id}`, {
//                 name,
//                 email,
//             });

//             if (response.status === 200) {
//                 // Redirect to the Read component after a successful update
//                 navigate('/read');
//             }
//         } catch (err) {
//             console.error("Error updating data:", err);
//             setError("There was an error updating the data. Please try again.");
//         } finally {
//             setLoading(false); // Reset loading state
//         }
//     };

//     return (
//         <div>
//             <h1>Update Item</h1>
//             {error && <div className="alert alert-danger">{error}</div>}
//             <Form onSubmit={handleUpdate}>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control
//                         type="text"

//                         value={props.name}

//                     />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                         type="email"

//                         value={props.email}

//                     />
//                 </Form.Group>

//                 <Button variant="primary" type="update" disabled={loading}>
//                     up
//                 </Button>
//             </Form>
//         </div>
//     );
// }






import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Update() {
    const location = useLocation();
    const navigate = useNavigate();

    // Retrieve the item passed via state
    const { item } = location.state || {};


    console.log("MY ITME IS HER <------?",item)

    // Initialize state with existing data
    const [name, setName] = useState(item?.name || ''); // Use item data
    const [email, setEmail] = useState(item?.email || ''); // Use item data
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state

        try {
            const response = await axios.put(`https://6723b22c493fac3cf24bf22f.mockapi.io/crud-operation/${item.id}`, {
                name,
                email,
            });

            if (response.status === 200) {
                // Redirect to the Read component after a successful update
                navigate('/read');
            }
        } catch (err) {
            console.error("Error updating data:", err);
            setError("There was an error updating the data. Please try again.");
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div>
            <h1>Update Item</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading}>
                    Update
                </Button>
            </Form>
        </div>
    );
}


