import React, {useState} from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import constant from './constant';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    marginTop: -10,
    margin: 10,
  },
  cards: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-20%',
  },

  price: {
    fontSize: 16,
    fontWeight: '600',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    aspectRatio: 1,
  },
  favourite: {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  iconContainer: {
    height: 40,
    width: 40,
    position: 'absolute',
    backgroundColor: 'blue',
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    marginRight: 90,
  },
});

function Heart() {
  const [fabitems, setFabItems] = useState(
    constant.filter(item => item.isFavourite === true),
  );

  const handleChange = item => {
    let foundItem = fabitems.find(itm => itm.id === item.id);
    foundItem.isFavourite = !foundItem.isFavourite;
    const newItems = fabitems.filter(itm => itm.id !== item.id);
    setFabItems([...newItems]);
  };
  return (
    <View>
      <ScrollView>
        {(fabitems || []).map(item => {
          return (
            <View key={item.id} style={styles.cards}>
              <Image style={styles.image} source={Image} />
              <Text style={styles.name}>{item.name}</Text>

              <Image source={{uri: item.Image}} style={styles.image} />
              <Text style={styles.price}> ${item.price}</Text>

              <View style={styles.iconContainer}>
                {!item.isFavourite ? (
                  <Icon
                    name="favorite"
                    color="white"
                    size={30}
                    onPress={() => handleChange(item)}
                  />
                ) : (
                  <Icon
                    name="favorite"
                    color="red"
                    size={30}
                    onPress={() => handleChange(item)}
                  />
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Heart;
