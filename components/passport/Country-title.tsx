import {Button, Input, Space} from "@douyinfe/semi-ui";
import React, {useState} from "react";
import {Color} from "./Cell";

export const CountryTitle = (props: {
  setSearch: (value: string[]) => void
  setTempSearch: (value: string[]) => void
  tempSearch: string[]
  search: string[]
  switchList: boolean[]
  setSwitchList: (value: boolean[]) => void
  diffSwitch: boolean
  setDiffSwitch: (value: boolean) => void
}) => {
  const {
    setSearch,
    setTempSearch,
    tempSearch,
    search,
  } = props;

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
        {props.switchList.map((item, index) => {
            return <div
              key={index}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: item ? openList[index] : closeList[index],
              }}
              onClick={() => {
                const list = [...props.switchList];
                list[index] = !list[index];
                props.setSwitchList(list);
              }}
            />
          }
        )}
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: props.diffSwitch ? Color.Gray : Color.GrayGray,
          }}
          onClick={() => {
            props.setDiffSwitch(!props.diffSwitch);
          }}
        />
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
