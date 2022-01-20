import { Component } from 'react/cjs/react.production.min';
import 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './App.css';
import ProfilePhoto from './components/Profile/ProfilePhoto'
import FullName from './components/Profile/FullName'
import Adresse from './components/Profile/Adresse'


class App extends Component{
  render(){
      return(
        <div className='container'>
          <div className='row person_profile'>
            <div className=' col-sm-12 col-md-2 photo_profile'>
            <ProfilePhoto/>
            </div>
          <div className='col-sm-12 col-md-10 info_profile'>
            <FullName />
            <Adresse />
          </div>
          </div>
        </div>
      );
  }
}

export default App;
