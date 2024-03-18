// import { Eip1193Provider, JsonRpcSigner } from "ethers";
// import { ethers } from "ethers";

export const connectWallet = async (params: string) => {
  console.log(params);
  console.log(await window.ethereum?.isMetaMask, "is metamask");
  console.log(await window.ethereum?.chainId, "chain id");
  console.log(window.ethereum?.chainId === "0x1", "chain check");
  if (window.ethereum === null) {
    console.log("Download Ethereum app");
  } else {
    console.log("window ethereum", window.ethereum);
    if (window.ethereum?.chainId === "0x1") {
      console.log(window.ethereum.chainId);
    }
    if (await window.ethereum?.isMetaMask) {
      // const provider = new ethers.BrowserProvider(
      //   window.ethereum as Eip1193Provider
      // );

      // console.log(provider, "provider");
      // const signer: JsonRpcSigner = await provider.getSigner();

      // console.log(signer.getAddress());
      // const address = await signer.getAddress();
      // console.log(address, "address");
      // const balance = await provider.getBalance(address);

      // console.log(balance, "balance");
      // @ts-expect-error html script function
      connect_wallet("MetaMask");

      return;
    }
    // try {
    //   const accounts = await window.ethereum.request({
    //     method: "eth_requestAccounts",
    //   });
    //   console.log(accounts);
    // } catch (err) {
    //   console.log(err, "in connect accounts");
    // }

    // // Retry logic
    // let retries = 3;
    // while (retries > 0) {
    //   try {
    //     await provider.send("eth_requestAccounts", []);
    //     const user = await provider.getSigner();
    //     console.log(user, params);
    //     break; // Break out of the loop if successful
    //   } catch (error) {
    //     console.error("Error connecting to Ethereum provider:", error);
    //     retries--;
    //     if (retries === 0) {
    //       console.error("Max retries exceeded");
    //       break;
    //     }
    //     await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second before retrying
    //   }
    // }
  }
};
