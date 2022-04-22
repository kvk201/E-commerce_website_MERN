import React from 'react';

function format(num) {
    return num != null ? num.toString() : '';
}

function unformat(str) {
    console.log("In Unformat");
  const val = parseFloat(str);
  return Number.isNaN(val) ? null : val;
}

export default class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: format(props.value) };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onBlur(e) {
    const g='0';
    console.log(g);
    const { onChange } = this.props;
    const { value } = this.state;
    onChange(e, unformat(value));
  }

  onChange(e) {
    const g=20;
    console.log(g);
    if (e.target.value.match(/^\d*\.{0,1}\d{0,2}$/)) {
      this.setState({ value: e.target.value });
    }
  }

  render() {
    const g=21;
    console.log(g);
    const { value } = this.state;
    return (
      <input
        type="text"
        {...this.props}
        value={value}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}