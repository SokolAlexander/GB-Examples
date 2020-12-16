import React from "react";

export default class Child extends React.PureComponent {
  render() {
    console.log("this is render pure");

    return <div>Some Child</div>;
  }
}
