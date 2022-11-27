const hre = require("hardhat");

async function main() {
  const AbToken = await hre.ethers.getContractFactory("AbToken");
  const abToken = await AbToken.deploy(100000000, 50);

  await abToken.deployed();

  console.log("Ocean Token deployed: ", abToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
