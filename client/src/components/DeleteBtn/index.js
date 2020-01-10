import React from "react";
import Button from '../Button'
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <Button type="danger" className="delete-btn" {...props} role="button" tabIndex="0">
      Delete
    </Button>
  );
}

export default DeleteBtn;
