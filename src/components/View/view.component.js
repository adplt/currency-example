import React, {Component} from 'react';

class ViewComponent extends Component {
  
  render () {
    return (
      <div {...this.props} />
    );
  }
}

export default ViewComponent;
