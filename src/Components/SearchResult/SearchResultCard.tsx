import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import styles from "../../Components/SearchResult/SearchResult";

const SearchResultCard = ({ superheroes, handleDescription }) => {
  return (
    <FlatList
      data={superheroes}
      horizontal={true}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card_pesquisa}>
          <TouchableOpacity onPress={() => handleDescription(item.id)}>
            <Image
              source={{ uri: item.image.url }}
              style={styles.img_pesquisa}
            />
          </TouchableOpacity>
          <Text style={styles.name_pesquisa}>{item.name}</Text>
        </View>
      )}
    />
  );
};

export default SearchResultCard;
