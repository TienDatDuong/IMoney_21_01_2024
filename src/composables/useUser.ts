import {ref} from 'vue';
import { projectAuth } from '@/config/firebase';

export function useUser() {
  return {projectAuth}
}
