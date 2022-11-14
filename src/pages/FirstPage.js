import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const FirstPage = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://t3.ftcdn.net/jpg/05/39/65/66/360_F_539656666_QB1oP8xAU2WDON2YjfNAaZPmKHbh7lf5.jpg',
        }}
        resizeMode="stretch"
        style={styles.header}>
        <Text style={styles.word}> Where do you want to travel?</Text>
        <View style={styles.Button}></View>
        <View style={styles.qr}>
          <Image style={styles.Image} source={require('../Image/qricon.png')} />
        </View>

        <Text style={styles.select}>Select Destinations</Text>
        <View style={styles.search}>
          <Image
            style={styles.searchIcon}
            source={require('../Image/search.png')}
          />
        </View>
      </ImageBackground>
      <View style={styles.body}>
        <Text style={styles.body}>Best Deals</Text>
        <Text style={styles.subtext}>Sorted by Lower price</Text>
      </View>
      <TouchableOpacity style={[styles.item, styles.small]}>
        <Text style={styles.claire}>El Claire</Text>
        <Text style={styles.egypt}>Egypt</Text>
        <Image
          style={styles.Image4}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png',
          }}
        />
        <Text style={styles.down}>4.3</Text>
        <Image style={styles.Image5} source={require('../Image/icon.png')} />
        <TouchableOpacity>
          <Text style={styles.btn2}>More</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn3}>$233</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item, styles.hi]}>
        <Text style={styles.claire}>El Claire</Text>
        <Text style={styles.egypt}>Egypt</Text>

        <Image
          style={styles.Image4}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png',
          }}
        />
        <Text style={styles.down}>4.3</Text>
        <Image style={styles.Image5} source={require('../Image/icon.png')} />
        <TouchableOpacity>
          <Text style={styles.btn2}>More</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn3}>$336</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.body2}>Popular Destinations</Text>
      <Text style={styles.subtext3}>Sorted by higher rating</Text>
      <TouchableOpacity style={[styles.item, styles.small]}>
        <Image style={styles.text} source={require('../Image/icon.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item, styles.hi]}>
        <Image style={styles.text} source={require('../Image/icon.png')} />
      </TouchableOpacity>
      <View style={styles.city}>
        <Text style={styles.city2}>Cancun</Text>
        <Image
          style={styles.Image3}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png',
          }}
        />
        <Text style={styles.star}>4.8</Text>
        <Text style={styles.city2}>Santorni</Text>
        <Image
          style={styles.Image3}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069__340.png',
          }}
        />
        <Text style={styles.star2}>4.7</Text>
      </View>
      <View style={styles.city}>
        <Text>Mexico</Text>
        <Text>848 review</Text>
        <Text>Greece</Text>
        <Text>863 Review</Text>
      </View>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 20,
    Color: 'white',
  },

  word: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 40,
    marginTop: 25,
  },
  Button: {
    marginLeft: -200,
    marginTop: 130,
    marginHorizontal: 40,
  },
  Image: {
    width: 15,
    height: 15,
  },
  Image2: {
    width: 50,
    height: 50,
    marginLeft: 180,
    marginTop: -55,
    marginEnd: 10,
  },
  body: {
    fontSize: 25,
    color: 'black',
    padding: 10,
    fontWeight: 'bold',
    marginTop: -5,
  },
  subtext: {
    marginLeft: 13,
    marginTop: -15,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 80,
  },

  row: {
    flexDirection: 'row',
  },
  secondrow: {
    justifyContent: 'flex-end',
  },
  Image3: {
    width: 10,
    height: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  star: {
    marginLeft: -45,

    color: '#dbd825',
  },
  star2: {
    marginLeft: -45,
    color: '#dbd825',
  },
  claire: {
    marginLeft: -16,
    color: 'black',
    marginTop: -16,
    fontWeight: 'bold',
  },
  egypt: {
    marginLeft: -16,
    color: 'black',
  },
  item: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#dde3ed',

    padding: 20,
    height: 170,
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',
    padding: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  subtext2: {
    color: '#000000',
    fontSize: 14,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'left',
    width: 100,
    height: 15,
  },
  hi: {
    width: 150,
    height: 150,
    marginTop: -160,
    marginHorizontal: 200,
    padding: 30,
  },
  small: {
    backgroundColor: '#dde3ed',
    width: 150,
    padding: 30,
    height: 150,
    marginHorizontal: 25,
  },
  body2: {
    fontSize: 25,
    color: 'black',
    padding: 20,
    fontWeight: 'bold',
    marginTop: -20,
  },
  subtext3: {
    marginTop: -20,
    marginLeft: 20,
  },
  city: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  city2: {
    color: 'black',
    fontWeight: 'bold',
  },
  insideBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Image4: {
    width: 10,
    height: 10,
    marginLeft: 75,
    marginTop: -33,
  },
  Image5: {
    width: 30,
    height: 30,
    marginTop: 45,
    marginLeft: 30,
  },
  down: {
    width: 20,
    height: 15,
    marginLeft: 89,
    margin: -14,
    color: '#dbd825',
  },
  btn2: {
    position: 'absolute',
    marginTop: 16,
    left: '-15%',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'blue',
    fontSize: 10,
    fontWeight: 'bold',
  },
  btn3: {
    position: 'absolute',
    marginTop: 16,
    left: '55%',
    color: '#fff',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'blue',
    fontSize: 10,
    fontWeight: 'bold',
  },

  select: {
    position: 'absolute',
    marginTop: 105,
    left: '35%',
    backgroundColor: '#2580db',
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  search: {
    borderRadius: 30,

    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 100,
    right: '5%',
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  qr: {
    borderRadius: 30,

    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 100,
    left: '10%',
  },
});
