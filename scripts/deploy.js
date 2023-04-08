// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = import("hardhat");

async function main() {

  //const Voting = await ethers.getContractFactory("Voting");
  //const voting = await Voting.deploy();

  //await voting.deployed();

  const AnyNFTCollectionFactory = await ethers.getContractFactory("AnyNFTCollectionFactory");
  const anyNFTCollectionFactory = await AnyNFTCollectionFactory.deploy();

  await anyNFTCollectionFactory.deployed();

  const AnyRental = await ethers.getContractFactory("AnyRental");
  const anyRental = await AnyRental.deploy(anyNFTCollectionFactory.address);

  await anyRental.deployed();

  anyNFTCollectionFactory.transferOwnership(anyRental.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
