const Email = (props) => {
  const { fName, lName, email, message } = props.emailObj;

  return (
    <div>
      <h3>
        New Message From: {fName} {lName}
      </h3>
      <ul>
        <li>Email: {email}</li>
        <li>Message: {message}</li>
      </ul>
    </div>
  );
};

export default Email;
