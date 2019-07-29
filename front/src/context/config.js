// @flow

import { createContext } from "react";
// import {
//   type UserRole
// } from "../types";
import createWithState from "./createWithState";

// type Id = string;
// type Direction = "ltr" | "rtl";
// type PageType = "PROJECT" | "ACCOUNT" | "GENERAL";
// type ProjectType = string;
// type LocationOnProjectChange = Location => Location | string;
// type PseudoBoolean = "true" | "false";

// type ProfileLink = {
//   value: string,
//   weight: number,
//   name: string,
//   href: string
// };

// type LaunchDarklyDefaults = {
//   version: 2
// };

// export type Config = {
//   accountLevelNav: boolean,
//   apiUrlRoot: string,
//   direction: Direction,
//   hasAccessToGettingStarted: boolean,
//   hasAccessToPayForStrings: boolean,
//   hasTopNavAndTitleBar: boolean,
//   includeTopNav: boolean,
//   intercomLauncherDisabled: boolean,
//   isImpersonated: boolean,
//   isSelfService: boolean,
//   launchDarklyDefaults: LaunchDarklyDefaults,
//   ldClientId: Id,
//   locationOnProjectChange: LocationOnProjectChange,
//   logoutUrl: string,
//   pageType: PageType,
//   productUid: Id,
//   profileLinks: Array<ProfileLink>,
//   projectArchived: boolean,
//   projectType: ProjectType,
//   showProjectSwitcher: boolean,
//   smartling_account_name: string,
//   smartling_account_uid: Id,
//   smartling_origin_locale: string,
//   smartling_origin_locale_description: string,
//   smartling_project_name: string,
//   smartling_sid: Id,
//   smartling_uid: Id,
//   smartling_user_email: string,
//   smartling_user_first_name: string,
//   smartling_user_last_name: string,
//   smartling_user_role: UserRole,
//   smartling_user_role_name: string,
//   smartling_user_uid: Id,
//   userImpersonated: PseudoBoolean,
//   isContentOwner: boolean,
//   isCoreDashboard: boolean
// };

// const defaultContext: ?Config = null;
const { Provider, Consumer } = createContext({
  test: true
});

const withConfig = createWithState("appConfig", Consumer);

export {
  Provider as ConfigProvider,
  Consumer as ConfigConsumer,
  withConfig
};
