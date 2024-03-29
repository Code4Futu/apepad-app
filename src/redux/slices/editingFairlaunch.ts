// import { FairlaunchMetadata } from "@/models/projectMetadata";
// import { createSlice } from "@reduxjs/toolkit";
// import { BigNumber } from "ethers";

// interface EditingFairlaunchInfo {
//     metadata: FairlaunchMetadata
// }

// interface EditingFairlaunchState {
//     info: EditingFairlaunchInfo,
//     token: {
//         address: string,
//         fee: BigNumber,
//         listingOption: string,
//         affiliate: boolean,
//       },
//       pool: {
//         amount: BigNumber,
//         isWhiteList: boolean,
//       }
// }

// export const defaultFairlaunchState = {
//   info: {
//     metadata: {
//       name: "",
//       infoUri: "",
//       logoUri: "",
//       description: "",
//       twitter: "",
//       discord: "",
//       telegram: "",
//       youtube: "",
//       facebook: "",
//       instagram: "",
//       version: "",
//       archived: false,
//     },
//   },
//   token: {
//     address: "",
//     fee: BigNumber.from(0),
//     listingOption: "",
//     affiliate: false,
//   },
//   pool: {
//     amout: BigNumber.from(0),
//     isWhiteList: false,
//     softcap: BigNumber.from(0),
//     minContribution: BigNumber.from(0),
//     maxContribution: BigNumber.from(0),
//     router: "",
//     liquidityPercent: BigNumber.from(0),
//     start: "",
//     end: "",
//     lockupTime: "",
//     isUseVestingContributor: false,
//   },
// };

// const editingFairlaunchSlice = createSlice({
//     name: 'editingFairlaunch',
//     initialState: defaultFairlaunchState,
//     reducers: {
//         resetState: () => defaultFairlaunchState,
//         setFairlaunchInfo: (state, action: )
//     }
// })
