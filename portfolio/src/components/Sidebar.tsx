import React from 'react';
import { SidebarItems } from './SidebarItems';
import SidebarIcon from './SidebarIcon';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarIcon />
      <ul className='sidebar-list'>
        <li className="first-row">
          <code id="title">{"Portfolio"}</code>
        </li>
        {SidebarItems.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}>
              <div id="title">
                <code>{`|> ${value.title}(`}</code>
                <span id="icon">{value.icon}</span>
                <code>{")"}</code>
              </div>
              {/* <div id="title">
                <code>{`.${value.title}(`}</code>
                <span id="icon">{value.icon}</span>
                <code>{")"}</code>
              </div> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
