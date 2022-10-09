import React from "react";
import {Image, Space} from "@douyinfe/semi-ui";
import {Color} from "../passport/Cell";

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
    return <Space style={{height: 80}} vertical>
      <div>Countries are welcomed</div>
    </Space>
  } else {
    return <Space style={{height: 80}}>
      <Image
        src={`/country/${props.current?.toLowerCase()}.svg`}
        preview={
          {
            src: `/country/${props.current?.toLowerCase()}.svg`,
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
