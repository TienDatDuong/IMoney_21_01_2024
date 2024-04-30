import {ref} from 'vue';
import {signInWithEmailAndPassword,projectAuth} from '@/config/firebase'

const error = ref<string>('');
const isPending = ref<boolean>(false);

async function SignIn(email:string,password:string){
  error.value = null;
  isPending.value = true;
  try{
    const res = await signInWithEmailAndPassword(projectAuth,email,password)
    if(!res) throw new Error('account does not exist. please check again')
      return res
  }catch(err){
    console.log("🚀 ~ SignIn ~ err:", err)
    error.value = err.message
    console.log("🚀 ~ SignIn ~ error.value:", error.value)
  }finally{
    isPending.value = false;
  }
}

export function useSignIn(){
  return {
    isPending,error,SignIn
  }
}
