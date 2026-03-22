import { createHashRouter } from "react-router";

import Layout from "@/react-app/layout";
import HomePage from "@/react-app/pages/Home";
import ProductionsPage from "@/react-app/pages/Productions";
import ProductionDetailPage from "@/react-app/pages/ProductionDetail";
import AchievementsPage from "@/react-app/pages/Achievements";
import SchedulePage from "@/react-app/pages/Schedule";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "productions", Component: ProductionsPage },
      { path: "productions/:id", Component: ProductionDetailPage },
      { path: "achievements", Component: AchievementsPage },
      { path: "schedule", Component: SchedulePage },
    ],
  },
]);
