import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';


const main: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  // @ts-ignore
  const { ethers, deployments, getNamedAccounts } = hre;
  const {deploy} = deployments
  const { deployer } = await getNamedAccounts();


  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  await deploy('Lock', {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
     args: [unlockTime, {value: lockedAmount}],
    log: true,
  });
};

  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  //
  // await lock.deployed();

 // console.log("Lock with 1 ETH deployed to:", lock.address);

export default main
