import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Marvel from "../../assets/image/Marvel.png";
import Dc from "../../assets/image/Dc.png";
import DhComics from "../../assets/image/Dark_Horse_Comics.png";
import Corte from "../../assets/image/CorteImg.png";
import Corte2 from "../../assets/image/Corte2.png";
import btn_detalhe from "../../assets/image/NextDetails.png";
import Back from "../../assets/image/Back.png";
import Next from "../../assets/image/Next.png";
import Proximo from "../../assets/image/Proximo.png";

import styles from "../Card/CardStyle";

const SuperheroCard = ({
  superheroData,
  handleDescription,
  handlePlus,
  handleDown,
  superHeroId,
}) => {
  const handleChangePublisher = () => {
    if (superheroData.biography.publisher === "Marvel Comics") {
      return <Image source={Marvel} style={styles.img_marvel} />;
    } else if (superheroData.biography.publisher === "DC Comics") {
      return <Image source={Dc} style={styles.img_dc} />;
    } else if (superheroData.biography.publisher === "Dark Horse Comics") {
      return <Image source={DhComics} style={styles.img_dh} />;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.img_card}>
        <Image source={{ uri: superheroData.image.url }} style={styles.img} />
      </View>

      <View style={styles.title}>
        <Text style={styles.name}>{superheroData.name}</Text>
        <View style={styles.logo}>{handleChangePublisher()}</View>
        <Text style={styles.full_name}>
          {superheroData.biography["full-name"]}
        </Text>
      </View>
      <View style={styles.properties}>
        <Text style={styles.text_properties}>
          Apelido: {superheroData.biography.aliases}
        </Text>
        <Text style={styles.text_properties_height}>
          Altura: {superheroData.appearance.height[1]}
        </Text>
        <Text style={styles.text_properties_weight}>
          Peso: {superheroData.appearance.weight[1]}
         </Text>
         <View>
         <TouchableOpacity onPress={() => handleDescription(superHeroId)}>
         <Image source={Proximo} style={styles.btn_detalhe}/>
        </TouchableOpacity>
        
         </View>
      </View>

      <Image source={Corte} style={styles.corte} />
      <Image source={Corte2} style={styles.corte2} />
      <View style={styles.btn_arrow}>
        <TouchableOpacity onPress={() => handleDown()}>
          <Image source={Back} style={styles.btn_back} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePlus()}>
          <Image source={Next} style={styles.btn_next} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuperheroCard;
