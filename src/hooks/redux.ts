import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {typeDispatch, typeRootReducer} from "../redux/store";

export const useTypedDispatch = (): typeDispatch => useDispatch()
export const useTypedSelector: TypedUseSelectorHook<typeRootReducer> = useSelector
