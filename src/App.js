import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const Layout = lazy(() => import("./pages/Layout"));
const Bank = lazy(() => import("./pages/Bank"));
const Swap = lazy(() => import("./pages/Swap"));
const Garage = lazy(() => import("./pages/Garage"));
const Dealership = lazy(() => import("./pages/Dealership"));
const Speedshop = lazy(() => import("./pages/Speedshop"));
const CollectionDetailsView = lazy(() =>
  import("./pages/CollectionDetailsView")
);
const SellerProfile = lazy(() => import("./pages/SellerProfile"));
const CreateCollectionDetails = lazy(() =>
  import("./pages/CreateCollectionDetails")
);
const ItemDetails = lazy(() => import("./pages/ItemDetails"));

const Loader = ({ component }) => {
  const Component = component;
  return (
    <Suspense fallback={<></>}>
      <Component />
    </Suspense>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<Loader component={Layout} />}>
        <Route path="dealership" element={<Loader component={Dealership} />} />
        <Route path="garage" element={<Loader component={Garage} />} />
        <Route path="bank" element={<Loader component={Bank} />} />
        <Route path="speedshop" element={<Loader component={Speedshop} />} />
        <Route
          path="marketplace"
          element={<Loader component={CollectionDetailsView} />}
        />
        <Route
          path="itemdetails"
          element={<Loader component={ItemDetails} />}
        />
        <Route
          path="sellerprofile"
          element={<Loader component={SellerProfile} />}
        />
        <Route
          path="collectiondetails"
          element={<Loader component={CreateCollectionDetails} />}
        />
        <Route path="trade">
          <Route index element={<Navigate to="swap" replace />} />
          <Route path="swap" element={<Loader component={Swap} />} />
          <Route path="farms" element={<></>} />
          <Route path="pools" element={<></>} />
        </Route>
        <Route path="*" element={<Navigate to={"dealership"} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
