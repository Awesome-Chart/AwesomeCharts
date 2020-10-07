import React, {Component} from 'react';

class CollapseUi extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="ui styled accordion">
                    <div className="active title">
                        <i className="dropdown icon"></i>
                        Level 1
                    </div>
                    <div className="active content">
                        Welcome to level 1
                        <div className="accordion">
                            <div className="active title">
                                <i className="dropdown icon"></i>
                                Level 1A
                            </div>
                            <div className="active content">
                                <p>Level 1A Contents</p>
                                <div className="accordion">
                                    <div className="title active">
                                        <i className="dropdown icon"></i>
                                        Level 1A-A
                                    </div>
                                    <div className="content active">
                                        Level 1A-A Contents
                                    </div>
                                    <div className="title">
                                        <i className="dropdown icon"></i>
                                        Level 1A-B
                                    </div>
                                    <div className="content">
                                        Level 1A-B Contents
                                    </div>
                                </div>
                            </div>
                            <div className="title">
                                <i className="dropdown icon"></i>
                                Level 1B
                            </div>
                            <div className="content">
                                Level 1B Contents
                            </div>
                            <div className="title">
                                <i className="dropdown icon"></i>
                                Level 1C
                            </div>
                            <div className="content">
                                Level 1C Contents
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        <i className="dropdown icon"></i>
                        Level 2
                    </div>
                    <div className="content">
                        <p>Welcome to level 2</p>
                        <div className="accordion">
                            <div className="active title">
                                <i className="dropdown icon"></i>
                                Level 2A
                            </div>
                            <div className="active content">
                                <p>Level 2A Contents</p>
                                <div className="accordion">
                                    <div className="title">
                                        <i className="dropdown icon"></i>
                                        Level 2A-A
                                    </div>
                                    <div className="content">
                                        Level 2A-A Contents
                                    </div>
                                    <div className="title">
                                        <i className="dropdown icon"></i>
                                        Level 2A-B
                                    </div>
                                    <div className="content">
                                        Level 2A-B Contents
                                    </div>
                                </div>
                            </div>
                            <div className="title">
                                <i className="dropdown icon"></i>
                                Level 2B
                            </div>
                            <div className="content">
                                Level 2B Contents
                            </div>
                            <div className="title">
                                <i className="dropdown icon"></i>
                                Level 2C
                            </div>
                            <div className="content">
                                Level 2C Contents
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CollapseUi;
