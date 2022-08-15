require('@typechain/hardhat')
require('@nomiclabs/hardhat-ethers')



import {HardhatUserConfig, task} from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  paths: {
  }
};

export default config;


// task('faucet', 'Sends ETH and tokens to an address')
//     .addPositionalParam('receiver', 'The address that will receive them')
//     .setAction(async ({ receiver }: { receiver: string }, { }) => {
//       const [sender] = await ethers.getSigners();
//
//       const tx2 = await sender.sendTransaction({
//         to: receiver,
//         value: ethers.constants.WeiPerEther,
//       });
//       await tx2.wait();
//
//       console.log(`Transferred 1 ETH and 100 tokens to ${receiver}`);
//     });