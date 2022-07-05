import SideBarItems from "./SideBarItems"
import items from "../../SideNavData/SideNavData.json"


export default function SideBar(){
    return (
        <div className="sidebar">
          <div className="system-logo-title">
            <h3>PAYROLL SYSTEM</h3>
          </div>
          { items.map((item, index) => <SideBarItems key={index} item={item} />) }
        </div>
    )
}