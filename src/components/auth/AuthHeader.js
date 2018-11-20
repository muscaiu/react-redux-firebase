import React from 'react';

import CardHeader from '../reusable/CardHeader';
import Button from '../reusable/Button';

const AuthHeader = ({ classes, type }) => (
  <CardHeader color="primary" className={classes.cardHeader}>
    <h4>{type}</h4>
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
)
export default AuthHeader;
