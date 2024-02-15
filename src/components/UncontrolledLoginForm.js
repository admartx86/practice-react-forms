import * as React from 'react';

const UncontrolledLoginForm = () => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value
    const password = passwordRef.current.value
    // const email = event.target.elements.email.value;
    // const password = event.target.elements.password.value;

    alert(email + ' ' + password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" ref={emailRef} />
        {/* <input id="email" type="text" /> */}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef} />
        {/* <input id="password" type="password" /> */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export { UncontrolledLoginForm };