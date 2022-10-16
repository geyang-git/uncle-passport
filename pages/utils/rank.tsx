import {
  Layout,
  Space,
  Table,
  Typography,
  Image,
  Popover,
  Select,
  Button,
} from "@douyinfe/semi-ui";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import { NavApp } from "../../components/Nav";

const { Header, Sider, Content } = Layout;

const rankData = [
  {
    rank: 1,
    name: "GERMANY",
    ms: "172",
    iso: "ad",
    vf: 126,
    va: 46,
    vr: 26,
  },
  {
    rank: 1,
    name: "GERMANY",
    ms: "172",
    iso: "ad",
    vf: 113,
    va: 53,
    vr: 32,
  },
  {
    rank: 1,
    name: "GERMANY",
    ms: "172",
    iso: "ad",
    vf: 126,
    va: 46,
    vr: 26,
  },
  {
    rank: 1,
    name: "GERMANY",
    ms: "172",
    iso: "ad",
    vf: 126,
    va: 46,
    vr: 26,
  },
];

const tableHeader = (title: string) => {
  return <div style={{ color: "#c96", fontSize: 12 }}>{title}</div>;
};

const ECharts = () => {
  echarts.registerMap(
    "world",
    require("../../public/next-image/map/world-highres3.geo.json")
  );

  const mapOption = {
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
    },
    visualMap: {
      left: "right",
      min: 0,
      max: 200,
      colorHue: "#fff",
      textStyle: {
        color: "#fff",
      },
      inRange: {
        color: [
          "#e5cab0",
          "#e0c0a1",
          "#dbb692",
          "#d6ad83",
          "#d1a375",
          "#cc9966",
          "#c78f57",
          "#c28549",
        ],
      },
      text: ["High", "Low"],
      calculable: true,
    },
    series: [
      {
        name: "MOBILITY SCORE",
        type: "map",
        roam: true,
        scaleLimit: { min: 1 },
        map: "world",
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [{ name: "Russian Federation", value: 100 }],
      },
    ],
  };

  return (
    <div style={{ margin: 20 }}>
      <ReactEcharts option={mapOption} style={{ height: 400 }} />
      <Table
        bordered
        style={{
          color: "#fff",
          fontSize: 30,
          fontWeight: "800",
          marginTop: 40,
        }}
        columns={[
          {
            title: tableHeader("AVERAGE MS"),
            dataIndex: "ams",
            align: "center",
            render: (_, record) => {
              return <div style={{ margin: 10 }}>{record.ams}</div>;
            },
          },
          {
            title: tableHeader("MEDIAN MS"),
            dataIndex: "mms",
            align: "center",
          },
          {
            title: tableHeader("AVERAGE RANK"),
            dataIndex: "ar",
            align: "center",
          },
          {
            title: tableHeader("POPULATION"),
            dataIndex: "population",
            align: "center",
          },
        ]}
        dataSource={[
          {
            ams: 108,
            mms: 97,
            ar: 47,
            population: "7,791,940,162",
          },
        ]}
        pagination={false}
      />
    </div>
  );
};

const RankList = () => {
  return (
    <Layout>
      <Header>
        <Space vertical align={"center"} style={{ width: "100%" }}>
          <Typography.Title>Global Passport Power Rank 2022</Typography.Title>
          <Typography.Text type="tertiary">
            Passports of the world ranked by their total mobility score.
          </Typography.Text>
        </Space>
      </Header>
      <Content>
        <Table
          columns={[
            {
              title: "Rank",
              dataIndex: "rank",
              width: 100,
              align: "center",
            },
            {
              title: "Country",
              dataIndex: "name",
              width: 300,
              render: (_, record) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: 10,
                    }}
                  >
                    <Image
                      src={`/next-image/passport/${record.iso?.toLowerCase()}.png`}
                      alt={`PASSPORT OF ${record.name}`}
                      preview={false}
                      height={80}
                    />
                    <Typography.Text
                      style={{
                        marginLeft: 10,
                      }}
                    >
                      {record.name}
                    </Typography.Text>
                  </div>
                );
              },
            },
            {
              title: "MS",
              dataIndex: "ms",
              align: "center",
              width: 100,
            },
            {
              title: (
                <Select
                  placeholder="Filter results..."
                  style={{ width: "100%" }}
                />
              ),
              render: (_, record) => {
                const total = record.vf + record.va + record.vr;
                return (
                  <Popover
                    showArrow
                    content={
                      <div style={{ color: "#fff", display: "flex" }}>
                        <div style={{ color: "#aaa" }}>
                          VISA—FREE:{"\u00A0"}
                        </div>
                        {record.vf};{"\u00A0"}
                        <div style={{ color: "#aaa" }}>
                          Visa ON ARRIVAL:{"\u00A0"}
                        </div>
                        {record.va};{"\u00A0"}
                        <div style={{ color: "#aaa" }}>
                          VISA REQUIRED:{"\u00A0"}
                        </div>
                        {record.vr}
                      </div>
                    }
                    position="top"
                  >
                    <div
                      style={{
                        display: "flex",
                        color: "#fff",
                        width: "100%",
                        padding: 10,
                        fontSize: 16,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#cc9966",
                          width: `${(record.vf / total) * 100}%`,
                        }}
                      >
                        {record.vf}
                      </div>
                      <div
                        style={{
                          backgroundColor: "#8e6f51",
                          width: `${(record.va / total) * 100}%`,
                        }}
                      >
                        {record.va}
                      </div>
                      <div
                        style={{
                          backgroundColor: "#660000",
                          width: `${(record.vr / total) * 100}%`,
                        }}
                      >
                        {record.vr}
                      </div>
                    </div>
                  </Popover>
                );
              },
            },
          ]}
          dataSource={rankData}
          pagination={false}
        />
      </Content>
    </Layout>
  );
};

const Rank = () => {
  return (
    <Layout>
      <Header>
        <NavApp />
      </Header>
      <Layout>
        <Sider style={{ width: "45%", height: "100vh" }}>
          <ECharts />
        </Sider>
        <Content>
          <RankList />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Rank;
