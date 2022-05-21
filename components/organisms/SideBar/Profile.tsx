import { useEffect, useState } from "react";
import Cookies  from "js-cookie";
import { JWTPayloadTypes } from "../../../services/data-types";
import jwtDecode from "jwt-decode";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    username: '',
    email: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: any = payload.pelanggan;
      setUser(userFromPayload)
    }
  }, [])

  return (
    <div className="user text-center pb-50 pe-30">
      <img 
        src={`https://minyak-beku.herokuapp.com/uploads/${user.avatar}`} alt="profile" 
        width="90" 
        height="90" 
        className="img-fluid mb-20" 
        style={{ borderRadius: '100%' }} 
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
