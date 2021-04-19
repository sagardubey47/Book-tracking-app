import { HOME_VOLUME_FAIL, HOME_VOLUME_REQUEST, HOME_VOLUME_SUCCESS } from "../actionType";

 const initialState = {
     volumes: [],
     loading: false,
 }


export const homeVolumesReducer = (prevState = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
         case HOME_VOLUME_SUCCESS: 
            return {
                ...prevState,
                volumes: payload,
                loading: false,
            }

         case HOME_VOLUME_FAIL: 
            return {
                ...prevState,
                loading: false,
                error: payload,
            }

         case HOME_VOLUME_REQUEST: 
            return {
                ...prevState,
                loading: true,
            }   

        default: return prevState  
    }
}
