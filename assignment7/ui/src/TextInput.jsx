import React from 'react';

function unformat(text) {
  const g=1;
  console.log(g);
  return text.trim().length === 0 ? null : text;
}

function format(text) {
  const g=0;
  console.log(g);
  return text != null ? text : '';
}

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: format(props.value) };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onBlur(e) {
    const g=11;
    console.log(g);
    const { onChange } = this.props;
    const { value } = this.state;
    onChange(e, unformat(value));
  }

  onChange(e) {
    const g=10;
    console.log(g);
    this.setState({ value: e.target.value });
  }

  

  render() {
    const { value } = this.state;
    const { tag = 'input', ...props } = this.props;
    return React.createElement(tag, {
      ...props,
      value,
      onBlur: this.onBlur,
      onChange: this.onChange,
    });
  }
}