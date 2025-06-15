import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { App } from "../App";
import {
  HomePage,
  ServiceDetailPage,
  NRIPage,
  NotFoundPage,
} from "../containers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="our-services-kolkata">
        <Route path=":title" element={<ServiceDetailPage />} />
      </Route>
      <Route path="nri-legal-services" element={<NRIPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
