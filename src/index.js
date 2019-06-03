import React from 'react';
import ReactDOM from "react-dom";
import './styles/themeColors.scss';

const App = () => {
    return (
        <div>
            <h1 className='title'>Hello React!</h1>
            <h3 className='title3'>Hello React!</h3>
            <h4 className='title3'>Hello React!</h4>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));