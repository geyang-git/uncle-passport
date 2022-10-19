import { Layout, Select, Space, Typography, Image } from "@douyinfe/semi-ui";
import { FC, useState } from "react";
import { NavApp } from "../../../components/Nav";

const { Content, Header } = Layout;

const checkData = [
  {
    id: 0,
    country: "Antigua and Barbuda",
    name: "Donation",
    iso: "AG",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 200000,
    asset: "Donation",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 53200,
    residenceTime: "-",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "3~4 months",
    visaFreeTravel: 136,
    altonScore: 60,
  },
  {
    id: 1,
    country: "Antigua and Barbuda",
    name: "Estate",
    iso: "AG",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 400000,
    asset: "Estate",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 200000,
    residenceTime: "-",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "3~4 months",
    visaFreeTravel: 136,
    altonScore: 60,
  },
  {
    id: 2,
    country: "Dominica",
    name: "Donation",
    iso: "DM",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 200000,
    asset: "Donation",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 2240,
    residenceTime: "-",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "9~12 months",
    visaFreeTravel: 128,
    altonScore: 67,
  },
  {
    id: 3,
    country: "Dominica",
    name: "Dstate",
    iso: "DM",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 220000,
    asset: "Estate",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 43240,
    residenceTime: "-",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "9~12 months",
    visaFreeTravel: 128,
    altonScore: 67,
  },
  {
    id: 4,
    country: "Grenada",
    name: "Donation",
    iso: "GD",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 200000,
    asset: "Donation",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 12020,
    residenceTime: "-",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "3~4 months",
    visaFreeTravel: 130,
    altonScore: 64,
  },
  {
    id: 5,
    country: "Grenada",
    name: "Estate",
    iso: "GD",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 350000,
    asset: "Estate",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 62020,
    residenceTime: "-",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "3~4 months",
    visaFreeTravel: 130,
    altonScore: 64,
  },
  {
    id: 6,
    country: "Portugal",
    name: "Estate",
    iso: "PT",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 350000,
    asset: "Estate",
    investmentGuarantee: "Yes",
    financingOptions: "No",
    governmentFee: 21873,
    residenceTime: "3~6 months",
    interviewRequirements: "No",
    needPhysicalAddress: "2 weeks / 2 years",
    timeToAcquireCitizenship: "7 years",
    visaFreeTravel: 169,
    altonScore: 41,
  },
  {
    id: 7,
    iso: "ME",
    country: "Montenegro",
    name: "Estate",
    currency: "EURUSD",
    personalNetWorth: 0,
    donationAmount: 450000,
    asset: "Estate",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 45000,
    residenceTime: "3",
    interviewRequirements: "No",
    needPhysicalAddress: "Yes",
    timeToAcquireCitizenship: "3-6 months",
    visaFreeTravel: 122,
    altonScore: 63,
  },
  {
    id: 8,
    iso: "LC",
    country: "Saint Lucia",
    name: "Donation",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 190000,
    asset: "Donation",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 5000,
    residenceTime: "3",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "3-4 months",
    visaFreeTravel: 132,
    altonScore: 64,
  },
  {
    id: 9,
    iso: "LC",
    country: "Saint Lucia",
    name: "Estate",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 300000,
    asset: "Estate",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 140000,
    residenceTime: "3",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "3-4 months",
    visaFreeTravel: 132,
    altonScore: 64,
  },
  {
    id: 10,
    iso: "KN",
    country: "Saint Kitts and Nevis",
    name: "Donation",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 195000,
    asset: "Donation",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 3077,
    residenceTime: "-",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "4-6 months",
    visaFreeTravel: 139,
    altonScore: 58,
  },
  {
    id: 11,
    iso: "KN",
    country: "Saint Kitts and Nevis",
    name: "Estate",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 400000,
    asset: "Estate",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 88227,
    residenceTime: "-",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "4-6 months",
    visaFreeTravel: 139,
    altonScore: 58,
  },
  {
    id: 12,
    iso: "US",
    country: "United States of America",
    name: "Project",
    currency: "US dollar",
    personalNetWorth: 0,
    donationAmount: 900000,
    asset: "Project",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: 61885,
    residenceTime: "12~18 months",
    interviewRequirements: "No",
    needPhysicalAddress: "3/5 years",
    timeToAcquireCitizenship: "8 years",
    visaFreeTravel: 169,
    altonScore: 43,
  },
  {
    id: 13,
    iso: "CA",
    country: "Canada Quebec",
    name: "Government bond",
    currency: "Canadian dollar",
    personalNetWorth: 1600000,
    donationAmount: 1200000,
    asset: "Government bond",
    investmentGuarantee: "Yes",
    financingOptions: "Yes",
    governmentFee: "Included in the professional fee",
    residenceTime: "36 months",
    interviewRequirements: "Yes",
    needPhysicalAddress: "3/4 years",
    timeToAcquireCitizenship: "6 years",
    visaFreeTravel: 167,
    altonScore: 49,
  },
  {
    id: 14,
    iso: "BG",
    country: "Bulgaria",
    name: "Government bond",
    currency: "EURUSD",
    personalNetWorth: 1000000,
    donationAmount: 511292,
    asset: "Government bond",
    investmentGuarantee: "Yes",
    financingOptions: "Yes",
    governmentFee: "Included in the professional fee",
    residenceTime: "6~12 months",
    interviewRequirements: "Yes",
    needPhysicalAddress: "Immunity",
    timeToAcquireCitizenship: "6 years",
    visaFreeTravel: 165,
    altonScore: 62,
  },
  {
    id: 15,
    iso: "BG",
    country: "Bulgaria",
    name: "Rapid citizenship",
    currency: "EURUSD",
    personalNetWorth: 2000000,
    donationAmount: 1022583,
    asset: "Government bond",
    investmentGuarantee: "Yes",
    financingOptions: "Yes",
    governmentFee: "Included in the professional fee",
    residenceTime: "6~12 months",
    interviewRequirements: "Yes",
    needPhysicalAddress: "Immunity",
    timeToAcquireCitizenship: "2 years",
    visaFreeTravel: 165,
    altonScore: 62,
  },
  {
    id: 16,
    iso: "CY",
    country: "Cyprus",
    name: "Savings and Estate",
    currency: "EURUSD",
    personalNetWorth: 0,
    donationAmount: 2000000,
    asset: "Savings and Estate",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: "14800",
    residenceTime: "-",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "6 months",
    visaFreeTravel: 164,
    altonScore: 58,
  },
  {
    id: 17,
    iso: "CY",
    country: "Cyprus",
    name: "Portfolio",
    currency: "EURUSD",
    personalNetWorth: 0,
    donationAmount: 2500000,
    asset: "Portfolio",
    investmentGuarantee: "No",
    financingOptions: "No",
    governmentFee: "14800",
    residenceTime: "2 months",
    interviewRequirements: "No",
    needPhysicalAddress: "No",
    timeToAcquireCitizenship: "6 months",
    visaFreeTravel: 164,
    altonScore: 58,
  },
  {
    id: 18,
    iso: "GB",
    country: "United Kingdom",
    name: "Government bond",
    currency: "Pound",
    personalNetWorth: 4000000,
    donationAmount: 2000000,
    asset: "Government bond",
    investmentGuarantee: "Included in the professional fee",
    financingOptions: "No",
    governmentFee: "14800",
    residenceTime: "4~6 months",
    interviewRequirements: "No",
    needPhysicalAddress: "9 months/year",
    timeToAcquireCitizenship: "6.5 years",
    visaFreeTravel: 167,
    altonScore: 39,
  },
];

const indictors = [
  "Currency",
  "Personal NetWorth",
  "Donation Amount",
  "Asset",
  "Investment Guarantee",
  "Financing Options",
  "Government Fee",
  "Residence Time",
  "Interview Requirements",
  "Need Address",
  "Time To Acquire Citizenship",
  "Visa-Free Travel",
  "Alton Score",
];

const TableNull = () => {
  const array = new Array(13).fill("");
  return array.map((item, index) => {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 45,
          width: 240,
          backgroundColor: "#c96",
          color: "#fff",
        }}
      >
        --
      </div>
    );
  });
};

const TableContent: FC<{ content: any }> = (props) => {
  const { content } = props;
  const data: any = [];
  Object.keys(content).forEach((key) => {
    if (key !== "id" && key !== "country" && key !== "name" && key !== "iso") {
      data.push(content[key]);
    }
  });
  return data.map((item: any, index: number) => {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 45,
          width: 240,
          backgroundColor: "#c96",
          color: "#fff",
        }}
      >
        {item}
      </div>
    );
  });
};

const Check = () => {
  const [firstSelect, setFirstSelect] = useState<any>();
  const [secondSelect, setSecondSelect] = useState<any>();
  const [thirdSelect, setThirdSelect] = useState<any>();
  const [fourthSelect, setFourthSelect] = useState<any>();

  return (
    <Layout>
      <Header>
        <NavApp />
        <Space
          vertical
          align={"center"}
          style={{ width: "100%", padding: "20px 0" }}
        >
          <Typography.Title>Program Check</Typography.Title>
          <Typography.Text type="tertiary">
            Select each project and compare its unique features.
          </Typography.Text>
        </Space>
      </Header>
      <Content style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", marginRight: 10 }}>
            <div style={{ marginTop: 161, marginRight: 10 }}>
              {indictors.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      color: "#fff",
                      height: 45,
                      alignItems: "center",
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={
                  firstSelect
                    ? `/next-image/country/${firstSelect.iso.toLowerCase()}.svg`
                    : ""
                }
                preview={false}
                alt="flag"
                width={96}
                height={96}
                style={{ borderRadius: 48, overflow: "hidden" }}
              />
              <Select
                style={{
                  width: 240,
                  height: 45,
                  marginTop: 10,
                  marginBottom: 10,
                }}
                onChange={(value) => {
                  value !== undefined &&
                    setFirstSelect(checkData[value as number]);
                }}
              >
                {checkData.map((item, index) => {
                  return (
                    <Select.Option value={item.id} key={index}>
                      {item.country}-{item.name}
                    </Select.Option>
                  );
                })}
              </Select>
              {firstSelect ? (
                <TableContent content={firstSelect} />
              ) : (
                TableNull()
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              src={
                secondSelect
                  ? `/next-image/country/${secondSelect.iso.toLowerCase()}.svg`
                  : ""
              }
              preview={false}
              alt="flag"
              width={96}
              height={96}
              style={{ borderRadius: 48, overflow: "hidden" }}
            />
            <Select
              style={{
                width: 240,
                height: 45,
                marginTop: 10,
                marginBottom: 10,
              }}
              onChange={(value) => {
                value !== undefined &&
                  setSecondSelect(checkData[value as number]);
              }}
            >
              {checkData.map((item, index) => {
                return (
                  <Select.Option value={item.id} key={index}>
                    {item.country}-{item.name}
                  </Select.Option>
                );
              })}
            </Select>
            {secondSelect ? (
              <TableContent content={secondSelect} />
            ) : (
              TableNull()
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              src={
                thirdSelect
                  ? `/next-image/country/${thirdSelect.iso.toLowerCase()}.svg`
                  : ""
              }
              preview={false}
              alt="flag"
              width={96}
              height={96}
              style={{ borderRadius: 48, overflow: "hidden" }}
            />
            <Select
              style={{
                width: 240,
                height: 45,
                marginTop: 10,
                marginBottom: 10,
              }}
              onChange={(value) => {
                value !== undefined &&
                  setThirdSelect(checkData[value as number]);
              }}
            >
              {checkData.map((item, index) => {
                return (
                  <Select.Option value={item.id} key={index}>
                    {item.country}-{item.name}
                  </Select.Option>
                );
              })}
            </Select>
            {thirdSelect ? <TableContent content={thirdSelect} /> : TableNull()}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={
                fourthSelect
                  ? `/next-image/country/${fourthSelect.iso.toLowerCase()}.svg`
                  : ""
              }
              preview={false}
              alt="flag"
              width={96}
              height={96}
              style={{ borderRadius: 48, overflow: "hidden" }}
            />
            <Select
              style={{
                width: 240,
                height: 45,
                marginTop: 10,
                marginBottom: 10,
              }}
              onChange={(value) => {
                value !== undefined &&
                  setFourthSelect(checkData[value as number]);
              }}
            >
              {checkData.map((item, index) => {
                return (
                  <Select.Option value={item.id} key={index}>
                    {item.country}-{item.name}
                  </Select.Option>
                );
              })}
            </Select>
            {fourthSelect ? (
              <TableContent content={fourthSelect} />
            ) : (
              TableNull()
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Check;
