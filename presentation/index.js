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
  Code,
  CodePane,
  Layout,
  Fill,
  Appear
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
  bridge: require('../assets/bridge.png'),
  mobiledev: require('../assets/mobiledev.png'),
  expo: require('../assets/expo.png'),
  styling: require('../assets/styling.png')
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
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary"
          notes="talk about itinerary here, as well as my background in mobile development."
        >
          <Heading size={3} textColor="secondary" caps>Gwen Faraday</Heading>
          <List>
            <ListItem textColor="secondary">Fusion Alliance</ListItem>
            <ListItem textColor="secondary">freeCodeCampIndy</ListItem>
            <ListItem textColor="secondary">Indianapolis Blockchain Developers</ListItem>
            <ListItem>@gwen_faraday</ListItem>
            <ListItem>gwenfaraday@gmail.com</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary"
          notes="talk about itinerary here, as well as my background in mobile development."
        >
          <Heading size={3} textColor="tertiary" caps>Itinerary</Heading>
          <List>
            <ListItem textColor="secondary">Introduce React Native</ListItem>
            <ListItem textColor="secondary">Benefits and Use Cases</ListItem>
            <ListItem textColor="secondary">Questions</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary"
          notes="On the most basic level... so why would you chose React Native..."
        >
          <Heading size={4} textColor="secondary" caps>What is React Native?</Heading>
          <Text margin="10px 0 0" textColor="primary">
            Cross-platform mobile apps in JavaScript
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="well, why would you choose any mobile framework? You would probably come up with some of the things on this list."
        >
          <Heading size={4} textColor="tertiary" caps>Mobile Considerations</Heading>
          <Layout>
            <Fill>
              <List>
                <ListItem textColor="secondary">Time</ListItem>
                <ListItem textColor="secondary">Cost</ListItem>
                <ListItem textColor="secondary">Maintainability</ListItem>
                <ListItem textColor="secondary">Scalability</ListItem>
                <ListItem textColor="secondary">Performance</ListItem>
                <ListItem textColor="secondary">Ecosystem</ListItem>
              </List>
            </Fill>
            <Fill>
              <List>
                <ListItem textColor="secondary">Developer Experience</ListItem>
                <ListItem textColor="secondary">Community</ListItem>
                <ListItem textColor="secondary">Other Applications</ListItem>
                <ListItem textColor="secondary">Developer Skillsets</ListItem>
                <ListItem textColor="secondary">Deploying</ListItem>
                <ListItem textColor="secondary">Testing</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes=""
        >
          <Heading size={4} textColor="tertiary" caps>Solutions</Heading>
          <Image width="700px" src={images.mobiledev} />
          {/* <List>
            <ListItem textColor="secondary">Native Mobile</ListItem>
            <ListItem textColor="secondary">Hybrid Webview</ListItem>
            <ListItem textColor="secondary">Hybrid Native</ListItem>
          </List> */}
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes=""
        >
          <Heading size={4} textColor="tertiary" caps>Native</Heading>
          <List>
            <ListItem textColor="secondary">Great UX</ListItem>
            <ListItem textColor="secondary">Native Feel</ListItem>
            <ListItem textColor="secondary">Costly</ListItem>
            <ListItem textColor="secondary">Longer Dev Cycle</ListItem>
            <ListItem textColor="secondary">Separate Codebases</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="Hybrid came about as an easier, quicker way to develop mobile apps. This includes Cordova, jQuery Mobile, Ionic... Large companies like Facebook actually came on board to try this out and failed..."
        >
          <Heading size={4} textColor="tertiary" caps>Hybrid Webview</Heading>
          <List>
            <ListItem textColor="secondary">Cheaper</ListItem>
            <ListItem textColor="secondary">Quicker</ListItem>
            <ListItem textColor="secondary">Code Sharing</ListItem>
            <ListItem textColor="secondary">Poor Performance</ListItem>
            <ListItem textColor="secondary">Non-native UI</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="The idea of RN is to have an app look and feel native, while being able to get the benefits from traditional cross-platform systems."
        >
          <Heading size={4} textColor="tertiary" caps>React Native</Heading>
          <List>
            <ListItem textColor="secondary">Fast Developer Iteration</ListItem>
            <ListItem textColor="secondary">Cross-platform code sharing</ListItem>
            <ListItem textColor="secondary">Native Views</ListItem>
            <ListItem textColor="secondary">Performance</ListItem>
            <ListItem textColor="secondary">Built in developers tools</ListItem>
            <ListItem textColor="secondary">Re-use web skills</ListItem>
          </List>
          {/* <Text textColor="tertiary">Code Sharing</Text>
          <Image width="500px" src={images.logo} /> */}
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="primary"
          notes="Let's talk about... basically this is time and cost savings."
        >
          <Heading size={4} textColor="secondary" caps>Code Sharing &</Heading>
          <Heading size={4} textColor="tertiary" caps>Skillset Reuse</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="How does this work? Broken down by feature. Helps with maintainability of code."
        >
          {/* the app is made up of composable components that are separated by feature, putting like with like */}
          <Heading size={4} textColor="secondary" caps>React Paradigm</Heading>
          <Image width="900px" src={images.reactTree} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="there is not longer separation of concerns but separation of features. The view and the logic that deal with that view are grouped together."
        >
          <Heading size={4} textColor="tertiary" caps>React</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/jsx-example.txt')}
            margin="20px auto"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="React Native follows the same paradigm. In fact it was the intention to be able to learn once and build everywhere. Logic can be reused exactly as it from the web and so can everything else except the view."
        >
          <Heading size={4} textColor="tertiary" caps>React Native</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/jsx-example2.txt')}
            margin="20px auto"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="just as you have on the web, React Native uses tags corrosponding to containers, text wrappers, buttons, etc. These from the RN api actually map to native UI components in Android and iOS. It's not JS and CSS just made to look like a mobile app. It's just declaritive."
         >
          <Heading size={4} textColor="tertiary" caps>JSX</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/jsx-example3.txt')}
            margin="20px auto"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="many things are familiar from the web"
        >
          <Heading size={4} textColor="secondary" caps>Styling</Heading>
          <Image width="450px" src={images.styling} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="One Codebase for both platforms, but different looking UIs? How does that work?"
        >
          <Heading size={4} textColor="tertiary" caps>Cross Platform UI</Heading>
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

        <Slide transition={["slide"]} bgColor="primary" textColor="primary"
          notes="Often overlooked. React Native has brought some awesome features from web development to the mobile realm."
        >
          <Heading size={4} textColor="tertiary" caps>Performance</Heading>
          <Text size={4} textColor="tertiary" caps>Navigation, Animcations, and User Interactions</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>React Native Bridge</Heading>
          <Image width="740px" src={images.bridge} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>Performance</Heading>
          <Image width="740px" src={images.bridge} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="the native SDK’s for both operating systems, exist time-tested native list view implementations — UITableView for iOS and ListView for Android"
        >
          <Heading size={4} textColor="secondary" caps>List Views</Heading>
          <Image width="740px" src={images.bridge} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="primary"
          notes="Often overlooked. React Native has brought some awesome features from web development to the mobile realm."
        >
          <Heading size={4} textColor="tertiary" caps>Coding and Developer Experience</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes=""
        >
          <Heading size={4} textColor="secondary" caps>How to Get Started</Heading>
          <List ordered>
            <Appear><ListItem textColor="secondary">Install Xcode, Android Studio, <Code>react-native init</Code></ListItem></Appear>
            <Appear><ListItem textColor="secondary">snack.expo.io</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="Snack.expo.io"
        >
          <Heading size={4} textColor="secondary" caps>snack.expo.io</Heading>
          <Image width="740px" src={images.expo} />
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

        <Slide transition={["slide"]} bgColor="primary" textColor="primary"
          notes="Often overlooked. React Native has brought some awesome features from web development to the mobile realm."
        >
          <Heading size={4} textColor="tertiary" caps>Flexibility</Heading>
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

        <Slide transition={["slide"]} bgColor="primary" textColor="primary"
          notes="Great community, lots of companies developing this."
        >
          <Heading size={4} textColor="tertiary" caps>Community</Heading>
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
          <Heading size={3} textColor="secondary" caps>Thanks!</Heading>
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
