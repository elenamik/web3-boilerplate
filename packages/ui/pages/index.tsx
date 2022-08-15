import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";
import * as React from "react";
import { ethers } from "ethers";
import { Lock } from "../../hardhat/typechain-types/";
import LockContract from "../../hardhat/artifacts/contracts/Lock.sol/Lock.json";

const Home: NextPage = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  console.log(process.env.NEXT_PUBLIC_TARGET_NETWORK);
  const bal = async () => {
    const balance = ethers.utils.formatEther(
      await provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
    );

    const contract = new ethers.Contract(
      LockContract.address,
      LockContract.abi,
      provider
    );
    console.log(contract);
    const contractBal = await provider.getBalance(contract.address);
    console.log(ethers.utils.formatEther(contractBal));
  };
  bal();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <div className={styles.container}>
      <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>
        Logout
      </button>

      {JSON.stringify(user)}
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
