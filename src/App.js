import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import Strains from "./Strains";
import Home from "./Home";

import {
  styleReset,
  List,
  AppBar,
  ListItem,
  Toolbar,
  Divider,
  Button,
  TextField,
} from "react95";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

function App() {
  const [open, setOpen] = React.useState(false);

  const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Router>
          <AppBar theme={original}>
            <Toolbar style={{ justifyContent: "space-between" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <Button
                  onClick={() => setOpen(!open)}
                  active={open}
                  style={{ fontWeight: "bold" }}
                >
                  {/* <img
                  src="🌿"
                  alt="react95 logo"
                  style={{ height: "20px", marginRight: 4 }}
                /> */}
                  Start
                </Button>
                {open && (
                  <List
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "100%",
                    }}
                    onClick={() => setOpen(false)}
                  >
                      <Divider />
                      <Link to="/" exact>
                        <ListItem>
                          <span role="img" aria-label="🏡">
                          🏡 Home
                          </span>
                        </ListItem>
                      </Link>
                      <Divider />
                      <Link to="/strains">
                        <ListItem>
                            <span role="img" aria-label="🌿">
                              🌿
                            </span>
                            Strains
                        </ListItem>

                      </Link>
                  </List>
                )}
              </div>
            </Toolbar>
          </AppBar>
        </Router>
      </ThemeProvider> 
      <div className="content">
        <br>
        </br>
      <h1> BRIX 95</h1>
        <Switch>
          <Route component={Home} path="/"  render={(props) => (<Home/>)} exact/>
          <Route component={Strains} path="/strains"/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
