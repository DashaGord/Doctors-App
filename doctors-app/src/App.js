import './App.css';

import PageOne from "./components/PageOne/PageOne";
import PageTwo from "./components/PageTwo/PageTwo";
import Nav from "./components/Nav/Nav";
import DataService from "./Server/DataService";
import {parse} from 'date-format-parse';

import {BrowserRouter as Router, Route, Routes}
    from 'react-router-dom';
import {useEffect, useState} from "react";

const locale = 'ru-RU';
const dataService = new DataService();

const App = () => {
    const [data, setData] = useState([]);
    const [recordDatesMap, setRecordDatesMap] = useState(new Map());



    function fetchAvailableData() {
        dataService.getData().then(res => {
            let appModels = res.appModels;
            setData(appModels);

            const dates = appModels.map(appModel => parse(`${appModel.data} ${appModel.time}`, 'DD.MM.YY HH:mm'));

            // Формат текущего месяца
            // (
            // 'day1' => 2,
            // 'day2' => 1
            // )
            const recordDatesMap = new Map();

            dates.forEach(d => {

                const formattedDate = d.toLocaleDateString(locale, {
                    day: 'numeric', month: 'long', year: 'numeric'
                });

                if (recordDatesMap.has(formattedDate)) {
                    recordDatesMap.set(formattedDate, recordDatesMap.get(formattedDate) + 1);
                } else {
                    recordDatesMap.set(formattedDate, 1);
                }

            })

            setRecordDatesMap(recordDatesMap);
        })
    }

    useEffect(() => {
        fetchAvailableData();
    }, []);

    return (
        <div className="App">
            <Router>
                <Nav/>
                <Routes>
                    <Route path='/' element={<PageOne data={data}/>}/>
                    <Route path='/pageOne' element={<PageOne data={data}/>}/>
                    <Route path='/pageTwo' element={<PageTwo data={data} recordDatesMap={recordDatesMap} />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
