import React from "react";

import Booklist from "./Components/booklist";
import ShirtsList from "./Components/shirtslist";
import SearchForm from "./Components/searchForm";


const App = () => {
  return (
    <div style={{display : 'flex', flexDirection: 'column', gap :'100px'}}>
      {/* <Search /> */}
      <SearchForm />
      <Booklist />
      <ShirtsList />
    </div>
  )
}

export default App
