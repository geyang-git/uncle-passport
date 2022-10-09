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
    return <Space style={{height: 140}} vertical>
      <div>Passport Info</div>
      <div>Country: {props.region.length}
      </div>
    </Space>
  } else {
    return <Space style={{height: 140}}>
      <Image
        src={`/passport/${props.current?.toLowerCase()}.png`}
        preview={
          {
            src: `/img/${props.current?.toLowerCase()}.png`,
          }
        }
      />
      <Space vertical align={"start"}>
        {
          Object.keys(props.item.group.colorGroup)
            .map((item) => {
                return <Space key={item}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
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
