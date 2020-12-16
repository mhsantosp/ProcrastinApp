
import WelcomeView from './components/contents/section-1/WelcomeView'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SectionChecklist from './components/contents/sectionChecklist/SectionChecklist'



export default function App() {
  return (<Router>
    <div className="App">
      <Switch>
        
        <Route path="/Checklist" exact>
          <SectionChecklist/>
        </Route>

        <Route path="/" exact>
          <WelcomeView/>
        </Route>

      </Switch>
      
    </div>

    </Router>
  );
}

