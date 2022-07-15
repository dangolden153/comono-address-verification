import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SmallText from "../Text/SmallText";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useAppSelector } from "../../Redux/hooks";
import { selectNewsComment } from "../../Redux/Features/news/newsSlices";
import { color } from "../../constants/Colors";

const Comment = () => {
  const comments = useAppSelector(selectNewsComment);
  const comment = [
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
    "Product Markets Planner",
  ];
  return (
    <View style={{ marginTop: 20 }}>
      <SmallText textStyles={{ marginBottom: 10 }}>
        {comments?.length > 0 ? comments?.length : comment.length} Comments
      </SmallText>

      <FlatList
        data={comments?.length > 0 ? comments : comment}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <SmallText textStyles={{ marginVertical: 3 }}>{item}</SmallText>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <TouchableOpacity>
                <AntDesign name="delete" size={15} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 15 }}>
                <Feather name="edit-2" size={15} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        // contentContainerStyle={{ marginTop:10}}
      />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
 
});
