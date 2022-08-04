import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMoralis } from "react-moralis";


const Home: NextPage = () => {
   const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    const login = async () => {
        if (!isAuthenticated) {

            await authenticate({signingMessage: "Log in using Moralis" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user!.get("ethAddress"));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const logOut = async () => {
        await logout();
        console.log("logged out");
    }

    return (
    <div className={styles.container}>
        <button onClick={login}>Moralis Metamask Login</button>
        <button onClick={logOut} disabled={isAuthenticating}>Logout</button>

        {JSON.stringify(user)}
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>



      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
