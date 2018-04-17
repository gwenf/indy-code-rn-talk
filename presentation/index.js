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
  Link,
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
  expo_qr: require('../assets/expo_qr.png'),
  styling: require('../assets/styling.png'),
  flexbox_layout: require('../assets/flexbox_layout.png'),
  rnFileTree: require('../assets/rnFileTree.png'),
  ui_kitten: require('../assets/ui_kitten.png'),
  rn_elements: require('../assets/rn_elements.png'),
  native_base: require('../assets/native_base.png'),
  devtools: require('../assets/rn-devtools.gif'),
  devmenu: require('../assets/devmenu.png'),
  inspector: require('../assets/inspector.png'),
  chrome_debug: require('../assets/chrome_debug.png'),
  decoide: require('../assets/decoide.png')
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
            <ListItem textColor="secondary">Re-use skills from Web</ListItem>
            <ListItem textColor="secondary">Poor Performance</ListItem>
            <ListItem textColor="secondary">Non-native UI</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="This 3rd category has existed since Facebook open sourced RN in 2015. The idea of RN is to have an app look and feel native, while being able to get the benefits from traditional cross-platform systems."
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
          notes="I'm going to talk about about the features of RN one by one starting with this... Basically this is time and cost savings."
        >
          <Heading size={2} textColor="secondary" caps>Code Sharing &</Heading>
          <Heading size={2} textColor="tertiary" caps>Skillset Reuse</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes=""
        >
          <Heading size={4} textColor="tertiary" caps>React Native Project</Heading>
          <Image width="300px" src={images.rnFileTree} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="How does this work? A React app is made up of composable components that are separated by feature, putting like with like, which also helps with maintainability of code."
        >
          <Heading size={4} textColor="secondary" caps>React Paradigm</Heading>
          <Image width="900px" src={images.reactTree} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="there is not longer separation of concerns but separation of features. The view and the logic that deal with that view are grouped together. Since I've been working with it for a while, I find it to be a logical way to group things."
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
          notes="React Native follows the same paradigm. In fact it was the intention to be able to learn it once and build it on any platform of your choosing. Logic can be reused exactly as it from the web and so can everything else except the view."
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
          notes=""
        >
          <Heading size={4} textColor="tertiary" caps>Styling</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/styling.txt')}
            margin="20px auto"
            style={{fontSize: "18px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="RN uses flexbox as an intuitive simple API for creating layouts. It also has an option for absolute positioning. If you remember anything of the old tables or floats on the web, this is 10K times better. You can also use standard web styles."
        >
          <Heading size={4} textColor="tertiary" caps>Styling</Heading>
          <Layout>
            <Fill>
              <Image width="270px" src={images.flexbox_layout} />
            </Fill>
            <Fill>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require('raw-loader!../assets/styling2.txt')}
                  margin="20px 20px"
                  style={{fontSize: "22px"}}
                  overflow="overflow"
                />
              </Appear>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require('raw-loader!../assets/styling3.txt')}
                  margin="20px 20px"
                  style={{fontSize: "22px"}}
                  overflow="overflow"
                />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="styling is a bit different because you don't have separate css or sass files. Instead you put styles in with your JavaScript code... before you start thinking how messy that would be, generally, you will have various wrapper components that handle styling and can be imported."
        >
          <Heading size={5} textColor="tertiary" caps>Styling-specific Components</Heading>
          <Image width="400px" src={images.styling} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="another nice thing to note is that, just like with the web, there are several good, well-maintained design framework solutions in RN."
        >
          <Heading size={4} textColor="tertiary" caps>Design Frameworks</Heading>
          <Layout>
            <Fill>
              <Link href="https://github.com/react-native-training/react-native-elements">
                <Text>RN Elements</Text>
              </Link>
              <Image width="200px" src={images.rn_elements} />
            </Fill>
            <Fill>
              <Link href="https://nativebase.io/">
                <Text>NativeBase</Text>
              </Link>
              <Image width="200px" src={images.native_base} />
            </Fill>
            <Fill>
              <Link href="https://akveo.github.io/react-native-ui-kitten/#/home">
                <Text>UI Kitten</Text>
              </Link>
              <Image width="200px" src={images.ui_kitten} />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="One Codebase for both platforms, but different looking UIs? How does that work?"
        >
          <Heading size={4} textColor="tertiary" caps>Cross Platform UI</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="Users for each platform have different expectations and components will be displayed differently on each platform."
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
          <Heading size={1} textColor="tertiary" caps>Performance</Heading>
          <Text size={4} textColor="secondary" caps>Navigation, Animations, and User Interactions</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="The ideal situation is to eliminate all the passes over the bridge after initialization. So the JS code you write will be compiled into an asset and shipped with the native binary as well as the JavaScript core engine which it runs on. Libraries and API will be mixed JavaScript and Native."
        >
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
          <Heading size={2} textColor="tertiary" caps>Coding & Developer Experience</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes=""
        >
          <Heading size={4} textColor="tertiary" caps>How to Get Started</Heading>
          <List ordered>
            <Appear><ListItem textColor="secondary">Install Xcode, Android Studio, <Code>react-native init</Code></ListItem></Appear>
            <Appear><ListItem textColor="secondary">snack.expo.io</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="Snack.expo.io makes it so easy to prototype or get started. It also gives you a qr code to scan on your devices and it live updates. I use this to be able to prototype easily on multiple devices at the same time."
        >
          <Heading size={4} textColor="secondary" caps>snack.expo.io</Heading>
          <Image width="740px" src={images.expo} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="Snack.expo.io makes it so easy to prototype or get started. It also gives you a qr code to scan on your devices and it live updates. I use this to be able to prototype easily on multiple devices at the same time."
        >
          <Heading size={4} textColor="secondary" caps>snack.expo.io</Heading>
          <Image width="740px" src={images.expo_qr} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="If you are running locally, there are also a lot of sweet features for building your apps. Chrome dev tools, hot/live reloading, inspect element features, performance monitoring for JS and Native."
        >
          <Heading size={4} textColor="tertiary" caps>Built in Devtooling</Heading>
          <Layout>
            <Fill>
              <Image width="300px" src={images.devmenu} />
            </Fill>
            <Fill>
              <Image width="300px" src={images.inspector} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="secondary" caps>React Developer Tools</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/devtools.txt')}
            margin="20px 20px"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" caps>React Developer Tools</Heading>
          <Image width="740px" src={images.devtools} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="set breakpoints, step through debugging..."
        >
          <Heading size={4} textColor="secondary" caps>Debugging</Heading>
          <Image width="740px" src={images.chrome_debug} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="primary"
          notes=""
        >
          <Heading size={1} textColor="tertiary" caps>Flexibility</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={4} textColor="primary" caps>Platform Customization</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/platformCustom.txt')}
            margin="20px 20px"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/platformCustom2.txt')}
            margin="20px 20px"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="tertiary" caps>Embed Native Code</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/nativeCode.txt')}
            margin="20px 20px"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="it makes it easy to embed other peoples native code. And you end up doing this a lot with lots of libraries being open sourced by large companies."
        >
          <Heading size={6} textColor="primary" caps>React Native Link</Heading>
          <Text textColor="tertiary">Native Modules</Text>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/rnLink.txt')}
            margin="20px 20px"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="it makes it easy to embed other peoples native code. And you end up doing this a lot with lots of libraries being open sourced by large companies."
        >
          <Heading size={6} textColor="primary" caps>React Native Link</Heading>
          <Text textColor="tertiary">Fonts</Text>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/rnLink2.txt')}
            margin="20px 20px"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary"
          notes="you can also use it to wrap a webview."
        >
          <Heading size={6} textColor="secondary" caps>Transitioning from a mobile friendly web app?</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/webview.txt')}
            margin="20px 20px"
            style={{fontSize: "22px"}}
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Over the Air Updates</Heading>
          <Text>Microsoft Code Push</Text>
          <Image width="740px" src={images.bridge} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="primary"
          notes="Great community, lots of companies developing this."
        >
          <Heading size={4} textColor="tertiary" caps>Tools</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>Deco</Heading>
          <Image width="740px" src={images.decoide} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Plugins</Heading>
          <Text>VSCode, Sublime, Atom</Text>
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
            <ListItem style={{fontSize: '32px'}} textColor="secondary"><Link href="https://react-native-training.github.io/react-native-elements/">React Native Elements</Link></ListItem>
            <ListItem style={{fontSize: '32px'}} textColor="secondary"><Link href="https://nativebase.io/">Native Base</Link></ListItem>
            <ListItem style={{fontSize: '32px'}} textColor="secondary"><Link href="https://akveo.github.io/react-native-ui-kitten/#/home">UI Kitten</Link></ListItem>
            <ListItem style={{fontSize: '32px'}} textColor="secondary"><Link href="https://snack.expo.io/">Browser-based development - Expo Sketch</Link></ListItem>
            <ListItem style={{fontSize: '32px'}} textColor="secondary">Flexbox Games - <Link href="https://flexboxfroggy.com/">Froggies</Link> and <Link href="http://www.flexboxdefense.com/">Tower Defense</Link></ListItem>
            <ListItem style={{fontSize: '32px'}} textColor="secondary"><Link href="https://github.com/jondot/ReactNativeKatas">Learn React Native with Katas!</Link></ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Up-to-date Information</Heading>
          <List>
            <ListItem textColor="secondary"><Link href="https://www.youtube.com/user/FacebookDevelopers/videos">Facebook Developers Channel</Link></ListItem>
            <ListItem textColor="secondary"><Link href="https://twitter.com/koltal">Tal Kol - Engineer at Wix</Link></ListItem>
            <ListItem textColor="secondary"><Link href="http://reactnative.cc/">React Native Newsletter</Link></ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Thanks!</Heading>
          <List>
            <ListItem textColor="secondary">Fusion Alliance</ListItem>
            <ListItem textColor="secondary"><Link href="https://www.meetup.com/Free-Code-Camp-Indy">freeCodeCampIndy</Link></ListItem>
            <ListItem textColor="secondary"><Link href="https://www.meetup.com/Indianapolis-Blockchain-Developers">Indianapolis Blockchain Developers</Link></ListItem>
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
