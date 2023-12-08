import React from "react";
import Button from 'react-bootstrap/Button';


const MyButton = (props) => {

    return (
          <Button variant="primary" size="lg" href="#">{props.children}</Button>
      );
    }

export default MyButton