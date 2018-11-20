import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import { Link } from 'react-router-dom';

import GridContainer from '../../components/reusable/GridContainer';
import GridItem from '../../components/reusable/GridItem';
import Card from '../../components/reusable/Card';
import Button from '../../components/reusable/Button';
import CardBody from '../../components/reusable/CardBody';
import CustomInput from '../../components/reusable/CustomInput';
import CardFooter from '../../components/reusable/CardFooter';
import AuthHeader from './AuthHeader';
import loginPageStyle from '../reusable/loginPageStyle';
import image from '../../assets/bg7.jpg'

import { register } from '../../store/actions/authActions';

class Register extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    cardAnimaton: "cardHidden"
  }
  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      300
    );
  }
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  }
  render() {
    const { auth, authError, classes } = this.props;
    if (auth.uid) return <Redirect to={'/'} />

    return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={10} md={4}>
              <Card className={classes[this.state.cardAnimaton]}>
                <form onSubmit={this.handleSubmit} className={classes.form}>
                  <AuthHeader classes={classes} type='Register' />

                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      onChange={this.handleChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      onChange={this.handleChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                             </Icon>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Last Name"
                      id="lastName"
                      onChange={this.handleChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                            account_box
                             </Icon>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="First Name"
                      id="firstName"
                      onChange={this.handleChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              account_box
                             </Icon>
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" simple color="primary" size="lg">
                      Register
                   </Button>
                  </CardFooter>
                  <Link to='/login'><p className={classes.divider}>go to Login page</p></Link>
                  <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: newUser => dispatch(register(newUser))
  }
}

export default compose(
  withStyles(loginPageStyle),
  connect(mapStateToProps, mapDispatchToProps)
)(Register)
