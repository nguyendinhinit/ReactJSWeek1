import ReactDOM from "react-dom";
import App from './App';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./theme";

ReactDOM.render(
        <App/>,
        document.getElementById("header")
)