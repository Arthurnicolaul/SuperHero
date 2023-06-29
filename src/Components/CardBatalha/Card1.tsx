import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Card';

const Card = ({ superheroData, cardStyle, imageStyle, attributeStyle, nameStyle }) => {
  return (
    <View style={cardStyle}>
      {superheroData && (
        <>
          <Image source={{ uri: superheroData.image.url }} style={imageStyle} />
          <View style={attributeStyle}>
            <Text style={styles.text_prop}>intelligence: {superheroData.powerstats.intelligence}</Text>
            <Text style={styles.text_prop}>strength: {superheroData.powerstats.strength}</Text>
            <Text style={styles.text_prop}>speed: {superheroData.powerstats.speed}</Text>
            <Text style={styles.text_prop}>durability: {superheroData.powerstats.durability}</Text>
            <Text style={styles.text_prop}>power: {superheroData.powerstats.power}</Text>
            <Text style={styles.text_prop}>combat: {superheroData.powerstats.combat}</Text>
          </View>
          <Text style={nameStyle}>{superheroData.name}</Text>
        </>
      )}
    </View>
  );
};
export default Card;