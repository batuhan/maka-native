import { getInAppConfigs } from "../configs";

describe("getInAppConfigs", () => {
  it("should return empty string without configName", () => {
    const config = getInAppConfigs();
    expect(config).toEqual("");
  });

  it("should return config enum config name", () => {
    let configName = "COUNTRY_CODE";
    let config = getInAppConfigs(configName);
    expect(config).toEqual("tr");
    configName = "MIN_FULLNAME_LENGTH";
    config = getInAppConfigs(configName);
    expect(config).toEqual(8);
  });

  it("should return empty string with not enum config name", () => {
    const configName = "NOT_ENUM";
    const config = getInAppConfigs(configName);
    expect(config).toEqual("");
  });
});
