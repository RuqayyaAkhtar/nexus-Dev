import styles from './/page.module.css';
import Image from 'next/image';
import loginImage from './images/Group.png'; 

const LoginPage = () => {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.loginContainer}>
          <div className={styles.formContainer}>
            <h2 className={styles.heading}>LOG IN</h2>
  
            <label className={styles.label}>Email</label>
            <input type="email" placeholder="Enter email" className={styles.input} />
  
            <label className={styles.label}>Password</label>
            <input type="password" placeholder="Enter Password" className={styles.input} />
  
            <div className={styles.options}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                <span>Save my password</span>
              </label>
              <a href="#" className={styles.resetLink}>Reset Password</a>
            </div>
  
            <button className={styles.loginButton}>Log in</button>
          </div>
  
          <div className={styles.imageContainer}>
            <div className={styles.blurCircle}></div>
            <Image src={loginImage} alt="Login" className={styles.image} />
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginPage;