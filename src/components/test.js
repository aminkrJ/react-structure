import React from 'react';
import {render} from 'react-dom';
import _ from 'underscore';

export default class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
  }

  render(){
    return (
      <div className="test">
      </div>
    );
  }
};

Test.defaultProps = {
};
