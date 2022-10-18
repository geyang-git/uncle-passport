import { Layout, Select, Space, Typography, Image } from "@douyinfe/semi-ui";
import { FC, useState } from "react";
import { NavApp } from "../../../components/Nav";

const { Content, Header } = Layout;

const checkData = [
  {
    id: 0,
    country: "Antigua and Barbuda",
    name: "donation",
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
    name: "estate",
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
    name: "donation",
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
    name: "estate",
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

const TableNull: FC = () => {
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
                <TableNull />
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
              <TableNull />
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
            {thirdSelect ? (
              <TableContent content={thirdSelect} />
            ) : (
              <TableNull />
            )}
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
              <TableNull />
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Check;
