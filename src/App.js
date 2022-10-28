import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/Page404";
import { IntlProvider } from "react-intl";
import { getDirection } from "./helpers/Utils";
import { Suspense, useEffect } from "react";
import { NotificationContainer } from "./components/common/react-notifications";
import AppLocale from "./lang";
function App({ locale }) {
  const direction = getDirection();
  const currentAppLocale = AppLocale["en"];
  useEffect(() => {
    if (direction.isRtl) {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }, [direction]);
  return (
    <div className="h-100">
      {/* <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      > */}
      <>
        {/* <NotificationContainer /> */}

        <Suspense fallback={<div className="loading" />}>
          <Routes>
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </>
      {/* </IntlProvider> */}
    </div>
  );
}

export default App;
