import React, { useState } from 'react';

const Form = ({addUser}) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        role: "",
    })

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const submit = event => {
        event.preventDefault()
        addUser(user)
        setUser({name: "", email: "", role: ""})
    }

    return(
        <form onSubmit={submit}>
            <div className='formWrapper'>
            <div className="formName">
            <label htmlFor= 'name'>Name</label>
            <input id='name'
            type='text'
            name='name'
            placeholder='please Enter name'
            onChange={handleChange}
            value={user.name} />
            </div>
            <div className="formEmail">
            <label htmlFor= 'email'>Email</label>
            <input id='email'
            type='email'
            name='email'
            placeholder='please Enter email'
            onChange={handleChange}
            value={user.email} />
            </div>
            <div className="formRole">
            <label htmlFor= 'role'>Role</label>
            <input id='role'
            type='text'
            name='role'
            placeholder='please Enter role'
            onChange={handleChange}
            value={user.role} />
            </div>
            <button type='submit'>Add Member!</button>
            </div>
        </form>
    )
}
export default Form