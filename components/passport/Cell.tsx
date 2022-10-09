export enum Color {
  Green = '#2c883b',
  Blue = '#3266b1',
  Orange = "#db9601",
  Red = "#a32121",
  Gray = "#d9d9d9",

  // 对以上颜色进行灰度叠底
  GreenGray = '#184d20',
  BlueGray = '#1a2f5a',
  OrangeGray = "#6d4c00",
  RedGray = "#511010",
  GrayGray = "#808080",
}

export const Cell = (props: {
  record: {
    color: string,
    Requirement: string,
  }
}) => {
  return props.record?.Requirement !== "-1" ?
    <div style={{
      padding: 16,
      color: "white",
      // @ts-ignore
      backgroundColor: Color[props.record?.color],
    }}
    >
      {props.record?.Requirement}
    </div> : null
}
