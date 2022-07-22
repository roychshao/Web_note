import { useState } from 'react';
import { v4 } from 'uuid';
import './../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Edit = ({status, setData}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function titleChange(e) {
        setTitle(e.target.value);
    }

    function descriptionChange(e) {
        setDescription(e.target.value);
    }

    function dateChange(e) {
        setDate(e.target.value);
    }

    function timeChange(e) {
        setTime(e.target.value);
    }

    function addItem() {
        setData(function(prevData) {
            // ...功能可以直接取值,將括號全部去除
            status.current = true
            return [{
                id: v4(),
                title,
                description,
                date,
                time
            },
            ...prevData
            ]
        })
    }
    
    return (
        <div className="edit-form">
            <div className="edit-box">
                <p className="input-text">標題:</p>
                <input className="input-box" type="text" value={title} onChange={titleChange}/>
            </div>
            <div className="edit-box">
                <p className="input-text">敘述:</p>
                <input className="input-box" type="text" value={description} onChange={descriptionChange}/>
            </div>
            <div className="edit-box">
                <p className="input-text">日期:</p>
                <input className="input-box" type="date" value={date} onChange={dateChange}/>
            </div>
            <div className="edit-box">
                <p className="input-text">時間:</p>
                <input className="input-box" type="time" value={time} onChange={timeChange}/>
            </div>
            <button className="edit-add" onClick={addItem}>新增</button>
        </div>
    )
}

export default Edit;
