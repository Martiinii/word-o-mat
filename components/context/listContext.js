import { createContext, useContext } from "react"
import useListStorage from "../useListStorage"

const ListContext = createContext();


const ListProvider = ({ children }) => {
    const [isReady, getList, lists, createList, removeList, updateList] = useListStorage();
    const value = { isReady, getList, lists, createList, removeList, updateList }

    return (
        <ListContext.Provider
            value={value}
        >
            {children}
        </ListContext.Provider>
    )
}

const useList = () => {
    const context = useContext(ListContext)

    if (context === undefined) {
        throw new Error("useList must be used within a ListContext")
    }

    return context;
}

export { ListProvider, useList }