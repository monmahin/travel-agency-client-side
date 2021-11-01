
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendEmailVerification,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuth from "../Pages/Login/Firebase/firebase.init";
initialAuth();

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [loading,setLoading]=useState(true)
    const [name,setName]=useState('')
    const [email,setEmail]= useState('')
  const   [password,setPassword]=useState('')
  const [errors, setErrors] = useState('')
  const [isLogin,setIsLogin]=useState(false)

    const signInGoogle = () => {
        setLoading(true)
       return signInWithPopup(auth, provider)
            // .then(result => setUser(result.user))
            // .finally(() => setLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false))
    }

    const handleNameChange = e => {
        setName(e.target.value)
      }
    
      const emailChange = e => {
        setEmail(e.target.value)
      }
      const passwordChange = e => {
        setPassword(e.target.value)
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          console.log(result.user)
          setErrors('')
        })
        
      .catch((error) => {
      setErrors(error.message);
      // ..
    });
      }

    const handleRegistration = e => {
        e.preventDefault()
        console.log(email, password)
        if (password.length < 6) {
          setErrors('Password Must be atleast  6 characters long.')
          return
        }
    
        if (!/(?=.*[!@#$&*])/.test(password)) {
          setErrors('Ensure Password  Must be 1 Special character string.')
          return
        }
       
        isLogin? processLogin(email, password):registerNewUser(email, password)
    }
    
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            console.log(result.user)
            setErrors('')
            verifyEmail()
            setUserName()
          })
          
        .catch((error) => {
        setErrors(error.message);
        
      });
      }
    
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(result => { })
      }
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(user => {
          console.log(user)
        })
      }

    return { signInGoogle,user,logOut ,loading,handleRegistration,handleNameChange,emailChange,passwordChange};
};
export default useFirebase