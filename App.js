import React, {Component} from 'react';
import Header from './Page/Header';
import MenuUtama from './Page/MenuUtama';
import MenuMakanan from './Page/MenuMakanan';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuKontak from './Page/MenuKontak';



class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <MenuUtama />
        <MenuMakanan />
        
        <MenuTentangKami />
        <MenuKontak />
      
      
      </div>
    )
  }
}

export default App;
