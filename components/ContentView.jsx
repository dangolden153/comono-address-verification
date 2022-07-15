import React from "react";
import { WebView } from "react-native-webview";

import {  View, Modal } from "react-native";

// interface webViewProps {
//   dataString: string;
//   onOpen: boolean;
//   onClose: () => void;
// }
const ContentView = (props) => {

  console.log('props?.dataString', props?.dataString)
  const url =
    "https://ecocomonoreact.azurewebsites.net/customer-details?workitemId=AO-095734358976187628-CO&customerName=Test%20Customer&customerEmail=boluwatobi@gmail.com&branchCode=007&segmentId=ADB&houseNumber=25&streetName=Pilot%20Crescent&areaName=Ajah&landmark=Shoprite&state=LG&lga=694&createdBy=RealMg&customerImage=&Latitude=6.4886218&Longitude=3.3567333";

  return (
    <Modal
      animationType="slide"
      visible={props?.onOpen}
      onRequestClose={props.onClose}
    >
      <View style={{flex: 1}}>
        <WebView source={{ uri: url }} />
      </View>
    </Modal>
  );
};

export default ContentView;



// import React, { useEffect, useRef, useState } from "react";
// import { isRequired } from "./helpers";
// import type { PaymentProps } from "./@types";
// import SDKWrapper from "./components/SDKWrapper";
// import { WebView } from "react-native-webview";
// import {
//   COPIED,
//   FETCHED,
//   PAYMENT_CLOSE,
//   PAYMENT_ERROR,
//   PAYMENT_SUCCESS,
// } from "./constants";
// import Loader from "./components/Loader";
// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Clipboard from "@react-native-clipboard/clipboard";

// const Lazerpay = (props: PaymentProps) => {
//   const [checkPropsValue, setCheckProps] = useState(false);
//   const webviewRef: any = useRef();

//   const {
//     publicKey,
//     customerName,
//     customerEmail,
//     currency,
//     businessLogo,
//     reference,
//     acceptPartialPayment,
//     amount,
//     metadata,
//     onError,
//     onSuccess,
//     onClose,
//     openSDK,
//   } = props;

//   useEffect(() => {
//     const checkProps = () => {
//       const validAmount =
//         amount && !isNaN(+amount) && typeof +amount === "number";
//       let validProps =
//         validAmount &&
//         !!currency &&
//         !!publicKey &&
//         onClose !== undefined &&
//         onSuccess !== undefined &&
//         onError !== undefined;

//       if (validProps) {
//         setCheckProps(true);
//       } else {
//         console.error(
//           "cannot initialize SDK, ensure you're passing all the required props"
//         );
//         !validAmount && console.error("Enter a valid amount");
//         isRequired("publicKey", !!publicKey);
//         isRequired("Enter an amount", !!amount);
//         isRequired("Enter a Valid Currency", !!currency);
//         isRequired("onClose callback", onClose !== undefined);
//         isRequired("onError callback", onError !== undefined);
//         isRequired("onSuccess callback", onSuccess !== undefined);
//       }
//     };

//     if (openSDK) {
//       checkProps();
//     }
//   }, [
//     publicKey,
//     customerName,
//     customerEmail,
//     currency,
//     amount,
//     businessLogo,
//     reference,
//     acceptPartialPayment,
//     metadata,
//     onError,
//     onSuccess,
//     onClose,
//     openSDK,
//   ]);

//   let addressResponse: any = null;

//   const messageReceived = ({ nativeEvent: { data } }: any) => {
//     const response: any = JSON.parse(data);

//     switch (response.event) {
//       case PAYMENT_CLOSE:
//         onClose();
//         break;
//       case PAYMENT_SUCCESS:
//         onSuccess(response);
//         break;
//       case PAYMENT_ERROR:
//         onError(response);
//         break;

//       case COPIED:
//         Clipboard.setString(addressResponse.data.address);
//         break;

//       case FETCHED:
//         addressResponse = response.data;
//         break;
//     }
//   };

//   const injectValues = () => {
//     webviewRef.current.postMessage(
//       JSON.stringify({
//         customerName,
//         customerEmail,
//         currency,
//         amount,
//         acceptPartialPayment,
//         publicKey,
//         businessLogo,
//         reference,
//         metadata: metadata || {},
//       })
//     );
//   };

//   return (
//     <SDKWrapper visible={openSDK} onRequestClose={onClose}>
//       {checkPropsValue ? (
//         <WebView
//           ref={webviewRef}
//           source={{
//             uri: "https://lazerpay-react-native.vercel.app",
//           }}
//           onMessage={messageReceived}
//           onLoadEnd={() => injectValues()}
//           cacheEnabled={false}
//           cacheMode={"LOAD_NO_CACHE"}
//           startInLoadingState={true}
//           renderLoading={() => <Loader />}
//         />
//       ) : (
//         <>
//           <View style={styles.container}>
//             <TouchableOpacity
//               style={{
//                 padding: 20,
//                 marginRight: -20,
//                 position: "absolute",
//                 alignItems: "flex-end",
//                 alignSelf: "flex-end",
//               }}
//               onPress={onClose}
//             >
//               <Image
//                 source={require("./assets/close.png")}
//                 style={styles.closeImg}
//               />
//             </TouchableOpacity>
//             <View style={styles.imgCont}>
//               <Image
//                 source={require("./assets/warning.png")}
//                 style={styles.img}
//                 resizeMode="contain"
//               />
//             </View>
//             <Text style={styles.text}>Something went wrong. Try again</Text>
//           </View>
//         </>
//       )}
//     </SDKWrapper>
//   );
// };

// export default Lazerpay;
// const styles = StyleSheet.create({
//   text: {
//     fontSize: 16,
//     color: "#727EA3",
//     fontWeight: "400",
//     marginTop: 10,
//   },
//   closeImg: {
//     width: 32,
//     height: 32,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     height: "100%",
//     width: "100%",
//     alignItems: "center",
//     position: "absolute",
//   },
//   img: {
//     width: 80,
//     height: 80,
//   },
//   imgCont: {
//     marginTop: 100,
//     alignItems: "center",
//   },
// });
