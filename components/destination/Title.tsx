import {Select, Space} from "@douyinfe/semi-ui";
import axios from "axios";
import React from "react";
import {Info} from "./Title-info";

export const Title = (props: {
  region: { iso: string, name: string }[]
  item: { data: [], name: string, group: any }
  refresh: () => void
}) => {
  const [current, setCurrent] = React.useState("");
  return <Space
    vertical
    style={{
      width: "100%"
    }}>
    <Info item={props.item} current={current} region={props.region}></Info>
    <Select
      placeholder='Select Country'
      optionList={props.region.map(
        (item) => {
          return {
            label: item.name,
            value: item.iso,
          }
        }
      )}
      style={{
        width: "100%",
      }}
      virtualize={{
        height: 300,
        itemSize: 36,
      }}
      position="bottom"
      filter
      onChange={(value) => {
        axios.get("/api/passport?passport=" + value).then(res => {
          setCurrent(value as string);
          props.item.data = res.data.data.list;
          props.item.group = res.data.data.result;
          props.refresh();
        })
      }}
    />
  </Space>
}
