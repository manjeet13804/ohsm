import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import styles from "./SignUp.module.css";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.signUp}>
      <h3 className={styles.createAnAccount}>Create an account</h3>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src={require(""+"../images/Group 19.jpg")} />
        <b className={styles.ohsm}>OHSM</b>
      </div>
      <main className={styles.frameParent}>
        <section className={styles.fullNameParent}>
          <Form className={styles.singleInputField}>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" />
          </Form>
        </section>
        <div className={styles.emailParent}>
          <Form className={styles.singleInputField}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" />
          </Form>
        </div>
        <section className={styles.fullNameParent}>
          
            <Form className={styles.singleInputField}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" />
            </Form>
       
        </section>
        <section className={styles.fullNameParent}>
          <Form className={styles.singleInputField}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="text" />
          </Form>
        </section>
        <section className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.ratioButtonParent}>
                <Form.Check className={styles.ratioButtonFormcheck} label />
                <div className={styles.yesIWant}>
                  Yes, I want to receive email
                </div>
              </div>
              <div className={styles.ratioButtonGroup}>
                <Form.Check className={styles.ratioButtonFormcheck} label />
                <div className={styles.ohsm}>
                  <span className={styles.iAgreeTo}>{`I agree to all `}</span>
                  <b
                    className={styles.termsPrivacy}
                  >{`Terms & Privacy Policy`}</b>
                </div>
              </div>
            </div>
            <Button className={styles.button} variant="primary">
              Sign Up
            </Button>
          </div>
          <div className={styles.alreadyHaveAnAccountParent}>
            <div className={styles.yesIWant}>Already have an account?</div>
            <b onClick={navigate("/signin")} className={styles.signIn}>Sign in</b>
          </div>
        </section>
      </main>
    </div>
  );
};


export default SignUp;
