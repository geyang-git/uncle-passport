import { Button, Image, ImagePreview, Popover, Table } from "@douyinfe/semi-ui";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";

const tableHeader = (title: string) => {
  return <div style={{ color: "#c96", fontSize: 16 }}>{title}</div>;
};

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
    <ImagePreview
      lazyLoad={false}
      style={{
        margin: 20,
      }}
      renderHeader={(title) => (
        <div
          style={{
            width: "100vw",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "40px",
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
          <Table
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "800",
              marginBottom: 40,
              border: "none",
            }}
            columns={[
              {
                title: tableHeader("MOBILITY SCORE"),
                dataIndex: "ms",
                align: "center",
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
        );
      }}
    >
      {passport?.map((src, index) => {
        return (
          <Popover
            key={index}
            showArrow
            position="top"
            content={<article>PASSPORT OF {src.name.toUpperCase()}</article>}
          >
            <Image
              src={`/passport/${src.iso?.toLowerCase()}.png`}
              alt={`PASSPORT OF ${src.name}`}
              preview={{
                previewTitle: src.name,
                src: `/img/${src.iso?.toLowerCase()}.png`,
              }}
              style={{ margin: 5 }}
            />
          </Popover>
        );
      })}
    </ImagePreview>
  );
};

export default Overview;
