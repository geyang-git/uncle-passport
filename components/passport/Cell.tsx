export enum Color {
  Green = '#2c883b',
  Blue = '#3266b1',
  Orange = "#db9601",
  Red = "#a32121",

  // 对以上颜色进行灰度叠底
  GreenGray = '#184d20',
  BlueGray = '#1a2f5a',
  OrangeGray = "#6d4c00",
  RedGray = "#511010",
}

export const Cell = (props: { record: any }) => {
  return props.record !== "-1" ?
    <div style={{
      padding: 16,
      color: "white",
    }}
    >
      {props.record}
    </div> : null
}
