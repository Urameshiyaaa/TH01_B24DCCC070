import React from 'react'
import { useState } from 'react';

const App = () => {
    const quest=[{
        question:"ReactJS dùng để làm gì?",
        ans:["Mobile App","Web UI","Hệ điều hành","Cơ sở dữ liệu"],
        correctAns:1
        },
        {
        question:"Props trong React là gì?",
        ans:["Trạng thái","Thuộc tính truyền vào","API","CSS"],
        correctAns:1
        },
        {
        question:"State dùng để?",
        ans:["Quản lí dữ liệu thay đổi","Định nghĩa component","Kết nối backend","Trang trí giao diện"],
        correctAns:0}
    ]
    const [indexQuest,setIndexQuest] = useState(0)
    const [count,setCount]=useState(0);
    const answer = (ans) => {
        if (indexQuest >= quest.length) 
            return;
        if (ans===quest[indexQuest].correctAns) {
            setCount(count+1);
        }
        setIndexQuest(indexQuest+1);
    }
  return (
    <div>
        {indexQuest < quest.length ? <div>
            <p>{quest[indexQuest].question}</p>
            {quest[indexQuest].ans.map((item,index)=>
            <button 
            key={index} 
            onClick={()=>(answer(index))}
            >{item}</button>)}
    </div>
    : <div>
        <p>Bạn đã trả lời đúng {count} trên {quest.length} câu</p>
    </div>}
    </div>
  )
}
export default App