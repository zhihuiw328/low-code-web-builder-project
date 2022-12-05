export default function Login() {
  return(
      <div className ="body">
          <div>Login page</div>
          <input type="email" placeholder="Enter email"/>
          <br/>
          <input type="password" placeholder="Enter password"/>
          <br/>
          <button type="submit" > Log in </button>
          Forgot <a href="#">password</a>?
          <br/>
          <button type="submit" > Sign up </button>
          <br></br>
      </div>
  )
};

