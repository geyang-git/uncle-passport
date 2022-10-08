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

export enum Type {
  'e-visa' = Color.Green,
  'visa required' = Color.Blue,
  'visa on arrival' = Color.Orange,
  'covid ban' = Color.Red,
  '21' = Color.Green,
  '90' = Color.Green,
  '30' = Color.Green,
  '-1' = Color.Red,
  '180' = Color.Green,
  '28' = Color.Green,
  '360' = Color.Green,
  '14' = Color.Green,
  '60' = Color.Green,
  'visa free' = Color.Green,
  '42' = Color.Green,
  '15' = Color.Green,
  '240' = Color.Green,
  '120' = Color.Green,
  'no admission' = Color.Red,
  '7' = Color.Green,
  '45' = Color.Green,
  '31' = Color.Green,
}

export const Cell = (props: { record: any }) => {
  return props.record !== "-1" ?
    <div style={{
      backgroundColor: Type[props.record],
      padding: 16,
      color: "white",
    }}
    >
      {props.record}
    </div> : null
}
