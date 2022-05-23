import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"

const useAuth = () => {
    // console.log(useContext(AuthContext));
    return useContext(AuthContext);

}
export default useAuth;