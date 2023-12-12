import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Form,Button } from "react-bootstrap"
import styles from './SignIn.module.css';

import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.signIn}>
      <header className={styles.iphone13statusBarwhite}>
      </header>
      <h3 className={styles.signInTo}>Sign in to OHSM</h3>
      <b className={styles.email}>Email</b>
      <b className={styles.password}>Password</b>
      <a className={styles.forgotPassword} />
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src={require(""+"../images/Group 19.jpg")} />
        <b className={styles.ohsm}>OHSM</b>
      </div>
      <div className={styles.signInChild} />
      <div className={styles.orContinueWith}>or continue with</div>
      <div className={styles.signInItem} />
      <button className={styles.button}>
        <img className={styles.googleIcon} alt="" src={require(""+"../images/google.jpg")} />
        <b className={styles.label}>Continue with Google</b>
      </button>
      <div className={styles.dontHaveAnAccountParent}>
        <div className={styles.dontHaveAn}>Don’t have an account?</div>
        <b onClick={navigate("/signup")} className={styles.signUp}>Sign up</b>
      </div>
      <Form className={styles.singleInputField}>
        <Form.Control type="text" placeholder='Username or email'/>
      </Form>
      <Form className={styles.singleInputFieldPassword}>
        <Form.Control type="text" placeholder='password'/>
      </Form>
      <Button className={styles.button1} variant="primary">Sign In</Button>
    </div>);
};

export default SignIn;
