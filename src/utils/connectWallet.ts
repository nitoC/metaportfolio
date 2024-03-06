import { ethers } from "ethers";

export const connectWallet = async (params: string) => {
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
    const provider = new ethers.BrowserProvider(window.ethereum);
    console.log(await provider.getSigner());

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
