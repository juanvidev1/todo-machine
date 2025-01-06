import React from "react";

const TodoHeader = ({ children, loading }) => {
  const newChildren = React.Children.toArray(children);

  return (
    <header>
      {newChildren.map((child) => React.cloneElement(child, { loading }))}
    </header>
  );
};

export { TodoHeader };
