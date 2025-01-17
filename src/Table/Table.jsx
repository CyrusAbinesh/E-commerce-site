import React, { useState } from 'react';
import * as bootstrap from 'bootstrap'
import { Table as BootstrapTable, Button, Modal, Form } from 'react-bootstrap';

function Table() {
    const [data, setData] = useState([
        { id: 1, name: "John Doe", age: 28, occupation: "Software Developer", location: "New York", salary: 85000 },
        { id: 2, name: "Jane Smith", age: 34, occupation: "Project Manager", location: "San Francisco", salary: 95000 },
        { id: 3, name: "Mike Johnson", age: 41, occupation: "Graphic Designer", location: "Los Angeles", salary: 70000 },
        { id: 4, name: "Emily Davis", age: 25, occupation: "Data Scientist", location: "Boston", salary: 92000 },
        { id: 5, name: "David Brown", age: 30, occupation: "Marketing Specialist", location: "Chicago", salary: 78000 },
    ]);

    const [editingRow, setEditingRow] = useState(null);

    const handleEditClick = (index) => {
        setEditingRow({ ...data[index], index });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingRow(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        const updatedData = [...data];
        updatedData[editingRow.index] = { ...editingRow };
        delete updatedData[editingRow.index].index;
        setData(updatedData);
        setEditingRow(null);
    };

    const handleClose = () => {
        setEditingRow(null);
    };

    return (
        <div>
            <BootstrapTable striped bordered hover variant="dark">
                <thead>
                    <tr>
                        {["ID", "Name", "Age", "Occupation", "Location", "Salary", "Action"].map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, i) => <td key={i}>{value}</td>)}
                            <td>
                                <Button variant="outline-light" onClick={() => handleEditClick(index)}>
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </BootstrapTable>

            <Modal show={!!editingRow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {editingRow && (
                        <Form>
                            {["name", "age", "occupation", "location", "salary"].map((field) => (
                                <Form.Group key={field} controlId={field}>
                                    <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                                    <Form.Control
                                        type={field === "age" || field === "salary" ? "number" : "text"}
                                        name={field}
                                        value={editingRow[field]}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            ))}
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Table;
