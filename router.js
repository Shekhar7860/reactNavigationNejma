import React, { Component } from 'react';

import {
    Image,
    AsyncStorage
} from 'react-native';

import {
    createAppContainer,
    createSwitchNavigator
} from "react-navigation";
import register from './Screens/register';
import otpInput from './Screens/otpInput';
import login from './Screens/login';
import forgotPassword from './Screens/forgotPassword';
import famcamHome from './Screens/famcamHome';
import orders from './Screens/orders';
import profile from './Screens/profile';
import talentInfo from './Screens/talentInfo';
import shoutout from './Screens/shoutout';
import profileSetup from './Screens/profileSetup';
import editProfile from './Screens/editProfile';
import termsAndConditions from './Screens/termsAndConditions';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import contact from './Screens/contact';
import PlayVideo from './Screens/PlayVideo';
import Language from './Screens/Language';
import Suggestion from './Screens/Suggestion';
import AfterPayment from './Screens/AfterPayment';
import PaymentInfo from './Screens/PaymentInfo';
import payment from './Screens/payment';
import paymentWeb from './Screens/paymentWeb';
import Notifications from './Screens/Notifications';
import paymentMethods from './Screens/paymentMethods';
import ChangePassword from './Screens/ChangePassword';
import contactUs from './Screens/contactUs';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import verifyEmail from './Screens/verifyEmail';
import BookingDone from './Screens/BookingDone';
import creditCard from './Screens/creditCard';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator,BottomTabBar } from 'react-navigation-tabs';
//import { fromLeft, fromBottom, fromRight } from "react-navigation-transitions";

import home from './Screens/home';










const ProfileStack = createStackNavigator({
    profile: profile,
    settings: famcamHome,
    address: talentInfo,
    addNewAddress: creditCard,
    editAddress: PlayVideo,
    editProfile: editProfile,
    editLocationPicker: BookingDone,
    contactUs: contact,
    changePassword: ChangePassword,
    creditsScreen: creditCard
},
    {
        navigationOptions: {
            headerVisible: false,
            tabBarVisible: true
        },
        headerMode: 'none',
    }

)

const MembersStack = createStackNavigator({
    members: Notifications
},
    {
        navigationOptions: {
            headerVisible: false,
            tabBarVisible: true
        },
        headerMode: 'none',
    }

)


const MyBookingsStack = createStackNavigator({
    myBookings: famcamHome
},
    {
        navigationOptions: {
            headerVisible: false,
            tabBarVisible: true
        },
        headerMode: 'none',
    }

)

const ChatStack = createStackNavigator({
    chatListingScreen: famcamHome
},
    {
        navigationOptions: {
            headerVisible: false,
            tabBarVisible: true
        },
        headerMode: 'none',
    }

)

ProfileStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

MembersStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

ChatStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

MyBookingsStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};


const TabbarNavigation = createBottomTabNavigator({
    //homeStack: HomeStack,
    membersStack: MembersStack,
    myBookingsStack: MyBookingsStack,
    chatStack:ChatStack,
    profile: ProfileStack,
},
    {
        initialRouteName: 'membersStack',
        tabBarComponent: (props) => (<TabComponent {...props} />)
    },
    {
        navigationOptions: {
            header: null
        },
    },
)

const AppNavigator = createStackNavigator({
    welcome: home,
    login: login,
    forgotPassword: forgotPassword,
    register: register
    //chooseInterest: ChooseInterest
},
    {
        initialRouteName: 'welcome',
        headerMode: 'none'
    },
    {
        navigationOptions: {
            headerVisible: false,
        },
       
    }
)


export const AppContainer = (loginStatus) => {
    return createAppContainer(createSwitchNavigator(
        {
            signOut: AppNavigator,
            tabBar: TabbarNavigation,
        },
        {
            initialRouteName: loginStatus ? 'tabBar' : 'signOut',
        }
    ));
}
