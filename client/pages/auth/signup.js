import { useState } from 'react';

const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(email, password)
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
           value={email}
           onChange={e => setEmail(e.target.value)}
           className="form-control">
        </input>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
           value={password}
           onChange={e => setPassword(e.target.value)}
           type="password"
           className="form-control"></input>
      </div>
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default signup;

