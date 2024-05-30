import { Link, Routes, Route, useNavigate } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import User from "./User"
import { useDispatch, useSelector } from "react-redux"
import { changeinfo } from "./redux/UserSlice"
import PageNotFound from "./PageNotFound"

export default function App() {
  const uinfo = useSelector(state => state.uinfo.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  var logout = () => {
    dispatch(changeinfo({ name: undefined, token: undefined, image: undefined, isLogin: false }))
    navigate("/login")
    alert("Logout Succefully!!!!")
  }
  return (<>
    <div className="row bg-dark">
      <div className="col-xl-6 col-lg-6 p-2">
        <h2 className="text-center text-white">ChatBuddy Application</h2>
      </div>
      <div className="col-xl-6 col-lg-6 text-center">
        <header>
          <nav>
            <ul>
              {uinfo.isLogin ? <><li><Link to="/User" className="menus">User</Link></li>
                <li><Link to="/login" className="menus" onClick={logout} style={{ cursor: "pointer" }}>Logout</Link></li> </> 
                :
                 <> <li><Link to="/" className="menus">Home</Link></li>
                <li><Link to="/Login" className="menus">Login</Link></li>
                </>}
            </ul>
          </nav>
        </header>
      </div>
    </div>
    <Routes>

      {uinfo.isLogin ? <><Route path="/User" element={<User></User>}></Route></> : <>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route></>}

      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
  </>)
}