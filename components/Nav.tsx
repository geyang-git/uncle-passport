import {Nav, Toast} from '@douyinfe/semi-ui';
import {SelectedData} from "@douyinfe/semi-ui/lib/es/navigation/Item";
import Router from "next/router"
import Image from "next/image";
import Logo from "../public/logo.png"

export const NavApp = () => {
  return (
    <div style={{width: "100%"}}>
      <Nav
        mode={"horizontal"}
        items={[
          {
            itemKey: "explore",
            text: "EXPLORE",
            onClick: (clickItems: SelectedData) => {
              Router.push("/utils/explore").then();
            },
          },
          {
            itemKey: "rank",
            text: "RANK",
            onClick: (clickItems: SelectedData) => {
              Router.push("/utils/rank").then();
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
                  Router.push("/utils/compare/passport").then();
                },
              },
              {
                itemKey: "compare-destination",
                text: "DESTINATION",
                onClick: (clickItems: SelectedData) => {
                  Router.push("/utils/compare/destination").then();
                },
              },
            ],
          },
        ]}
        onSelect={(key) => console.log(key)}
        header={{
          logo: <Image src={Logo} width={40} height={40}/>,
          text: 'Uncle Passport'
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
