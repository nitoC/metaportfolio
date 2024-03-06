import { Eip1193Provider, JsonRpcSigner } from "ethers";
import { ethers } from "ethers";

export const connectWallet = async (params: string) => {
  console.log(params);
  if (window.ethereum === null) {
    console.log("Download Ethereum app");
  } else {
    console.log("window ethereum", window.ethereum);
    // try {
    //   const accounts = await window.ethereum.request({
    //     method: "eth_requestAccounts",
    //   });
    //   console.log(accounts);
    // } catch (err) {
    //   console.log(err, "in connect accounts");
    // }
    const provider = new ethers.BrowserProvider(
      window.ethereum as Eip1193Provider
    );
    const signer: JsonRpcSigner = await provider.getSigner();

    console.log(signer.getAddress());

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
