import React from 'react';


function unformat(text) {
  return text.trim().length === 0 ? null : text;
}


function format(text) {
  return text != null ? text : '';
}

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: format(props.value) };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onBlur(e) {
    const f = 12;
    console.log(f);
    const { onChange } = this.props;
    const { value } = this.state;
    onChange(e, unformat(value));
  }

  render() {
    const f = 11;
    console.log(f);
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
