import { createContext, useState } from 'react';

export const MemberContext = createContext();

const MemberContextProvider = (props) => {

    const [data, setData] = useState([
        { heading: 'Brazal, Mathew Clint', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonText: 'View details >>' },
        { heading: 'Ditchella, Belle', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonText: 'View details >>' },
        { heading: 'Garcia, Brexther Leal', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonText: 'View details >>' },
        { heading: 'Laureta, John Benedict', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonText: 'View details >>' },
        { heading: 'Sampedro, James Paul', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonText: 'View details >>' },
    
    ])

    const [count, setCount] = useState(data.length);



    return (
        <MemberContext.Provider value={{ data, count }}>
        {props.children}
        </MemberContext.Provider>
    )

}

export default MemberContextProvider;