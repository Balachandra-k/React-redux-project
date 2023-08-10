import { configureStore } from "@testing-library/react";
import ContactReducer from "../Reducers/ContactReducer";

//configure store

const ContactStore = configureStore({
    reducer : ContactReducer,
    devTools : true
})
export default ContactStore