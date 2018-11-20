import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";

import { login } from '../../store/actions/authActions';
import GridContainer from '../../components/reusable/GridContainer';
import GridItem from '../../components/reusable/GridItem';
import Card from '../../components/reusable/Card';
import CardHeader from '../../components/reusable/CardHeader';
import Button from '../../components/reusable/Button';
import CardBody from '../../components/reusable/CardBody';
import CustomInput from '../../components/reusable/CustomInput';
import CardFooter from '../../components/reusable/CardFooter';

import loginPageStyle from '../reusable/loginPageStyle';
import image from '../../assets/bg7.jpg'

class Login extends Component {
  state = {
    email: '',
    password: '',
    cardAnimaton: "cardHidden"
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
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
    this.props.login(this.state)
  }
  render() {
    const { authError, auth, classes } = this.props;
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
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[this.state.cardAnimaton]}>
                <form onSubmit={this.handleSubmit} className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
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
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" simple color="primary" size="lg">
                      Login
                    </Button>
                  </CardFooter>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds))
  }
}

export default compose(
  withStyles(loginPageStyle),
  connect(mapStateToProps, mapDispatchToProps)
)(Login)
