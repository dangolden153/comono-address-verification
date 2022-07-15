import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import SmallText from "../Text/SmallText";
import { color } from "../../constants/Colors";
import { useAppDispatch } from "../../Redux/hooks";
import { addComment } from "../../Redux/Features/news/newsAction";
import ContentView from "../ContentView";

// type interface{

// }

const NewsMessage = ({ body, title, id }: any) => {
  const [openSDK, setOpenSDK] = useState(false);
  const dispatch = useAppDispatch();

  const commentData = {
    newsId: id,
    name: "Jan Wuckert",
    avatar: "http://lorempixel.com/640/480/fashion",
    comment: "This is me saying you're bluffing!",
  };

  // const handleSubmit = ()=>{
  //   dispatch(addComment(commentData))
  // }

  const handleOpen = () => {
    setOpenSDK(true);
  };
 

  const handleClose = () => {
  };
  return (
    <>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput placeholder="Add a comment..." style={styles.input} />
          <TouchableOpacity style={styles.btn} onPress={() => handleOpen()}>
            <SmallText
              textStyles={{
                textAlign: "center",
                color: color.text,
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              COMMENT
            </SmallText>
          </TouchableOpacity>
        </View>

        <View style={{}}>
          <SmallText>{body}</SmallText>
        </View>
      </View>

      <ContentView onClose={handleClose} onOpen={openSDK} dataString="hello world!!" />
    </>
  );
};

export default NewsMessage;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: color.gray,
    padding: 7,
    marginVertical: 10,
    flex: 1,
  },

  btn: {
    backgroundColor: "#00000040",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
});
