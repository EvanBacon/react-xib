import crypto from 'crypto';
import React from 'react';
import ReactDomServer from 'react-dom/server';

import { IBContentMode, IBLineBreakMode, IBTextAlignment, toObjectAsync, toString } from './InterfaceBuilder';
import { customColorFromCSS } from './color';

function createConstraintId(...attributes: any[]) {
    return crypto.createHash("sha1").update(attributes.join("-")).digest("hex");
}

const xmlElement = (name: string) => (props: Record<string, any>) =>
    React.createElement(name, props);

// const Rss = xmlElement('rss');
// const Channel = xmlElement('channel');
// const Title = xmlElement('title');
// const Description = xmlElement('description');
// const Link = xmlElement('link');
// const Copyright = xmlElement('copyright');
// const LastBuildDate = xmlElement('lastBuildDate');
// const PubDate = xmlElement('pubDate');
// const Ttl = xmlElement('ttl');
// const Item = xmlElement('item');
// const Guid = xmlElement('guid');

const InnerDocument = xmlElement("document");
const Document = ({
    style,
    children,
    type = "com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB",
    version = "3.0",
    toolsVersion = 16096,
    targetRuntime = "iOS.CocoaTouch",
    propertyAccessControl = "none",
    useAutolayout = true,
    launchScreen = true,
    useTraitCollections = true,
    useSafeAreas = true,
    colorMatched = true,
    initialViewController = "EXPO-VIEWCONTROLLER-1",
    ...props
}: {
    style?: { color?: string };
    children?: React.ReactNode;
    type?: string;
    version?: string;
    toolsVersion?: number;
    targetRuntime?: string;
    propertyAccessControl?: string;
    useAutolayout?: boolean;
    launchScreen?: boolean;
    useTraitCollections?: boolean;
    useSafeAreas?: boolean;
    colorMatched?: boolean;
    initialViewController?: string;
}) => (
    <InnerDocument
        {...{
            type,
            version,
            toolsVersion,
            targetRuntime,
            propertyAccessControl,
            useAutolayout: toBoolArg(useAutolayout),
            launchScreen: toBoolArg(launchScreen),
            useTraitCollections: toBoolArg(useTraitCollections),
            useSafeAreas: toBoolArg(useSafeAreas),
            colorMatched: toBoolArg(colorMatched),
            initialViewController,
        }}
        {...props}
    >
        {style?.color && <CSSColor xKey="tintColor" value={style.color} />}
        {children}
    </InnerDocument>
);

function toBoolArg(val: any): "YES" | "NO" {
    if (val == null) return val;
    if (val === true) return "YES";
    if (val === false) return "NO";
    else if (val === "YES" || val === "NO") return val;
    throw new Error("Invalid boolean argument: " + val);
}

const Dependencies = xmlElement("dependencies");
const Deployment = xmlElement("deployment");
const PlugIn = xmlElement("plugIn");
const Capability = xmlElement("capability");
const Scenes = xmlElement("scenes");
const InnerScene = xmlElement("scene");
const Placeholder = xmlElement("placeholder");
const Objects = xmlElement("objects");
const ViewController = xmlElement("viewController");
const InnerView = xmlElement("view");
const InnerRect = xmlElement("rect");
const InnerAutoresizingMask = xmlElement("autoresizingMask");
const Subviews = xmlElement("subviews");
const InnerImageView = xmlElement("imageView");
const Color = xmlElement("color");
const Constraints = xmlElement("constraints");
const InnerLabel = xmlElement("label");
const InnerConstraint = xmlElement("constraint");
const ViewLayoutGuide = xmlElement("viewLayoutGuide");
const Resources = xmlElement("resources");
const Image = xmlElement("image");
const State = xmlElement("state");
const Size = xmlElement("size");
const Device = xmlElement("device");
const ButtonConfiguration = xmlElement("buttonConfiguration");
const FontDescription = xmlElement("fontDescription");
const InnerStackView = xmlElement("stackView");
const ActivityIndicatorView = xmlElement("activityIndicatorView");
const InnerNamedColor = xmlElement("namedColor");
const InnerAccessibilityOverrides = xmlElement("accessibilityOverrides");
// <freeformSimulatedSizeMetrics key="simulatedDestinationMetrics"/>
const FreeformSimulatedSizeMetrics = xmlElement("freeformSimulatedSizeMetrics");
// <modalPageSheetSimulatedSizeMetrics key="simulatedDestinationMetrics"/>
const ModalPageSheetSimulatedSizeMetrics = xmlElement("modalPageSheetSimulatedSizeMetrics");
// <modalFormSheetSimulatedSizeMetrics key="simulatedDestinationMetrics"/>
const ModalFormSheetSimulatedSizeMetrics = xmlElement("modalFormSheetSimulatedSizeMetrics");
// <splitViewDetailSimulatedSizeMetrics key="simulatedDestinationMetrics"/>
const SplitViewDetailSimulatedSizeMetrics = xmlElement("splitViewDetailSimulatedSizeMetrics");
// <splitViewMasterSimulatedSizeMetrics key="simulatedDestinationMetrics"/>
const SplitViewMasterSimulatedSizeMetrics = xmlElement("splitViewMasterSimulatedSizeMetrics");
// <simulatedNavigationBarMetrics key="simulatedTopBarMetrics" prompted="NO"/>
// barStyle="black" prompted="NO" translucent="NO"
const SimulatedNavigationBarMetrics = xmlElement("simulatedNavigationBarMetrics");
// <simulatedTabBarMetrics key="simulatedBottomBarMetrics" barStyle="black"/>
const SimulatedTabBarMetrics = xmlElement("simulatedTabBarMetrics");


const InnerVariation = xmlElement("variation");
const Nil = xmlElement("nil");


const NamedColor = (props: { name: string; children?: React.ReactNode }) => <InnerNamedColor {...props} />

// <device id="retina5_5" orientation="landscape" appearance="dark"/>
// ipad10_5

type VariantSizeClass = 'regular' | 'compact';
type VariantDisplayGamut = 'sRGB' | 'P3';

const AccessibilityOverrides = ({
    isEnabled,
    dynamicTypePreference,
    boldText,
    buttonShapes,
    reduceTransparency,
    onOffLabels,
    increaseContrast
}: {
    // 0-11
    dynamicTypePreference?: number,
    isEnabled?: boolean,
    boldText?: boolean;
    buttonShapes?: boolean;
    reduceTransparency?: boolean;
    onOffLabels?: boolean;
    increaseContrast?: boolean;
}) => <InnerAccessibilityOverrides increaseContrast={toBoolArg(increaseContrast)} onOffLabels={toBoolArg(onOffLabels)} reduceTransparency={toBoolArg(reduceTransparency)} buttonShapes={toBoolArg(buttonShapes)} boldText={toBoolArg(boldText)} isEnabled={toBoolArg(isEnabled)} dynamicTypePreference={dynamicTypePreference} />

const Variation = ({ heightClass, widthClass, displayGamut, ...props }: { heightClass?: VariantSizeClass, widthClass?: VariantSizeClass, displayGamut?: VariantDisplayGamut, children?: React.ReactNode }) => <InnerVariation {...props} xKey={Object.entries({ heightClass, widthClass, displayGamut }).filter(([, v]) => !!v).map((entry) => entry.join('=')).join('-')} />


const Scene = ({ children, ...props }: { children?: React.ReactNode }) => (
    <InnerScene {...props}>
        <Objects>{children}</Objects>
    </InnerScene>
);

const AutoresizingMask = ({
    xKey,
    flexibleMaxY,
    flexibleMaxX,
    flexibleMinX,
    flexibleMinY,
    widthSizable,
    ...props
}: {
    xKey?: string | "autoresizingMask";
    flexibleMaxX?: boolean;
    flexibleMaxY?: boolean;

    // These are used for things like tab bar
    flexibleMinX?: boolean;
    flexibleMinY?: boolean;
    widthSizable?: boolean;
}) => (
    <InnerAutoresizingMask
        xKey={xKey}
        flexibleMaxY={toBoolArg(flexibleMaxY)}
        flexibleMaxX={toBoolArg(flexibleMaxX)}
        flexibleMinX={toBoolArg(flexibleMinX)}
        flexibleMinY={toBoolArg(flexibleMinY)}
        widthSizable={toBoolArg(widthSizable)}
        {...props}
    />
);


type ConstraintAttribute = 'width' | 'height' | 'centerY' | 'centerX' | 'leading' | 'top' | 'trailing' | 'bottom'

const Constraint = (props: {
    id?: string;
    constant?: number;
    firstItem: string;
    firstAttribute: ConstraintAttribute;
    secondItem: string;
    secondAttribute: ConstraintAttribute;
    multiplier?: string;
}) => {
    return (
        <InnerConstraint
            {...props}
            id={
                props.id ??
                createConstraintId(
                    props.firstItem,
                    props.firstAttribute,
                    props.secondItem,
                    props.secondAttribute,
                    props.constant
                )
            }
        />
    );
};

const Rect = ({
    xKey,
    x = 0,
    y = 0,
    ...props
}: {
    xKey: string;
    x?: number;
    y?: number;
    width: number;
    height: number;
}) => {
    return (
        <InnerRect xKey={xKey} x={parseFloat(String(x))} y={parseFloat(String(y))} {...props} />
    );
};

const StyleRect = ({ xKey, style }: { xKey: string; style?: StyleProp }) => {
    if (!style) {
        return null;
    }

    return (
        <Rect
            xKey={xKey}
            x={style.left}
            y={style.top}
            width={style.width ?? 414}
            height={style.height ?? 736}
        />
    );
};

type StyleProp = {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    backgroundColor?: string;
};

type ContentAttribute = 'unspecified' | 'playback' | 'spatial' | 'forceLeftToRight' | 'forceRightToLeft';

type CommonViewProps = {
    id?: string;
    contentMode?: IBContentMode;
    horizontalHuggingPriority?: number;
    verticalHuggingPriority?: number;
    userLabel?: string;
    semanticContentAttribute?: ContentAttribute;
    fixedFrame?: boolean;
    hidden?: boolean;
    multipleTouchEnabled?: boolean;
    clipsSubviews?: boolean;
    userInteractionEnabled?: boolean;
    insetsLayoutMarginsFromSafeArea?: Boolean;
    opaque?: boolean;
    translatesAutoresizingMaskIntoConstraints?: boolean;
};

function convertCommonViewProps(props: CommonViewProps) {

    const {
        id,
        contentMode,
        horizontalHuggingPriority,
        verticalHuggingPriority,
        userLabel,
        fixedFrame,
        clipsSubviews,
        multipleTouchEnabled,
        userInteractionEnabled,
        insetsLayoutMarginsFromSafeArea,
        opaque,
        hidden,
        translatesAutoresizingMaskIntoConstraints,
    } = props;
    return {
        id: id ?? createConstraintId('view', ...Object.keys(props)),
        contentMode,
        userLabel,
        multipleTouchEnabled: toBoolArg(multipleTouchEnabled),
        hidden: toBoolArg(hidden),
        fixedFrame: toBoolArg(fixedFrame),
        clipsSubviews: toBoolArg(clipsSubviews),
        userInteractionEnabled: toBoolArg(userInteractionEnabled),
        insetsLayoutMarginsFromSafeArea: toBoolArg(insetsLayoutMarginsFromSafeArea),
        opaque: toBoolArg(opaque),
        translatesAutoresizingMaskIntoConstraints: toBoolArg(
            translatesAutoresizingMaskIntoConstraints
        ),
        // These defaults are fine
        horizontalHuggingPriority: horizontalHuggingPriority,
        verticalHuggingPriority: verticalHuggingPriority,
        // horizontalHuggingPriority: horizontalHuggingPriority ?? 251,
        // verticalHuggingPriority: verticalHuggingPriority ?? 251,
    };
}

const Label = ({
    children,
    style,
    adjustsFontSizeToFit,
    text,
    lineBreakMode,
    textAlignment,
    baselineAdjustment,
    ...props
}: {
    style?: StyleProp & {
        color?: string;
        highlightedColor?: string;
        fontSize?: number;
        shadowOffset?: { width: number; height: number };
        shadowColor?: string;
    };
    text?: string;
    textAlignment?: IBTextAlignment;
    lineBreakMode?: IBLineBreakMode;
    baselineAdjustment?: string;
    adjustsFontSizeToFit?: boolean;
    children?: React.ReactNode;
} & CommonViewProps) => (
    <InnerLabel
        {...props}
        {...convertCommonViewProps({ ...props, opaque: props.opaque ?? false })}
        text={text}
        baselineAdjustment={baselineAdjustment}
        lineBreakMode={lineBreakMode}
        textAlignment={textAlignment}
        adjustsFontSizeToFit={toBoolArg(adjustsFontSizeToFit)}
    >
        {/* Auto generate the frame attribute for a view. */}
        <StyleRect xKey="frame" style={style} />

        {/* TODO: FlexBox */}
        <AutoresizingMask xKey="autoresizingMask" flexibleMaxX flexibleMaxY />

        {/* Font */}
        <FontDescription
            xKey="fontDescription"
            type="system"
            pointSize={style?.fontSize ?? 14}
        />

        {/* Shadow */}
        {style?.shadowOffset && <Size xKey="shadowOffset" width={style.shadowOffset.width} height={style.shadowOffset.height} />}
        <CSSColor xKey="shadowColor" value={style?.shadowColor} />

        {/* Colors */}
        {style?.backgroundColor && (
            <CSSColor xKey="backgroundColor" value={style.backgroundColor} />
        )}

        <CSSColor xKey="textColor" value={style?.color} />
        <CSSColor xKey="highlightedColor" value={style?.highlightedColor} />


        {children}
    </InnerLabel>
);

const StackView = ({
    // Default to vertical like RN
    axis = 'vertical',
    baselineRelativeArrangement,
    children,
    style,
    image,
    ...props
}: {
    xKey?: string;
    alignment?: "top" | "center" | "bottom" | "firstBaseline" | "lastBaseline";
    distribution?: "fillEqually" | 'fillProportionally' | 'equalSpacing' | 'equalCentering';
    spacing?: number;
    baselineRelativeArrangement?: boolean;
    // Horizontal is technically the native default, if omitted then Apple defaults to horizontal.
    axis?: 'vertical' | 'horizontal',
    style?: StyleProp;
    image?: string;
    children?: React.ReactNode;
} & CommonViewProps) => (
    <InnerStackView
        {...props}
        {...convertCommonViewProps({
            ...props,
            userLabel: props.userLabel ?? image,
        })}
        baselineRelativeArrangement={toBoolArg(baselineRelativeArrangement)}
        axis={axis}
    >
        {/* Auto generate the frame attribute for a view. */}
        <StyleRect xKey="frame" style={style} />
        {/* TODO: FlexBox */}
        <AutoresizingMask xKey="autoresizingMask" flexibleMaxX flexibleMaxY />

        {/* Colors */}
        {style?.backgroundColor && (
            <CSSColor xKey="backgroundColor" value={style.backgroundColor} />
        )}

        {/* All children are treated as subviews */}
        <Subviews>
            {children}
        </Subviews>
    </InnerStackView>
);

const ImageView = ({
    children,
    style,
    image,
    ...props
}: {
    style?: StyleProp;
    image?: string;
    children?: React.ReactNode;
} & CommonViewProps) => (
    <InnerImageView
        {...props}
        {...convertCommonViewProps({
            ...props,
            userLabel: props.userLabel ?? image,
        })}
        image={image}
    >
        {/* Auto generate the frame attribute for a view. */}
        <StyleRect xKey="frame" style={style} />
        {/* TODO: FlexBox */}
        {/* <AutoresizingMask xKey="autoresizingMask" flexibleMaxX flexibleMaxY /> */}

        {/* Colors */}
        {style?.backgroundColor && (
            <CSSColor xKey="backgroundColor" value={style.backgroundColor} />
        )}
        {children}
    </InnerImageView>
);

const CSSColor = ({ xKey, value }: { xKey: string; value?: string }) => {
    if (!value) {
        return <Nil xKey={xKey} />;
    }

    // TODO: If named color then use named color
    // return <Color xKey={xKey} name={value}/>

    if (["systemBackgroundColor", "linkColor"].includes(value)) {
        // TODO: full system style support
        return <Color xKey={xKey} systemColor={value} />;
    }
    const color = customColorFromCSS(value);

    return (
        <Color xKey={xKey} {...color} colorSpace="custom" customColorSpace="sRGB" />
    );
};

const View = ({
    children,
    style,
    ...props
}: {
    xKey?: string;
    style?: StyleProp;
    children?: React.ReactNode;
} & CommonViewProps) => {
    // React.Children.toArray(children).map(child => {
    //     console.log('subview:', child, child.constructor.name, child.type.name);
    // })

    // TODO: Filter out non subviews
    return (
        <InnerView {...props} {...convertCommonViewProps(props)}>
            {style?.backgroundColor && (
                <CSSColor xKey="backgroundColor" value={style.backgroundColor} />
            )}
            <StyleRect xKey="frame" style={style} />
            {/* TODO: FlexBox */}
            <AutoresizingMask xKey="autoresizingMask" flexibleMaxX flexibleMaxY />

            {children}
        </InnerView>
    );
};

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
            <Capability name="System colors in document resources" minToolsVersion="11.0" />
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

                                <ImageView
                                    id="EXPO-SplashScreenBackground"
                                    userInteractionEnabled={false}
                                    insetsLayoutMarginsFromSafeArea={false}
                                    translatesAutoresizingMaskIntoConstraints={false}
                                    contentMode="scaleAspectFill"
                                    image="SplashScreenBackground"
                                    userLabel="SplashScreenBackground"
                                    style={{
                                        width: 414,
                                        height: 736,
                                    }}
                                />
                                <Label horizontalHuggingPriority={251} verticalHuggingPriority={251} fixedFrame translatesAutoresizingMaskIntoConstraints={false} adjustsFontSizeToFit={false} style={{
                                    top: 133,
                                    left: 337,
                                    width: 42,
                                    height: 21,
                                    shadowOffset: {
                                        width: 3,
                                        height: 3,
                                    },
                                    shadowColor: 'lime'
                                }} text="Lydia" />
                                <ImageView id="EXPO-SplashScreen" userLabel="SplashScreen" image="SplashScreen"
                                    contentMode="scaleAspectFit" horizontalHuggingPriority={251} verticalHuggingPriority={251} clipsSubviews translatesAutoresizingMaskIntoConstraints={false} style={{
                                        width: 414,
                                        height: 736,
                                    }} />

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

                                <Constraint firstItem="EXPO-SplashScreen" firstAttribute="top" secondItem="EXPO-ContainerView" secondAttribute="top" id="83fcb9b545b870ba44c24f0feeb116490c499c52" />
                                <Constraint firstItem="EXPO-SplashScreen" firstAttribute="leading" secondItem="EXPO-ContainerView" secondAttribute="leading" id="61d16215e44b98e39d0a2c74fdbfaaa22601b12c" />
                                <Constraint firstItem="EXPO-SplashScreen" firstAttribute="trailing" secondItem="EXPO-ContainerView" secondAttribute="trailing" id="f934da460e9ab5acae3ad9987d5b676a108796c1" />
                                <Constraint firstItem="EXPO-SplashScreen" firstAttribute="bottom" secondItem="EXPO-ContainerView" secondAttribute="bottom" id="d6a0be88096b36fb132659aa90203d39139deda9" />
                            </Constraints>
                            <ViewLayoutGuide xKey="safeArea" id="EXPO-SafeArea" />
                        </View>
                    </ViewController>
                    <Placeholder
                        placeholderIdentifier="IBFirstResponder"
                        id="EXPO-PLACEHOLDER-1"
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
    )
}


// const originalWarn = console.error;

// console.error = (msg) => {
//     if (msg.match(/React does not recognize the/)) {
//         return;
//     }
//     return originalWarn(arguments);

// }
const xml = ReactDomServer.renderToStaticMarkup(<LaunchScreen />);
// const xml = renderXML(jsx);

// console.error = originalWarn

(async () => {


    function deepCopyObjectConvertingKey(obj: any, transformKey: (key: string, value: any) => string) {
        if (typeof obj !== "object" || obj === null) {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(item => deepCopyObjectConvertingKey(item, transformKey));
        }

        const newObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[transformKey(key, obj[key])] = deepCopyObjectConvertingKey(obj[key], transformKey);
            }
        }
        return newObj;
    }

    function upperFirst(val: string) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }


    const obj = await toObjectAsync(xml);

    const converted = deepCopyObjectConvertingKey(obj, (k, v) => {

        // React doesn't preserve the key property so we use xKey to pass it through to XML
        if (k === 'xKey') {
            return 'key'
        }
        // if (Array.isArray(v) || (typeof v === 'object' && '$' in v)) {
        //     return upperFirst(k)
        // }
        return k;
    })

    console.log(toString(converted));
})();
// console.log(xml);
