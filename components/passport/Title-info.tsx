import React from "react";
import {Image, Space} from "@douyinfe/semi-ui";

export const Info = (props: {
  region: { iso: string, name: string }[]
  current: string
  item: { data: [], name: string, group: Record<string, any[]> }
}) => {
  if (props.current === "") {
    return <Space style={{height: 140}} vertical>
      <div>Passport Info</div>
      <div>Country: {props.region.length}
      </div>
    </Space>
  } else {
    // 过滤掉key为-1的数据
    const group = Object.keys(props.item.group).filter((item) => item !== "-1").map((item) => {
      return {
        key: item,
        value: props.item.group[item].length,
      }
    })
    // 筛选前四个value最大的数据
    group.sort((a, b) => b.value - a.value);
    const group2 = group.slice(0, 4);
    return <Space style={{height: 140}}>
      <Image
        src={`/passport/${props.current?.toLowerCase()}.png`}
      />
      <Space vertical align={"start"}>
        {
          group2.map((item) => {
            return <div key={item.key}>{item.key}
              : {item.value}</div>
          })
        }
      </Space>
    </Space>
  }
}
