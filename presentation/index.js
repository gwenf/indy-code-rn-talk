// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane
} from "spectacle";

const preloader = (imageCollection) => {
  for (var src in imageCollection) {
    const image = new Image();
    image.src = src;
  }
};

const images = {
  logo: require('../assets/ios-logo-android.jpg'),
  reactTree: require('../assets/react-tree.png'),
  iOSvAndroidTabs: require('../assets/ios-v-android-tabs.png'),
  iOSvAndroid: require('../assets/ios-v-android.png'),
  datetime: require('../assets/datetime-picker.png'),
  bridge: require('../assets/bridge.png')
};

preloader(images);

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#ff4081",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why you should try React Native
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={2} fit bold>
            for your next mobile project.
          </Text>
        </Slide>
        {/* <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide> */}
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Gwen Faraday</Heading>
          <List>
            <ListItem textColor="secondary">Fusion Alliance</ListItem>
            <ListItem textColor="secondary">freeCodeCampIndy</ListItem>
            <ListItem textColor="secondary">Indianapolis Blockchain Developers</ListItem>
            <ListItem>@gwen_faraday</ListItem>
            <ListItem>gwenfaraday@gmail.com</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary"
          notes=""
        >
          <Heading size={4} textColor="secondary" caps>What is React Native?</Heading>
          <Text margin="10px 0 0" textColor="primary">
            Cross-platform mobile apps in JavaScript
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>iOS & Android</Heading>
          <Text textColor="tertiary">Code Sharing</Text>
          <Image width="500px" src={images.logo} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          {/* the app is made up of composable components that are separated by feature, putting like with like */}
          <Heading size={4} textColor="secondary" caps>React Paradigm</Heading>
          <Image width="900px" src={images.reactTree} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary" caps>React</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/jsx-example.txt')}
            margin="20px auto"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary" caps>React Native</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/jsx-example2.txt')}
            margin="20px auto"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary" caps>JSX</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/jsx-example3.txt')}
            margin="20px auto"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes=""
        >
          <Heading size={4} textColor="tertiary" caps>Android and iOS</Heading>
          <Image width="900px" src={images.iOSvAndroid} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="Users have different expectations for navigation between OS's."
        >
          <Heading size={4} textColor="tertiary" caps>Menus</Heading>
          <Image width="700px" src={images.iOSvAndroidTabs} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>Datetime Pickers</Heading>
          <Image width="550px" src={images.datetime} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>React Native Bridge</Heading>
          <Image width="740px" src={images.bridge} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>React Developer Tools</Heading>
          <Image width="740px" src={images.bridge} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>React Developer Tools</Heading>
          <Image width="740px" src={images.bridge} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>Debugging</Heading>
          <Image width="740px" src={images.bridge} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>Embedding Native Code</Heading>
          <Image width="740px" src={images.bridge} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Embed other people's native code - React Native Link</Heading>
          <Image width="740px" src={images.bridge} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Transitioning from a mobile friendly web app?</Heading>
          <Image width="740px" src={images.bridge} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Over the Air Updates</Heading>
          <Text>Microsoft Code Push</Text>
          <Image width="740px" src={images.bridge} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Who is using React Native?</Heading>
          <List>
            <ListItem textColor="secondary">Facebook</ListItem>
            <ListItem textColor="secondary">Airbnb</ListItem>
            <ListItem textColor="secondary">Wix</ListItem>
            <ListItem textColor="secondary">Walmart</ListItem>
            <ListItem textColor="secondary">Bloomberg</ListItem>
            <ListItem textColor="secondary">Skype</ListItem>
            <ListItem textColor="secondary">Tesla</ListItem>
            <ListItem textColor="secondary">Discord</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Resource Links</Heading>
          <List>
            <ListItem style={{fontSize: '32px'}} textColor="secondary">React Native Elements</ListItem>
            <ListItem style={{fontSize: '32px'}} textColor="secondary">Styled Components</ListItem>
            <ListItem style={{fontSize: '32px'}} textColor="secondary">Browser-based development - Expo Sketch</ListItem>
            <ListItem style={{fontSize: '32px'}} textColor="secondary">Flexbox Games - Froggies and Tower Defense</ListItem>
            <ListItem style={{fontSize: '32px'}} textColor="secondary">React Native styling practice with Katas!</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Up-to-date Information</Heading>
          <List>
            <ListItem textColor="secondary">Facebook Developers Channel</ListItem>
            <ListItem textColor="secondary">Tal Kol - Engineer at Wix</ListItem>
            <ListItem textColor="secondary">React Native Newsletter</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Gwen Faraday</Heading>
          <List>
            <ListItem textColor="secondary">Fusion Alliance</ListItem>
            <ListItem textColor="secondary">freeCodeCampIndy</ListItem>
            <ListItem textColor="secondary">Indianapolis Blockchain Developers</ListItem>
            <ListItem>@gwen_faraday</ListItem>
            <ListItem>gwenfaraday@gmail.com</ListItem>
          </List>
        </Slide>
        {/* <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        // I should put quotes from companies in here... I also need stats on how people use this framework and how successful they are...
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide> */}
      </Deck>
    );
  }
}
