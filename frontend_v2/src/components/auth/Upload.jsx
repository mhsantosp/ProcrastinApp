import React, { Component } from "react";
import './LoginSignup.scss';
import md5 from 'md5';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    }
    this.handleChange = this.handleChange.bind(this)
  }
  3
  handleChange(event) {
    this.setState({ value: event.target.value })
    this.props.onChange(event.target.value)
  }

  render() {
    const { value, ...props } = this.props;

    return (
      <input
        {...props}
        type='text'
        value={this.state.value}
        onChange={this.handleChange} />
    )
  }
}

TextInput.defaultProps = ({ email: '' });

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.email
    }

    this.onChange = this.onChange.bind(this)
  }

  getGravatarUrl(size = 130) {
    const lowerCaseEmail = this.state.email.toLowerCase()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(lowerCaseEmail)) {
      return `https://www.gravatar.com/avatar/${md5(lowerCaseEmail)}?s=${size}`;
    } else {
      return 'https://cdn.apk-cloud.com/detail/image/company.yak.reactjsdocumentation-w130.png';
    }
  }

  onChange(newValue) {
    this.setState({ email: newValue })
  }

  render() {
    return (
      <div className='box'>
        <div>
          <TextInput
            name="email"
            placeholder="Correo electrónico"
            type="email"
            value={this.props.email}
            onChange={this.onChange} />
        </div>
        <img src={this.getGravatarUrl()} />
      </div>
    );
  }
};

Profile.defaultProps = ({ email: '' });


export default Profile