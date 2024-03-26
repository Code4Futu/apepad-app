import axios from "axios";
import { ChainId } from "@/config/type";
import { getBackEndUrls } from "@/utils/backend/getUrls";
import { Signer, ethers } from "ethers";

export async function getNonce(chainId: ChainId, address: string) {
  const getNonceUrl = getBackEndUrls(chainId, "GET_NONCE");

  try {
    const res = await axios.get(`${getNonceUrl}?address=${address}`);
    return res.data.data.nonce;
  } catch (error) {
    console.log(error);
    throw new Error(`Method: GET to ${getNonceUrl} fails`);
  }
}

function getMessage(): string {
  return "Welcome. By signing this message you are verifying your digital identity. This is completely secure and does not cost anything!";
}

function getSubMessage(nonce: number): string {
  return ` Nonce: ${nonce}`;
}

function getFullMessage(nonce: number): string {
  return `${getMessage()}${getSubMessage(nonce)}`;
}

export async function claimReward(signer: Signer) {
  try {
    const userAddress = await signer.getAddress();
    const chainId = await signer.getChainId();
    const nonce = await getNonce(chainId, userAddress);

    const messageBytes = ethers.utils.toUtf8Bytes(getFullMessage(nonce));
    const messageDigest = ethers.utils.keccak256(messageBytes);

    const signature = await signer.signMessage(messageDigest);
    const claimUrl = getBackEndUrls(chainId, "BALANCE_SNAPSHOT_CLAIM");
    const payload = {
      signature,
      address: userAddress,
    };

    const res = await axios.post(claimUrl, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res?.data?.data;
  } catch (error: any) {
    throw error?.response?.data?.message;
  }
}

export async function checkClaimSuccess(chainId: ChainId, address: string) {
  const checkClaimSucessUrl = getBackEndUrls(chainId, "SNAPSHOT_CLAIM_SUCCESS");
  try {
    const res = await axios.get(`${checkClaimSucessUrl}?address=${address}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res?.data?.data;
  } catch (error: any) {
    console.log("error", error);
    throw error?.response?.data?.message;
  }
}

export async function updateConfigSwapReward(signer: Signer, isAuto: boolean) {
  const address = await signer.getAddress();
  const chainId = await signer.getChainId();

  const updateConfigSwapRewardUrl = getBackEndUrls(
    chainId,
    "SWAP_REWARD_TO_LOOT"
  );

  const nonce = await getNonce(chainId, address);

  const messageBytes = ethers.utils.toUtf8Bytes(getFullMessage(nonce));
  const messageDigest = ethers.utils.keccak256(messageBytes);

  const signature = await signer.signMessage(messageDigest);

  const payload = {
    address,
    signature,
    is_auto: isAuto,
  };
  try {
    const res = await axios.post(updateConfigSwapRewardUrl, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res?.data?.data;
  } catch (error: any) {
    console.log("error", error);
    throw error?.response?.data?.message;
  }
}
