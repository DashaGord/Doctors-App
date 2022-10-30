import './PageTwo.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles.css'
import {useEffect, useState} from "react";
import {format, parse} from 'date-format-parse';


const PageTwo = ({data, recordDatesMap}) => {
    const currentDate = new Date();
    let [value, setValue] = useState(currentDate);
    let [selected, setSelected]  = useState(false);


    const elements = data.filter(d => {
        if(selected) {
            return parse(d.data, 'DD.MM.YY').getTime() === value.getTime();
        } else {
            return true;
        }
    }).map(items => {
        return (
            <div className="d-record">
                <h1 className="p-20">{items.data} | {items.time} </h1>
                <div className="jk">{items.clinicName}, {items.address}</div>
                <div className="photo-doctor">
                    <img src={`icons/${items.doctorImg}`} alt="Doctor"/>
                </div>
                <div className="group">
                    <div className="name">{items.doctorName}</div>
                    <span className="job">{items.profile}</span>
                </div>
                <button className="button">Отменить</button>
            </div>
        )
    })

    function renderRecordsOnCalendar() {

        const nodes = document.querySelectorAll('.react-calendar__month-view__days abbr');
        for (let i = 0; i < nodes.length; i++) {
            const abbr = nodes[i];
            const ariaLabel = abbr.getAttribute('aria-label');

            if (recordDatesMap.has(ariaLabel)) {
                let records = recordDatesMap.get(ariaLabel);
                let div = document.createElement("div");
                div.append(records);
                div.classList.add("record-notice");

                let parentNode = abbr.parentNode;
                let recordNotice = parentNode.querySelector(".record-notice");
                if (recordNotice !== null) {
                    parentNode.removeChild(recordNotice);
                }
                abbr.parentNode.append(div);
            }
        }
    }

    useEffect(() => {
        renderRecordsOnCalendar();
    });

    return (
        <section className="main">
            <div className="container">
                <div className="hat">
                    <div className="p-1">Мой Профиль</div>
                    <div className="mask-group">
                        <img src="icons/mag-glass.png" className="mask-group-1 m-12"/>
                        <img src="icons/bell.png" className="mask-group-1 m-12"/>
                        <img src="icons/eye.png" className="mask-group-1 m-12"/>
                        <img src="icons/profile.png" className="mask-group-2 m-12"/>
                        <img src="icons/open.png" className="mask-group-1 p-2"/>
                    </div>
                </div>

                <a href="/pageOne" className="g1">
                    <div className="i-b"><img src="icons/arrow.png"/></div>
                    <div className="n1">Мои записи</div>
                </a>
                <a href=''>
                    {selected && <div  className="button-all" onClick={e => setSelected(false)}>Показать все записи</div>}
                </a>


                <div className="page-2">
                    {elements}
                </div>
                <div className="cal-1" id="cal-div">

                    <Calendar locale={"ru-RU"}
                              minDetail={"month"}

                              onChange={newValue => {
                                  setValue(newValue);
                                  setSelected(true);
                              }}

                              value={value}

                              prev2Label={null}
                              next2Label={null}

                              minDate={currentDate}

                              formatMonthYear={(locale, date) => format(date, 'MMMM YYYY', { locale: localeObj })}

                              onActiveStartDateChange={({activeStartDate}) => {

                                  let calendarGreed = document.getElementsByClassName("react-calendar__month-view__days")[0];
                                  let classList = calendarGreed.classList;

                                  if (currentDate.getMonth() !== activeStartDate.getMonth() && !classList.contains('future-month-view')) {
                                    classList.add('future-month-view');
                                  } else if (currentDate.getMonth() === activeStartDate.getMonth()) {
                                      classList.remove('future-month-view');
                                  }

                                  renderRecordsOnCalendar()
                              }}

                    />

                </div>
            </div>
        </section>
    );
};

const localeObj = {
    months: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ]
}

export default PageTwo;