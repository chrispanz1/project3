import React, {useState} from 'react'
import {getUserId,update,getUser,getUserDb} from '../../utilities/users-service'

function Update({ user }) {
    const [state, setState]=useState({
        id:getUserId(),
        name:'',
        password: '',
        confirm: ''

    })

    // The object passed to setState is merged with the current state object
    const handleChange = (evt) => {

        setState({
            ...state,
            [evt.target.name]: evt.target.value,
            
        });
        
    };

    // on submit alert current state
    const handleSubmit = async(e) => {
        e.preventDefault(); //prevents the default page refresh upon submit of data
       
         try{
            //const formData = {...state};
            delete state.error;
            delete state.confirm;
            const something=getUserDb()
            

             let {name, email, password} = state
             if(password===""){
                password=something.password
             }
             if(name===""){
                name=something.name
             }
            
            const user = await update(state)
            // setUser(user);
        } catch (err){
    
            setState({...state, error: 'Update Failed - Try Again'})
        }
    };


    //const disable = state?state.password !== state.confirm:false;

    return (
        <div>
        
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>

                    <label>Name</label>
                    <input type="text" name="name" defaultValue={user.name || ''} onChange={handleChange}  />
                    <label>Email</label>
                    <label>{user.email}</label>
                    <label>Password</label>
                    <input type="password" name="password" defaultValue={user.password || ''} onChange={handleChange} />
                    <label>Confirm</label>
                    <input type="password" name="confirm" defaultValue={user.confirm || ''} onChange={handleChange} />
                    <button type="submit">Update</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{state?state.error:''}</p>
        </div>
    );
}


export default Update