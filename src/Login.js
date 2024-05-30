import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeinfo } from './redux/UserSlice';

export default function Login() {
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    var emailBox = useRef()
    var passwordBox = useRef()
    const disptach = useDispatch()

    var login = async (event) => {
        event.preventDefault()
        var ob = {
            email: emailBox.current.value,
            password: passwordBox.current.value
        }
        var response = await axios.post
            ("http://apps.codebetter.in:8082/chatbuddy/auth/login", ob)
        var result = response.data
        setMsg(result.message)
        if (result.status) {
            var data = { ...result.data, isLogin: true }
            disptach(changeinfo(data))
            navigate("/User")
        }

    }

    return (<>
        <div className='mt-5'>
            <h2 className="text-center text-uppercase">Login Here</h2>
            <div className="container">

                <div className="row">
                    <form className='loginhead mt-3' onSubmit={login}>
                        <div className="col-xl-12 col-lg-12 mt-2">
                            <div className='label-float'>
                                <input type="text" ref={emailBox} placeholder="" className="form-control" />
                                <label>User Name</label>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 mt-2">
                            <div className='label-float'>
                                <input type="password" ref={passwordBox} placeholder="Password" className="form-control" />
                                <label>Password</label>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 text-center mt-4" >
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className='col-xl-12 col-lg-12 text-ceter'>
                            <h6 className='alert-danger'>{msg}</h6>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}