import inAppConfigs from "../../config/inAppConfigs";

export const getInAppConfigs = (configName: string) => {
  const config: any = (<any>inAppConfigs)[configName] || "";
  return config;
};
