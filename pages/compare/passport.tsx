import React, {useEffect, useState} from 'react';
import {Image, Layout, Space, Table} from '@douyinfe/semi-ui';
import {NextPage} from "next";
import ResizeObserver from 'rc-resize-observer'
import axios from "axios";
import {Title} from "../../components/passport/Title";
import {IconCheckboxTick} from "@douyinfe/semi-icons";
import {Cell} from "../../components/passport/Cell";
import {CountryTitle} from "../../components/passport/Country-title";

const Column = Table.Column;
const {Content} = Layout;

const Passport: NextPage = () => {
  const [search, setSearch] = useState([""]);
  const [tempSearch, setTempSearch] = useState<string[]>([]);

  // 国家列表
  const [region, setRegion] = useState<{ iso: string, name: string }[]>([]);
  useEffect(() => {
    axios.get("/api/passport/all").then(res => {
      setRegion(res.data.data);
    })
  }, [])

  const [dataSource, setData] = useState<any>([]);

  const [dataList, setDataList] = useState<{
    name: '',
    data: [],
  }[]>([]);

  const getData = () => {
    const data = [];
    for (let i = 0; i < region.length; i++) {
      const item = {
        key: i,
        region: region[i],
      };
      dataList.forEach((item2: any, index: number) => {
          // @ts-ignore
          item[`item${index}`] = item2.data.find((item3: any) => {
            if (item3.Destination) {
              return item3.Destination.iso === region[i].iso;
            } else {
              return false;
            }
          })?.Requirement;
        }
      );
      data.push(item);
    }
    return data;
  };

  const refresh = () => {
    const data = getData();
    setData(data);
  }

  useEffect(() => {
    refresh()
  }, [region, dataList]);

  // 根据屏幕宽度计算表格宽度
  const [tableWidth, setTableWidth] = useState(0);
  const [cellWidth, setCellWidth] = useState(200);
  const [cellLength, setCellLength] = useState(4);
  useEffect(() => {
    // 获取浏览器上的精确的性能计时
    const perf = window.performance;
    // 获取当前时间
    perf.mark('start');
    // 如果cell宽度不处于 250-350 之间，那么cell的数量根据屏幕宽度计算 保证每个cell宽度在 250-350 之间
    const width = tableWidth / cellLength;
    let length = cellLength;
    if (width < 250) {
      length = Math.floor(tableWidth / 250);
    } else if (width > 350) {
      length = Math.floor(tableWidth / 350);
    }
    if (length < 2) {
      length = 2;
    }
    setCellLength(length);
    setCellWidth(tableWidth / (length + 1));
    // 根据cell的数量生成datalist个数，且不覆盖已有的数据
    const list = []
    for (let i = 0; i < length; i++) {
      if (dataList[i]) {
        list[i] = dataList[i];
      } else {
        list[i] = {
          name: 'Select Passport',
          data: [],
        }
      }
    }
    setDataList(list);
    // 结束性能计时
    perf.mark('end');
    // 计算性能计时
    perf.measure('measure', 'start', 'end');
    // 获取性能计时
    const measure = perf.getEntriesByName('measure');
    // 打印性能计时
    console.log(measure);
  }, [tableWidth]);

  const scroll = {y: 700};

  return (
    // 监听屏幕宽度变化 resize
    <Layout>
      <Layout>
        <Content>
          <ResizeObserver onResize={(res) => {
            setTableWidth(res.width);
          }}>
            <Table
              dataSource={dataSource.filter((item: any) => {
                return search.some((item2: string) => {
                  return item.region.name.toLowerCase().includes(item2.toLowerCase());
                })
              })}
              scroll={scroll}
              pagination={false}
              bordered>
              {/*第一列*/}
              <Column
                align="left"
                title={<CountryTitle
                  setTempSearch={setTempSearch}
                  search={search}
                  setSearch={setSearch}
                  tempSearch={tempSearch}
                />}
                onCell={(record, index) => {
                  return {
                    onClick: event => {
                      // 把数据放入tempSearch
                      // 如果点击的是已经选中的国家，那么取消选中
                      if (tempSearch.includes(record.region.name)) {
                        setTempSearch(tempSearch.filter((item: string) => {
                          return item !== record.region.name;
                        }))
                      } else {
                        setTempSearch([...tempSearch, record.region.name]);
                      }
                      console.log(tempSearch);
                    },
                  };
                }}
                dataIndex="region"
                width={cellWidth}
                render={(record, index: number) => {
                  return <Item record={record} tempSearch={tempSearch}/>
                }}
              />
              {/*其他列*/}
              {
                dataList.map((item, index) => {
                    return (
                      <Column
                        align="center"
                        fixed
                        key={index}
                        dataIndex={"item" + index}
                        width={cellWidth}
                        title={<Title region={region} item={item} refresh={refresh}/>}
                        render={(record, index: number) => <Cell record={record}/>}
                        useFullRender
                      />
                    );
                  }
                )
              }
            </Table>
          </ResizeObserver>
        </Content>
      </Layout>
    </Layout>
  );
};

const Item = (props: { record: any, tempSearch: string[] }) => {
  const record = props.record
  const selected = props.tempSearch.includes(record.name);
  return <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 16
    }}>
    <Space>
      <Image src={`/country/${record.iso?.toLowerCase()}.svg`} width={16}/>
      <div>{record.name}</div>
    </Space>
    {selected && <IconCheckboxTick/>}
  </div>
}

export default Passport;
