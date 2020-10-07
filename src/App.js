import React, {Component} from 'react';
import CollapseUi from "./components/CollapseUI";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
              <CollapseUi/>
            </div>
        );
    }
}

export default App;
