import React, { useState } from "react";
import UserFavs from "./UserFavs";
import UserOrders from "./UserOrders";
import UserAccount from "./UserAccount";

export default function UserPanel() {
  const [activeTab, setActiveTab] = useState("account");

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  return (
    <div className="user-panel">
      <ul className="user-menu">
        <li className={activeTab === "account" ? "user-active" : ""} onClick={() => handleTabClick("account")}>MI CUENTA</li>
        <li className={activeTab === "favorites" ? "user-active" : ""} onClick={() => handleTabClick("favorites")}>MIS FAVORITOS</li>
        <li className={activeTab === "orders" ? "user-active" : ""} onClick={() => handleTabClick("orders")}>MIS PEDIDOS</li>
      </ul>


        {activeTab === "account" && <UserAccount />}
        {activeTab === "favorites" && <UserFavs />}
        {activeTab === "orders" && <UserOrders />}

    </div>
  );
}
