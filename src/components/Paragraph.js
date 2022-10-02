import { ThemeContext } from '../Provider/ThemeProvider';
import { useContext } from 'react';
import '../App.css'

function Paragraph(){
    const theme = useContext(ThemeContext)
    return (
        <p className={theme.theme}>
            The useEffect Hook allows you to perform side effects in your components.

            Some examples of side effects are: fetching data, directly updating the DOM, and timers.

            useEffect accepts two arguments. The second argument is optional.

            useEffect
        </p>
    )
}

export default Paragraph;