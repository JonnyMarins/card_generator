import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchBar />
      </main>
      <Outlet />
    </div>
  );
};

export default Dashboard;
