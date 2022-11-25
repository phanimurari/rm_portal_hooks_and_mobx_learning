import Home from "./user/routes/Home";
import stores  from "./stores";
import { Provider } from "mobx-react";


const App = () =>(
   <Provider  {...stores}>
        <Home />
    </Provider> 
)

export default App;
