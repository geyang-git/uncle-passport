import {Nav} from '@douyinfe/semi-ui';
import {SelectedData} from "@douyinfe/semi-ui/lib/es/navigation/Item";
import Router from "next/router"

export const NavApp = () => {
  return (
    <div style={{ width: "100%" }}>
      <Nav
        mode={"horizontal"}
        items={[
          {
            itemKey: "explore",
            text: "EXPLORE",
            onClick: (clickItems: SelectedData) => {
              Router.push("/home/explore").then();
            },
          },
          {
            itemKey: "rank",
            text: "RANK",
            onClick: (clickItems: SelectedData) => {
              Router.push("/home/rank").then();
            },
          },
          {
            itemKey: "compare",
            text: "COMPARE",
            items: [
              {
                itemKey: "compare-passport",
                text: "PASSPORT",
                onClick: (clickItems: SelectedData) => {
                  Router.push("/compare/passport").then();
                },
              },
              {
                itemKey: "compare-destination",
                text: "DESTINATION",
                onClick: (clickItems: SelectedData) => {
                  Router.push("/compare/destination").then();
                },
              },
            ],
          },
        ]}
        onSelect={(key) => console.log(key)}
        header={{
          logo: (
            <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />
          ),
          text: "Uncle Passport",
        }}
        // footer={
        //   <Dropdown
        //     position="bottomRight"
        //     render={
        //       <Dropdown.Menu>
        //         <Dropdown.Item>详情</Dropdown.Item>
        //         <Dropdown.Item>退出</Dropdown.Item>
        //       </Dropdown.Menu>
        //     }
        //   >
        //     <Avatar size="small" color='light-blue' style={{margin: 4}}>BD</Avatar>
        //     <span>Bytedancer</span>
        //   </Dropdown>
        // }
      />
    </div>
  );
}
