import { Parser } from "xml2js";
import { IBSplashScreenDocument } from "./InterfaceBuilder";

/** Get a template splash screen storyboard file. */
export function getIBTemplate(): IBSplashScreenDocument {
  //   const contents = `<?xml version="1.0" encoding="UTF-8"?>
  //       <document
  //         type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB"
  //         version="3.0"
  //         toolsVersion="16096"
  //         targetRuntime="iOS.CocoaTouch"
  //         propertyAccessControl="none"
  //         useAutolayout="YES"
  //         launchScreen="YES"
  //         useTraitCollections="YES"
  //         useSafeAreas="YES"
  //         colorMatched="YES"
  //         initialViewController="EXPO-VIEWCONTROLLER-1"
  //       >
  //       </document>`;
  return {
    document: {
      $: {
        type: "com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB",
        version: "3.0",
        toolsVersion: 16096,
        targetRuntime: "iOS.CocoaTouch",
        propertyAccessControl: "none",
        useAutolayout: "YES",
        launchScreen: "YES",
        useTraitCollections: "YES",
        useSafeAreas: "YES",
        colorMatched: "YES",
        initialViewController: "EXPO-VIEWCONTROLLER-1",
      },
    },
  };
}
export async function getTemplateAsync(): Promise<IBSplashScreenDocument> {
  const contents = `<?xml version="1.0" encoding="UTF-8"?>
      <document
        type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB"
        version="3.0"
        toolsVersion="16096"
        targetRuntime="iOS.CocoaTouch"
        propertyAccessControl="none"
        useAutolayout="YES"
        launchScreen="YES"
        useTraitCollections="YES"
        useSafeAreas="YES"
        colorMatched="YES"
        initialViewController="EXPO-VIEWCONTROLLER-1"
      >
        <dependencies>
          <deployment identifier="iOS"/>
          <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="16087"/>
          <capability name="Safe area layout guides" minToolsVersion="9.0"/>
          <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>
        </dependencies>
        <scenes>
          <scene sceneID="EXPO-SCENE-1">
            <objects>
              <viewController
                storyboardIdentifier="SplashScreenViewController"
                id="EXPO-VIEWCONTROLLER-1"
                sceneMemberID="viewController"
              >
                <view
                  key="view"
                  userInteractionEnabled="NO"
                  contentMode="scaleToFill"
                  insetsLayoutMarginsFromSafeArea="NO"
                  id="EXPO-ContainerView"
                  userLabel="ContainerView"
                >
                  <rect key="frame" x="0.0" y="0.0" width="414" height="736"/>
                  <autoresizingMask key="autoresizingMask" flexibleMaxX="YES" flexibleMaxY="YES"/>
                  <subviews>
                    <imageView
                      userInteractionEnabled="NO"
                      contentMode="scaleAspectFill"
                      horizontalHuggingPriority="251"
                      verticalHuggingPriority="251"
                      insetsLayoutMarginsFromSafeArea="NO"
                      image="SplashScreenBackground"
                      translatesAutoresizingMaskIntoConstraints="NO"
                      id="EXPO-SplashScreenBackground"
                      userLabel="SplashScreenBackground"
                    >
                      <rect key="frame" x="0.0" y="0.0" width="414" height="736"/>
                    </imageView>
                  </subviews>
                  <color key="backgroundColor" systemColor="systemBackgroundColor"/>
                  <constraints>
                    <constraint firstItem="EXPO-SplashScreenBackground" firstAttribute="top" secondItem="EXPO-ContainerView" secondAttribute="top" id="1gX-mQ-vu6"/>
                    <constraint firstItem="EXPO-SplashScreenBackground" firstAttribute="leading" secondItem="EXPO-ContainerView" secondAttribute="leading" id="6tX-OG-Sck"/>
                    <constraint firstItem="EXPO-SplashScreenBackground" firstAttribute="trailing" secondItem="EXPO-ContainerView" secondAttribute="trailing" id="ABX-8g-7v4"/>
                    <constraint firstItem="EXPO-SplashScreenBackground" firstAttribute="bottom" secondItem="EXPO-ContainerView" secondAttribute="bottom" id="jkI-2V-eW5"/>
                  </constraints>
                  <viewLayoutGuide key="safeArea" id="EXPO-SafeArea"/>
                </view>
              </viewController>
              <placeholder placeholderIdentifier="IBFirstResponder" id="EXPO-PLACEHOLDER-1" userLabel="First Responder" sceneMemberID="firstResponder"/>
            </objects>
          </scene>
        </scenes>
        <resources>
          <image name="SplashScreenBackground" width="1" height="1"/>
        </resources>
      </document>`;
  return await new Parser().parseStringPromise(contents);
}

(async () => {
  console.log(JSON.stringify(await getIBTemplate()));
})();
