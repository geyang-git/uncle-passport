import {
  Button,
  Image,
  ImagePreview,
  Layout,
  Popover,
  Space,
  Table,
  Typography,
} from "@douyinfe/semi-ui";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { NavApp } from "../../components/Nav";
const tableHeader = (title: string) => {
  return <div style={{ color: "#c96", fontSize: 16 }}>{title}</div>;
};

const { Content, Header } = Layout;

const Overview: FC = () => {
  const [passport, setPassport] =
    useState<
      { iso: string; name: string; ms: number; rank: number; irank: number }[]
    >();

  useEffect(() => {
    axios.get("/api/passport/all").then((res) => {
      setPassport(res.data.data);
    });
  }, []);

  return (
    <Layout>
      <Header>
        <NavApp />
        <Space
          vertical
          align={"center"}
          style={{ width: "100%", padding: "20px 0" }}
        >
          <Typography.Title>Explore the world of passports</Typography.Title>
          <Typography.Text type="tertiary">
            Find your Passport. Explore them all.
          </Typography.Text>
        </Space>
      </Header>
      <Content>
        <ImagePreview
          lazyLoad={false}
          style={{
            margin: 20,
          }}
          renderHeader={(title) => (
            <div
              style={{
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                position: "fixed",
                top: "15%",
              }}
            >
              <div
                style={{
                  marginTop: "10px",
                  color: "#cc9966",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                PASSPORT OF
              </div>
              <div
                style={{
                  margin: "10px",
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "500",
                }}
              >
                {title}
              </div>
            </div>
          )}
          renderPreviewMenu={(props) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10%",
                }}
              >
                <Table
                  style={{
                    color: "#fff",
                    fontSize: 30,
                    fontWeight: "800",
                  }}
                  columns={[
                    {
                      title: tableHeader("MOBILITY SCORE"),
                      dataIndex: "ms",
                      align: "center",
                      render: (_, record) => {
                        return <div style={{ margin: 10 }}>{record.ms}</div>;
                      },
                    },
                    {
                      title: tableHeader("GLOBAL RANK"),
                      dataIndex: "rank",
                      align: "center",
                    },
                    {
                      title: tableHeader("INDIVIDUAL RANK"),
                      dataIndex: "irank",
                      align: "center",
                    },
                  ]}
                  dataSource={[
                    {
                      ms: passport![props.curPage! - 1].ms,
                      rank: passport![props.curPage! - 1].rank,
                      irank: passport![props.curPage! - 1].irank,
                    },
                  ]}
                  pagination={false}
                />
                <Button
                  style={{
                    color: "#c96",
                    width: "30%",
                  }}
                >
                  DASHBOARD
                </Button>
              </div>
            );
          }}
        >
          {passport?.map((src, index) => {
            return (
              <Popover
                key={index}
                showArrow
                position="top"
                content={
                  <div style={{ color: "#fff" }}>
                    PASSPORT OF {src.name.toUpperCase()}
                  </div>
                }
              >
                <Image
                  src={`/next-image/passport/${src.iso?.toLowerCase()}.png`}
                  alt={`PASSPORT OF ${src.name}`}
                  preview={{
                    previewTitle: src.name,
                    src: `/next-image/passport-height/${src.iso?.toLowerCase()}.png`,
                  }}
                  style={{ margin: 5 }}
                />
              </Popover>
            );
          })}
        </ImagePreview>
      </Content>
    </Layout>
  );
};

export default Overview;
