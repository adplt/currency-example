import React, {PureComponent} from 'react';

export default class ViewComponent extends PureComponent {

  render () {
    return (
      <div
        {...this.props}
      />
    );
  }
}
