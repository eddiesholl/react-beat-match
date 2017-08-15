import React from "react";

require("!style-loader!css-loader!sass-loader!./App.scss");
// require("./App.scss");

const reactLogo = require('./react_logo.svg');

import styles from './Layout.scss';

class App extends React.Component {
    render() {
        return <div className="app">
          <div className={styles.wrapper}>
            <h1>Hello World!</h1>
            <p>Foo to the bar</p>
            <img src={reactLogo}/>
          </div>
        </div>;
    }
}

export default App;
