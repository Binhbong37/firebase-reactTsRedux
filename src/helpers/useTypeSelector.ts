import {useSelector, TypedUseSelectorHook} from 'react-redux';
import { rootState } from '../redux';


export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector