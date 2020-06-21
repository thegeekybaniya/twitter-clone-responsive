import React, { createContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header, Icon, Text, Button } from "react-native-elements";
const { width, height } = Dimensions.get("window");
const AppContext = createContext({ isWide: false });

export default class App extends React.Component {
  state = {
    isWide: false,
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <View style={styles.container} onLayout={this._handleLayout}>
          <View style={{ flex: 2, flexGrow: 2.5, height: "100%" }}>
            <LeftComponent />
          </View>
          <View style={{ flex: 5.5, height: "100%" }}>
            <CenterComponent />
          </View>
          <View style={{ flex: 2.5, height: "100%" }}>
            <RightComponent />
          </View>
        </View>
      </AppContext.Provider>
    );
  }

  _handleLayout = ({ nativeEvent }) => {
    const { width } = nativeEvent.layout;
    console.log("Hila", this.state.isWide, width);
    this.setState({ isWide: width > 600 });
  };
}

const menu = [
  { name: "Home", iconName: "home", iconFamily: "home" },
  { name: "Explore", iconName: "hash", iconFamily: "feather" },
  { name: "Notifications", iconName: "bell", iconFamily: "entypo" },
  { name: "Messages", iconName: "message-square", iconFamily: "feather" },
  { name: "Bookmark", iconName: "bookmark", iconFamily: "feather" },
  { name: "Lists", iconName: "list", iconFamily: "feather" },
  { name: "Profile", iconName: "user", iconFamily: "feather" },
  {
    name: "More",
    iconName: "dots-horizontal-circle-outline",
    iconFamily: "material-community",
  },
];

function Tweet() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1.5, alignContent: "center" }}>
        <Image
          source={require("./assets/profile.png")}
          style={{ height: "60%", aspectRatio: 1 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 8 }}>
        <View
          style={{
            width: "100%",
            alignContent: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Lorem Ipsum. <Text style={{ color: "grey" }}> @loremipsum</Text>
          </Text>
          <Text style={{ fontSize: 18, color: "white", padding: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
    </View>
  );
}

function TweetButton() {
  return (
    <Button
      title="Tweet"
      buttonStyle={{ borderRadius: 50 }}
      containerStyle={{ width: "100%" }}
    />
  );
}

function Home() {
  return (
    <ScrollView style={styles.screen}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          borderBottomColor: "grey",
          borderBottomWidth: 8,
        }}
      >
        <View style={{ flex: 1.5, alignContent: "center" }}>
          <Image
            source={require("./assets/profile.png")}
            style={{ height: 80, width: 80 }}
          />
        </View>
        <View style={{ flex: 8 }}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 25, color: "grey", paddingVertical: 20 }}>
              What's happening?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                margin: 10,
              }}
            >
              <Icon
                style={styles.icon}
                name="image"
                type="feather"
                color="#1b81c0"
              />
              <Icon
                style={styles.icon}
                name="gift"
                type="feather"
                color="#1b81c0"
              />
              <Icon
                style={styles.icon}
                name="bar-chart"
                type="feather"
                color="#1b81c0"
              />
              <Icon
                style={styles.icon}
                name="smile"
                type="feather"
                color="#1b81c0"
              />
              <Icon
                style={styles.icon}
                name="calendar"
                type="feather"
                color="#1b81c0"
              />
            </View>
            <View style={{ width: "30%", margin: 10 }}>
              <TweetButton />
            </View>
          </View>
        </View>
      </View>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </ScrollView>
  );
}

function CenterComponent() {
  return (
    <>
      <View style={[styles.header]}>
        <Text style={styles.headerText}>Home</Text>
        <View style={styles.iconHolder}>
          <Icon
            style={styles.icon}
            name="star-four-points-outline"
            type="material-community"
          />
        </View>
      </View>

      <View style={{ flex: 1, borderWidth: 1, borderColor: "#38444d" }}>
        <Home />
      </View>
    </>
  );
}

function LeftComponent() {
  return (
    <View style={{ marginHorizontal: 25, marginVertical: 10 }}>
      <Image
        source={require("./assets/logo.png")}
        style={{ height: 50, width: 50 }}
      />
      {menu.map((item) => {
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 5,
            }}
          >
            <View style={styles.iconHolder}>
              <Icon
                color={"white"}
                size={30}
                style={styles.icon}
                name={item.iconName}
                type={item.iconFamily}
              />
            </View>
            <Text style={styles.headerText}>{item.name}</Text>
          </View>
        );
      })}
      <TweetButton />
    </View>
  );
}

function RightComponent() {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: "#38444d",
        borderWidth: 3,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 25,
          padding: 20,
          borderBottomWidth: 2,
          borderColor: "grey",
        }}
      >
        What's Happening
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 25,
          padding: 20,
          borderBottomWidth: 2,
          borderColor: "grey",
        }}
      >
        #Covid
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 25,
          padding: 20,
          borderBottomWidth: 2,
          borderColor: "grey",
        }}
      >
        #Covid
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 25,
          padding: 20,
          borderBottomWidth: 2,
          borderColor: "grey",
        }}
      >
        #Covid
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202b",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  header: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#38444d",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontFamily: "OdibeeSans",
    fontSize: 25,
    margin: 10,
    textAlign: "center",
  },
  icon: {
    margin: 10,
    alignSelf: "flex-end",
  },
  iconHolder: { height: 50, width: 50 },
  screen: { backgroundColor: "#15202b", height: height },
});
