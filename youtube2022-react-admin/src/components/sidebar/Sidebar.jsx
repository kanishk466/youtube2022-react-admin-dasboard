import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import StoreIcon from "@mui/icons-material/Store";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link,useNavigate } from "react-router-dom";
 import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import axios from "axios";

const Sidebar = () => {
 
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = async () => {

    dispatch({ type: "LOGOUT" });
    try {
      const res = await axios.get("http://localhost:8800/api/auth/logout")
      console.log(res);
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
         
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
        
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span  onClick={logout} >Logout</span>
          </li>
        </ul>
      </div>
  
    </div>
  );
};

export default Sidebar;
