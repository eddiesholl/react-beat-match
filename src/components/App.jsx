import React from "react";

require("!style-loader!css-loader!sass-loader!./App.scss");
// require("./App.scss");

const reactLogo = require('./react_logo.svg');

import styles from './Layout.scss';
import Console from 'src/components/Console/Console'
import Mixer from 'src/components/Mixer/Mixer'

class App extends React.Component {
    render() {
        return (
          <div className="app">
            <div className={styles.wrapper}>
              <Console position={'left'} />
              <Mixer />
              <Console position={'right'} />
            </div>
          </div>
        )
    }
}

export default App;
