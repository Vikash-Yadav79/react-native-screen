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
    // flexDirection: 'row',
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

function MoreItem() {
  const [items, setItems] = useState([...constant]);

  const handleChange = item => {
    let foundItem = items.find(itm => itm.id === item.id);
    foundItem.isFavourite = !foundItem.isFavourite;
    const newItems = items.filter(itm => itm.id !== item.id);
    setItems([...newItems, foundItem]);
  };
  return (
    <View>
      <ScrollView>
        {/* <Text style={{fontSize: 20, textAlign: 'center', color: 'black'}}>
          Products
        </Text> */}
        {(constant || []).map(item => {
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

export default MoreItem;
