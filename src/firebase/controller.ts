import {collection, getFirestore} from 'firebase/firestore'
import { app } from './index';

export const fireStore = getFirestore(app);

export const userCollecion = collection(fireStore, 'users')