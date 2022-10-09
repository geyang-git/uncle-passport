import React from "react";
import {Image, Space} from "@douyinfe/semi-ui";
import {Color} from "./Cell";

export const Info = (props: {
  region: { iso: string, name: string }[]
  current: string
  item: {
    data: [], name: string, group: {
      colorGroup: {
        [key: string]: number
      }
    }
  }
}) => {
  if (props.current === "") {
    return <div style={{height: 80, display: 'flex', alignItems: "center", justifyContent: 'center'}}>
      Countries are welcomed</div>
  } else {
    return <Space style={{height: 80}}>
      <Image
        src={`/next-image/passport/${props.current?.toLowerCase()}.png`}
        preview={
          {
            src: `/next-image/passport-height/${props.current?.toLowerCase()}.png`,
            // renderPreviewMenu: () => null,
          }
        }
        height={60}
      />
      <Space align={"start"}>
        {
          Object.keys(props.item.group.colorGroup)
            .map((item) => {
                return <Space key={item}>
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 8,
                      // @ts-ignore
                      backgroundColor: Color[item],
                    }}>{" "}</div>
                  <div>{props.item.group.colorGroup[item]}</div>
                </Space>
              }
            )
        }
      </Space>
    </Space>
  }
}
