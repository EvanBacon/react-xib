# react-xib

> TLDR: This package is used for statically rendering `.storyboard` XML files.

React for Apple Interface Builder. This is useful for creating complex Apple Launch Screens (Splash Screens).

The recommended way to make a launch screen for iOS is to create a view that closely resembles the UI that will be shown after the app loads.

This can grow in complexity fast since you may need to account for multiple landscapes (2x), appearances (2x), idioms (~16x), and if you add text then possibly localizations.

If you implement different launch screens for each URI scheme then the complexity increases again.

Currently iOS Splash Screens are really annoying to make, even the most devote Apple fans dislike using Storyboards files.

## API

This is pretty close to the output JSI, but if one were to implement React context providers, they could drastically simplify the developer experience and minimize the chance of Xcode crashing.

```tsx
import { ViewController } from "react-xib";

function DefaultDeps() {
  return (
    <Dependencies>
      <Deployment identifier="iOS" />
      <PlugIn
        identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin"
        version="20020"
      />
      <Capability name="Named colors" minToolsVersion="9.0" />
      <Capability name="Safe area layout guides" minToolsVersion="9.0" />
      <Capability name="Safe area layout guides" minToolsVersion="9.0" />
      <Capability
        name="System colors in document resources"
        minToolsVersion="11.0"
      />
      <Capability
        name="documents saved in the Xcode 8 format"
        minToolsVersion="8.0"
      />
    </Dependencies>
  );
}

function LaunchScreen() {
  return (
    <Document launchScreen>
      <DefaultDeps />
      <Scenes>
        <Scene sceneID="EXPO-SCENE-1">
          <ViewController
            interfaceStyle="light"
            storyboardIdentifier="SplashScreenViewController"
            id="EXPO-VIEWCONTROLLER-1"
            sceneMemberID="viewController"
          >
            <View
              xKey="view"
              id="EXPO-ContainerView"
              contentMode="scaleToFill"
              userLabel="ContainerView"
              userInteractionEnabled={false}
              insetsLayoutMarginsFromSafeArea={false}
              style={{
                width: 414,
                height: 736,
                backgroundColor: "firebrick",
              }}
            >
              <Subviews>
                <StackView>
                  <Label
                    horizontalHuggingPriority={251}
                    verticalHuggingPriority={251}
                    fixedFrame
                    translatesAutoresizingMaskIntoConstraints={false}
                    adjustsFontSizeToFit={false}
                    style={{
                      top: 133,
                      left: 337,
                      width: 42,
                      height: 21,
                      shadowOffset: {
                        width: 3,
                        height: 3,
                      },
                      shadowColor: "lime",
                    }}
                    text="foobar"
                  />
                  <ImageView
                    id="EXPO-SplashScreen"
                    userLabel="SplashScreen"
                    image="SplashScreen"
                    contentMode="scaleAspectFit"
                    horizontalHuggingPriority={251}
                    verticalHuggingPriority={251}
                    clipsSubviews
                    translatesAutoresizingMaskIntoConstraints={false}
                    style={{
                      width: 414,
                      height: 736,
                    }}
                  />
                </StackView>
              </Subviews>

              <Constraints>
                <Constraint
                  firstItem="EXPO-SplashScreenBackground"
                  firstAttribute="top"
                  secondItem="EXPO-ContainerView"
                  secondAttribute="top"
                />
                <Constraint
                  firstItem="EXPO-SplashScreenBackground"
                  firstAttribute="leading"
                  secondItem="EXPO-ContainerView"
                  secondAttribute="leading"
                />
                <Constraint
                  firstItem="EXPO-SplashScreenBackground"
                  firstAttribute="trailing"
                  secondItem="EXPO-ContainerView"
                  secondAttribute="trailing"
                />
                <Constraint
                  firstItem="EXPO-SplashScreenBackground"
                  firstAttribute="bottom"
                  secondItem="EXPO-ContainerView"
                  secondAttribute="bottom"
                />
              </Constraints>

              <ViewLayoutGuide xKey="safeArea" id="EXPO-SafeArea" />
            </View>
          </ViewController>

          <Placeholder
            placeholderIdentifier="IBFirstResponder"
            userLabel="First Responder"
            sceneMemberID="firstResponder"
          />
        </Scene>
      </Scenes>
      <Resources>
        <Image name="SplashScreenBackground" width="1" height="1" />
        <Image name="SplashScreen" width="414" height="736" />
      </Resources>
    </Document>
  );
}
```

## The Dream API

It would be awesome if the `Subviews` were inferred based on the type of component being added. i.e.

```diff
function App() {
    return (
        <View>
-            <Subviews>
                <Text>Hey</Text>
-            </Subviews>
        </View>
    )
}
```

- It would also be nice if this were cross platform, sharing with Android.
- I'd love to see the API be so close that we could render live previews using `react-native-web` so you don't have to open Xcode -- Xcode crashes very easily if the `.storyboard` is corrupt in any way.
- We currently implement features like 'background color' by using `style={{ backgroundColor: 'firebrick' }}`, I'd like to see this used for flexbox + autolayout.
- We need to hoist platform colors and image assets into the document, if we could use context providers to automatically inject these values based on usage then the API would be much safer.
