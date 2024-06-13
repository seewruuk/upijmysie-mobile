import {createContext, useContext, useState} from "react";


const GlobalContext  = createContext();
export const useGlobalContext  = () => useContext(GlobalContext);


const GlobalProvider   = ({children}) => {
    const [categories, setCategories] = useState({
        easy: false,
        medium: false,
        hard: false,
    });


    return (
        <GlobalContext.Provider
            value={{
                categories,
                setCategories
            }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;