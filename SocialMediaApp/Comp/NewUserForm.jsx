// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
function NewUserForm({newUser,setNewUser,CreatUser}) {
    // const[newUsers,setNewuser]=useState({
    //     FirstNam:"",
    //     LastName:"",
    //     Email:""
    // })

  return (
    <Form style={{width:"30rem",margin:'4em auto'}} >
        <h1>Add New User</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" rows={3} value={newUser.FirstName} onInput={(e)=>{
            setNewUser({
                ...newUser,
                FirstName:e.target.value
            })
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" rows={3} value={newUser.LastName} onInput={(e)=>{
             setNewUser({
                ...newUser,
                LastName:e.target.value
            })
        }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={newUser.Email} onInput={(e)=>{
             setNewUser({
                ...newUser,
                Email:e.target.value
            })
        }} />
      </Form.Group>
      <Button variant="dark" type='submit' onClick={CreatUser}>Add User</Button>
      
    </Form>
  );
}

export default NewUserForm;