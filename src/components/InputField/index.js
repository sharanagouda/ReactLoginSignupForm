import React from "react";
import PropTypes from "prop-types";

let wrapperStyle = {
    position: 'relative',
    marginTop: '1rem',
  };
  
  var inputStyle = {
    width: '15rem',
    padding: '0.25rem',
    transition: '.25s border ease-in-out',
    borderRadius: '0',
    outline: 'none',
    boxShadow: 'none',
    background: 'transparent',
    color: '#FFF',
    border: '0',
    borderBottom: '2px solid #CCC',
    fontSize: '1rem',
  };
  
  let inputFocusStyle = {
    borderBottom: '2px solid #CC2C21',
  };
  
  let hintStyle = {
    position: 'absolute',
    pointerEvents: 'none',
    left: '0.25rem',
    bottom: '0.25rem',
    fontSize: '1rem',
    color: '#CCC',
    transition: '.25s bottom ease-in-out, .25s font-size ease-in-out',
  };
  
  let hintFocusStyle = {
    position: 'absolute',
    left: '0',
    bottom: '1.5rem',
    color: '#FFF',
    fontSize: '0.875rem',
    fontWeight: 'lighter',
  };
  
  class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isFocused: false,
        value: props.value,
      }
    }
  
    componentWillMount() {
      this._updateStyles();
    }
  
    _onFocus() {
      this.setState({ isFocused: true });
    }
  
    _onBlur() {
      this.setState({ isFocused: false });
    }
  
    _onChange(event) {
      const value = event.target.value;
      this.setState({ value });
      this.props.onChange(value);
    }
  
    _updateStyles() {
      if (this.props.width !== null) {
        inputStyle = { ...inputStyle, width: this.props.width };
      }
      if (this.props.borderColor !== null) {
        inputStyle = { ...inputStyle, borderBottom: `2px solid ${this.props.borderColor}` };
      }
      if (this.props.borderFocusedColor !== null) {
        inputFocusStyle = { ...inputFocusStyle, borderBottom: `2px solid ${this.props.borderFocusedColor}` };
      }
      if (this.props.fontColor !== null) {
        inputStyle = { ...inputStyle, color: this.props.fontColor };
      }
      if (this.props.hintColor !== null) {
        hintStyle = { ...hintStyle, color: this.props.hintColor };
      }
      if (this.props.hintFocusedColor !== null) {
        hintFocusStyle = { ...hintFocusStyle, color: this.props.hintFocusedColor };
      }
    }
  
    render() {
      const inputFocusedStyle = {
        ...inputStyle,
        ...inputFocusStyle,
      };
      const hintFocusedStyle = {
        ...hintStyle,
        ...hintFocusStyle,
      };
  
      return (
        <div style={wrapperStyle}>
          <input
            onFocus={() => this._onFocus()}
            onBlur={() => this._onBlur()}
            onChange={(event) => this._onChange(event)}
            style={this.state.isFocused ? inputFocusedStyle : inputStyle}
            type={this.props.isPassword ? 'password' : 'text'}
            value={this.state.value}
          />
          <div style={this.state.isFocused || this.state.value !== '' ? hintFocusedStyle : hintStyle}>
            {this.props.hintText}
          </div>
        </div>
      );
    }
  }
  
  Input.propTypes = {
    borderColor: PropTypes.string,
    borderFocusedColor: PropTypes.string,
    fontColor: PropTypes.string,
    hintColor: PropTypes.string,
    hintFocusedColor: PropTypes.string,
    hintText: PropTypes.string.isRequired,
    isPassword: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    width: PropTypes.string,
  };
  
  Input.defaultProps = {
    borderColor: null,
    borderFocusedColor: null,
    fontColor: null,
    hintColor: null,
    hintFocusedColor: null,
    isPassword: false,
    width: null,
  };
  
  export default Input;