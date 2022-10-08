import {Button, Input, Space} from "@douyinfe/semi-ui";
import React, {useState} from "react";
import {Color} from "./Cell";

export const CountryTitle = (props: {
  setSearch: (value: string[]) => void
  setTempSearch: (value: string[]) => void
  tempSearch: string[]
  search: string[]
}) => {
  const {
    setSearch,
    setTempSearch,
    tempSearch,
    search,
  } = props;

  const [switchList, setSwitchList] = useState([true, true, true, true]);
  const openList = [Color.Green, Color.Blue, Color.Orange, Color.Red];
  const closeList = [Color.GreenGray, Color.BlueGray, Color.OrangeGray, Color.RedGray];
  return <Space
    vertical
    style={{
      width: "100%"
    }}>
    <Space style={{height: 140}} align={"end"}>
      <Space>
        {/*  四个圆形按钮*/}
        {switchList.map((item, index) => {
            return <div
              key={index}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: item ? openList[index] : closeList[index],
              }}
              onClick={() => {
                const list = [...switchList];
                list[index] = !list[index];
                setSwitchList(list);
              }}
            />
          }
        )}
      </Space>
    </Space>
    <Input
      onChange={(value) => {
        setSearch([value]);
      }}
      suffix={tempSearch.length > 0 && search.length === 1 ? <Button
        onClick={() => {
          // 将搜索框的值赋值给搜索列表
          setSearch(tempSearch);
        }}
      >
        Search
      </Button> : search.length > 1 ? <Button
        onClick={() => {
          // 清空搜索列表
          setSearch([""]);
          setTempSearch([]);
        }}
      >
        Clear
      </Button> : null}
    />
  </Space>
}
