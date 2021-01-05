import React from 'react';
import WelcomeView from './components/contents/section-1/WelcomeView'
import SectionChecklist from './components/contents/sectionChecklist/SectionChecklist'
import SectionTecPomodoro from './components/contents/sectionTecPomodoro/SectionTecPomodoro';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";


export default class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="layout">
          <Header />
          <main className="container-fluid py-5">
            <Switch>
              <Route
                exact
                path="/inicio-sesion"
                render={(props) => <IniSecion {...props} />}
              />
              <Route exact path="/registro-usuario" component={Registros} />

              <Route path="/Checklist" exact>
                <SectionChecklist />
              </Route>

              <Route path="/TecnicaPomodoro" exact>
                <SectionTecPomodoro />
              </Route>
            </Switch>
          </main>
        </div>

      </BrowserRouter>
    );
  }
}
