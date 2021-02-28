import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Step1 } from "./pages/Step1";
import { Step2 } from "./pages/Step2";
import { Step3 } from "./pages/Step3";
import { Result } from "./pages/Result";
import { Page } from "./components/Page";
import { AppDrawerStyled } from "./components/AppDrawer";
import { NotFound } from "./pages/NotFound";
import { AppFooter } from './components/AppFooter'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { useState } from 'react';

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#43a047',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#448aff',
      },
    }
  });
  const [currentTheme, setCurrentTheme] = useState(theme)
  const content = <Switch>
    <Route exact path="/">
      <Page Component={Step1} title="Bước 1"></Page>
    </Route>
    <Route path="/step2">
      <Page Component={Step2} title="Bước 2"></Page>
    </Route>
    <Route path="/step3">
      <Page Component={Step3} title="Bước 3"></Page>
    </Route>
    <Route path="/result">
      <Page Component={Result} title="Kết quả"></Page>
    </Route>
    <Route path="*">
      <Page Component={NotFound} title="Trang không tìm thấy"></Page>
    </Route>
  </Switch>
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <MuiThemeProvider theme={currentTheme}>
          <AppDrawerStyled mainContent={content} footer={<AppFooter></AppFooter>}>
          </AppDrawerStyled>
        </MuiThemeProvider>
      </div>
    </Router>
  );
};
export default App;
