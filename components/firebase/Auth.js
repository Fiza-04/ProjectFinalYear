import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from "firebase/auth";
import { app } from "./FirebaseConfig";

const auth = getAuth(app);
export const SigninMethod = async (email,password) => {
    try {
        const userCrential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCrential.user.email,userCrential.user.uid)
        return [userCrential.user.email , userCrential.user.uid]
    } catch (error) { console.log(error) }
}
export const LoginMethod = async(email,password) =>{
    try {
        const userCrential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCrential.user.email,userCrential.user.uid)
        return [userCrential.user.email , userCrential.user.uid]
    } catch (error) { console.log(error)}
}
export const SignOutMethod = async() =>{
    try {
        const userCrential = await signOut()
    } catch (error) { console.log(error)}
}