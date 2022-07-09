import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useAxios } from "../../utils/axiosIntance";
import { NewsItemProps } from "../../components/NewsItem/type";
import NewsItem from "../../components/NewsItem/NewsItem";

const HomeScreen = () => {
  const [data, setData] = useState<Array<NewsItemProps>>([]);
  const getNewsData = async () => {
    try {
      const { data } = await useAxios.get("news");
        // console.log("news data", data);
      setData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);


//   console.log('data', data)
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id, index }: any) => (index+id).toString()}
        renderItem={({ item }: any) => <NewsItem {...item} />}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{backgroundColor:"plum", width:"100%"}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
