import React from 'react';
import './App.css';
import Counter from "./components/counter/Counter"

function App() {
    return (
        <div>
            <Counter></Counter>
        </div>
    )
}

/*
class LearningComponents extends Component {
    render() {
        return (
            <div className="App">
                My Hello World
                <FirstComponent></FirstComponent>
                <SecondComponent></SecondComponent>
                <ThirdComponent/>
                <FourthComponent/>
            </div>
        )
    }
}
*/

/*class SecondComponent extends Component{
    render(){
        return(
            <div className="secondComponent">
                SecondComponent
            </div>
        );
    }
}
*/

// class ThirdComponent extends Component{
//     render(){
//         return(
//             <div className="thirdComponent">
//                 ThirdComponent
//             </div>
//         );
//     }
// }
/*
function ThirdComponent(){
 return (
     <div className="thirdComponent">
         Third Component
     </div>
 );
}*/

/*function FourthComponent() {
    return (
        <div className="fourthComponent">
            Fourth Component
        </div>
    )
}*/

export default App;
