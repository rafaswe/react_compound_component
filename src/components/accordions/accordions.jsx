import { createContext, useCallback, useMemo, useState } from "react";
import Content from "./Content";
import Header from "./Header";


export const AccordionContext = createContext();
const { Provider } = AccordionContext;
const Accordions = ({ children }) => {

    const [isExpand, setIsExpand] = useState(false);
    const handleIsExpand = useCallback(() => setIsExpand((prev) => !prev), []);
    const values = useMemo(() => ({ isExpand, handleIsExpand }), [isExpand, handleIsExpand])
    console.log(children)
    return (
        <Provider Provider value={values}>
            <h1>Hello</h1>
            <div>{children}</div>
        </Provider>
    )
}


Accordions.Header = Header;
Accordions.Content = Content;

export default Accordions