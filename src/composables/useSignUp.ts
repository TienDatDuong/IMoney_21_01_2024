import {ref} from 'vue';
import {projectAuth,createUserWithEmailAndPassword} from '@/config/firebase'

const error = ref<string>('');
const isPending = ref<boolean>(false);

async function signUp(email: string,password: string) {
error.value = null;
isPending.value = true;
try{
  const res = await createUserWithEmailAndPassword(projectAuth,email,password);
  if(!res) throw new Error('Could not create a new user');
  return res;
}catch(err){
error.value = err.message
}finally{
  isPending.value = false;
}
}

export function useSignUp() {
  return {signUp,error, isPending}
}
