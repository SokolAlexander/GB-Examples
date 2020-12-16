import React from 'react';

export default class Child extends React.Component {
  componentDidMount() {
    this.timeout = setTimeout(() => {}, 100);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  render() {
    console.log(this.props);
    console.log('this is render');

    return (
      <div>
        Some Child: {this.props.counter}
      </div>
    )
  }
}
