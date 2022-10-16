import { Layout, Slider, Space, Typography } from "@douyinfe/semi-ui";
import { NavApp } from "../../../components/Nav";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import { Select } from "@douyinfe/semi-ui";
import axios from "axios";
import { useState, useEffect } from "react";

const { Content, Header } = Layout;

echarts.registerMap(
  "world",
  require("/public/next-image/map/world-highres3.geo.json")
);

const Map = () => {
  const [country, setCountry] =
    useState<{ value: string; label: string; otherKey: number }[]>();

  const [nationality, setNationality] = useState("");
  const [secondNation, setSecondNation] = useState("");

  useEffect(() => {
    axios.get("/api/passport/all").then((res) => {
      setCountry(
        res.data.data.map((item: any, index: number) => {
          return {
            value: item.iso,
            label: item.name,
            otherKey: index,
          };
        })
      );
    });
  }, []);

  const mapOption = {
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: "{b}",
    },
    visualMap: {
      type: "piecewise",
      show: false,
      min: 0,
      max: 1,
      splitNumber: 1,
      inRange: {
        color: ["#8b8b8b", "#c28549"],
      },
      calculable: true,
    },
    series: [
      {
        name: "Country",
        type: "map",
        roam: true,
        scaleLimit: { min: 1 },
        map: "world",
        data: [],
      },
    ],
  };

  const handleNationChange = (value: any) => {
    console.log(value);
    setNationality(value);
  };

  const handleSecondChange = (value: any) => {
    console.log(value);
    setSecondNation(value);
  };

  return (
    <Layout>
      <Header>
        <NavApp />
        <Space
          vertical
          align={"center"}
          style={{ width: "100%", padding: "20px 0" }}
        >
          <Typography.Title>Program Map</Typography.Title>
          <Typography.Text type="tertiary">
            Discover the power of a second passport.
          </Typography.Text>
        </Space>
      </Header>
      <Content>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ color: "#fff" }}>Your nationality :</div>
              <Select
                placeholder="Please select your nationality"
                style={{ width: 250, marginTop: 10 }}
                onChange={handleNationChange}
              >
                {country?.map((item) => (
                  <Select.Option value={item.value} key={item.otherKey}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 20,
              }}
            >
              <div style={{ color: "#fff" }}>Add a second passport :</div>
              <Select
                placeholder="Please select"
                style={{ width: 250, marginTop: 10 }}
                onChange={handleSecondChange}
              >
                {country?.map((item) => (
                  <Select.Option value={item.value} key={item.otherKey}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: 20,
              }}
            >
              <div
                style={{
                  width: 160,
                  height: 160,
                  backgroundColor: "#c28549",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontStyle: "italic",
                  fontFamily: "times new roman",
                }}
              >
                <div style={{ fontSize: 68 }}>84</div>
                <div style={{ marginLeft: 5 }}>
                  Countries you can visit visa-free
                </div>
              </div>
              <div
                style={{
                  width: 160,
                  height: 160,
                  backgroundColor: "#8b8b8b",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontStyle: "italic",
                  fontFamily: "times new roman",
                  marginTop: 20,
                }}
              >
                <div style={{ fontSize: 68 }}>115</div>
                <div style={{ marginLeft: 5 }}>
                  The country you need a visa to visit
                </div>
              </div>
            </div>
            <ReactEcharts
              option={mapOption}
              style={{ height: 500, width: 700 }}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Map;
