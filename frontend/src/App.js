import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import CapsuleIndex from './capsules/CapsuleeIndex'
import CapsuleDetails from './capsules/CapsuleDetails'
import Navigation from './Navigation'
import Error404 from './Error404'
import NewCapsule from './capsules/NewCapsule'
// import EditPlaceForm from './places/EditPlaceForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/capsules" component={CapsuleIndex} />
          <Route exact path="/capsules/new" component={NewCapsule} />
          <Route exact path="/capsules/:capsuleId" component={CapsuleDetails} />
          <Route exact path="/capsules/:capsuleId/edit" component={EditPlaceForm} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
