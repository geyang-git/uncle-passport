import React, { FC, useEffect, useState } from "react";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import {
  Layout,
  Image,
  Avatar,
  Table,
  Button,
  Input,
  Space,
} from "@douyinfe/semi-ui";
import { NavApp } from "../../components/Nav";
import axios from "axios";
import { useRouter } from "next/router";
import { Color } from "../../components/passport/Cell";

const { Header, Content } = Layout;

const data = {
  country: "China",
  name: "ch",
  ms: 83,
  vf: 28,
  voa: 52,
  eta: 3,
  vr: 115,
  ppr: 60,
  wr: "42%",
  population: "1,439,323,776",
};

const colorToMapNum = (color: string) => {
  switch (color) {
    case "Green":
      return 1;
    case "Blue":
      return 2;
    case "Orange":
      return 3;
    case "Red":
      return 4;
    default:
      return;
  }
};

const PassportLeft = () => {
  return (
    <div style={{ width: "16%", marginLeft: 20 }}>
      <Image
        alt="passport"
        width={"100%"}
        src={`/next-image/passport-height/${data.name?.toLowerCase()}.png`}
      />
      <div style={{ marginTop: 15 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px 0",
            margin: 0,
            fontSize: 12,
            color: "#999",
            borderTop: "1px solid #c96",
            borderBottom: "1px solid #c96",
          }}
        >
          MOBILITY SCORE
          <span style={{ fontSize: 16 }}>{data.ms}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px 0",
            margin: 0,
            fontSize: 12,
            color: "#999",
            borderBottom: "1px solid #c96",
          }}
        >
          VISA-FREE
          <span style={{ fontSize: 16 }}>{data.vf}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px 0",
            margin: 0,
            fontSize: 12,
            color: "#999",
            borderBottom: "1px solid #c96",
          }}
        >
          ETA
          <span style={{ fontSize: 16 }}>{data.eta}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px 0",
            margin: 0,
            fontSize: 12,
            color: "#999",
            borderBottom: "1px solid #c96",
          }}
        >
          VISA REQUIRED
          <span style={{ fontSize: 16 }}>{data.vr}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px 0",
            margin: 0,
            fontSize: 12,
            color: "#999",
            borderBottom: "1px solid #c96",
          }}
        >
          PASSPORT POWER RANK
          <span style={{ fontSize: 16 }}>{data.ppr}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px 0",
            margin: 0,
            fontSize: 12,
            color: "#999",
            borderBottom: "1px solid #c96",
          }}
        >
          WORLD REACH
          <span style={{ fontSize: 16 }}>{data.wr}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px 0",
            margin: 0,
            fontSize: 12,
            color: "#999",
            borderBottom: "1px solid #c96",
          }}
        >
          POPULATION
          <span style={{ fontSize: 16 }}>{data.population}</span>
        </div>
      </div>
    </div>
  );
};

const PassportCenter: FC<{
  mapData: any;
  color: {
    Green: number;
    Red: number;
    Orange: number;
    Blue: number;
    total: number;
  };
}> = (props) => {
  const { mapData, color } = props;

  echarts.registerMap(
    "world",
    require("../../public/next-image/map/world-highres3.geo.json")
  );

  const mapOption = {
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: "{b}",
    },
    nameMap: {
      Russia: "Russian Federation",
      "Democratic Republic of the Congo": "Congo (Dem. Rep.)",
      "Republic of Congo": "Congo",
      "United Republic of Tanzania": "Tanzania",
      Somaliland: "Somalia",
      Swaziland: "Eswatini",
      "Ivory Coast": "Cote d'Ivoire (Ivory Coast)",
      "Western Sahara": "Morocco",
      "Guinea Bissau": "Guinea",
      "Republic of Serbia": "Serbia",
      Macedonia: "North Macedonia",
      "Northern Cyprus": "Cyprus",
      "Cyprus No Mans Area": "Cyprus",
      Myanmar: "Myanmar [Burma]",
      Vietnam: "Viet nam",
      "East Timor": "Timor-Leste",
    },
    visualMap: {
      type: "piecewise",
      show: false,
      min: 1,
      max: 4,
      splitNumber: 4,
      inRange: {
        color: ["#2c883b", "#3266b1", "#db9601", "#a32121"],
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
        data: mapData,
      },
    ],
  };

  return (
    <div style={{ marginLeft: 20, width: "48%" }}>
      <ReactEcharts option={mapOption} style={{ height: "65vh" }} />
      <div
        style={{
          display: "flex",
          color: "#fff",
          width: "100%",
          marginTop: 10,
          fontSize: 16,
        }}
      >
        <div
          style={{
            backgroundColor: "#2c883b",
            width: `${(color?.Green! / color?.total!) * 100}%`,
          }}
        >
          {color?.Green}
        </div>
        <div
          style={{
            backgroundColor: "#3266b1",
            width: `${(color?.Blue! / color?.total!) * 100}%`,
          }}
        >
          {color?.Blue}
        </div>
        <div
          style={{
            backgroundColor: "#db9601",
            width: `${(color?.Orange! / color?.total!) * 100}%`,
          }}
        >
          {color?.Orange}
        </div>
        <div
          style={{
            backgroundColor: "#a32121",
            width: `${(color?.Red! / color?.total!) * 100}%`,
          }}
        >
          {color?.Red}
        </div>
      </div>
    </div>
  );
};

const PassportRight: FC<{
  tableData: {
    iso: string;
    nicename: string;
    requirement: string;
    color: string;
  }[];
}> = (props) => {
  const { tableData } = props;
  const [dataSource, setData] = useState(tableData);
  const [switchList, setSwitchList] = useState([true, true, true, true]);
  const [searchParams, setSearchParams] = useState("");

  const openList = [Color.Green, Color.Blue, Color.Orange, Color.Red];
  const closeList = [
    Color.GreenGray,
    Color.BlueGray,
    Color.OrangeGray,
    Color.RedGray,
  ];

  useEffect(() => {
    const chooseColor: string[] = [];
    switchList.map((item, index) => {
      switch (index) {
        case 0:
          if (item) {
            chooseColor.push("Green");
          }
          break;
        case 1:
          if (item) {
            chooseColor.push("Blue");
          }
          break;
        case 2:
          if (item) {
            chooseColor.push("Orange");
          }
          break;
        case 3:
          if (item) {
            chooseColor.push("Red");
          }
          break;
      }
    });
    setData(
      tableData.filter((item: any) => {
        if (
          item.nicename.toLowerCase().includes(searchParams) &&
          chooseColor.includes(item.color)
        ) {
          return item;
        }
      })
    );
  }, [searchParams, switchList, tableData]);

  return (
    <div style={{ width: "25%" }}>
      <Table
        dataSource={dataSource}
        columns={[
          {
            title: (
              <div
                style={{
                  width: "100%",
                }}
              >
                <Input
                  onChange={(value) => {
                    setSearchParams(value);
                  }}
                  placeholder="Find a country..."
                  suffix={
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      {switchList.map((item, index) => {
                        return (
                          <div
                            key={index}
                            style={{
                              width: 16,
                              height: 16,
                              borderRadius: 8,
                              margin: "0 2px",
                              cursor: "pointer",
                              backgroundColor: item
                                ? openList[index]
                                : closeList[index],
                            }}
                            onClick={() => {
                              const list = [...switchList];
                              list[index] = !list[index];
                              setSwitchList(list);
                            }}
                          />
                        );
                      })}
                    </div>
                  }
                />
              </div>
            ),
            render: (_, record) => {
              return (
                record.color !== "White" && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: 10,
                      }}
                    >
                      <Image
                        src={`/next-image/country/${record.iso.toLowerCase()}.svg`}
                        alt="flag"
                        height={20}
                        style={{ marginRight: 4 }}
                      />{" "}
                      {record.nicename}
                    </div>
                    <div
                      style={{
                        width: 120,
                        // @ts-ignore
                        backgroundColor: Color[record.color],
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {record.requirement}
                    </div>
                  </div>
                )
              );
            },
          },
        ]}
        pagination={false}
        bordered
        scroll={{ y: "65vh" }}
      />
    </div>
  );
};

const Passport = () => {
  const [mapData, setMapData] = useState();
  const [color, setColor] = useState<{
    Green: number;
    Red: number;
    Orange: number;
    Blue: number;
    total: number;
  }>();
  const [tableData, setTableData] = useState();

  const countryIso = useRouter()?.asPath?.split("?")[1]?.split("=")[1];

  useEffect(() => {
    axios.get("/api/passport?passport=" + countryIso).then((res) => {
      const list = res.data.data.list;
      const result = res.data.data.result;
      setMapData(
        list.map((item: any) => {
          return {
            name: item.Destination.nicename,
            value: colorToMapNum(item.Requirement.color),
          };
        })
      );
      setColor({
        ...result.colorGroup,
        total:
          result.colorGroup.Green +
          result.colorGroup.Red +
          result.colorGroup.Orange +
          result.colorGroup.Blue,
      });
      setTableData(
        list.map((item: any) => {
          return {
            iso: item.Destination.iso,
            nicename: item.Destination.nicename,
            requirement: item.Requirement.Requirement,
            color: item.Requirement.color,
          };
        })
      );
    });
  }, []);

  return (
    <Layout>
      <Header>
        <NavApp />
      </Header>
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            fontSize: 24,
            margin: "20px 0 10px 0",
          }}
        >
          <div style={{ display: "flex", fontWeight: 800 }}>
            <Image
              src={`/next-image/country/ad.svg`}
              alt="flag"
              height={24}
              style={{ marginRight: 4 }}
            />
            {data.country.toUpperCase()}
            {"\u00A0"}
          </div>
          PASSPOART DASHBOARD
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <PassportLeft />
          {mapData && color && (
            <PassportCenter mapData={mapData} color={color} />
          )}
          {tableData && <PassportRight tableData={tableData} />}
        </div>
      </Content>
    </Layout>
  );
};

export default Passport;
