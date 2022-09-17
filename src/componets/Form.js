import React, { useState } from 'react'

const Form = () => {
    const [pageNo, setpageNo] = useState(0);
    const [selectAnswer, setselectAnswer] = useState("")
    const [score, setscore] = useState(0);
    const [store, setstore] = useState([]);
    const [answerArray, setanswerArray] = useState([]);
    let i = 0;
    // const store=[];
    // const answerArray=['2 sept','fullstack developer','None','88','chicken 65','Mridanga','Tea','M.S.Dhoni','4','3 idiots'];
    const questionArray = [
        {
            'Qno': 0,
            'Question': 'Q1.What is the DOB of shree?',
            'option1': '3 sept',
            'option2': '2 sept',
            'option3': '4 sept',
            'option4': '1 sept',
            'answer': 'option2'
        },
        {
            'Qno': 1,
            'Question': 'Q2.What is the Role of shree In company?',
            'option1': 'Frontend developer',
            'option2': 'Backend developer',
            'option3': 'fullstack developer',
            'option4': 'deveops Engineer',
            'answer': 'option3'
        },
        {
            'Qno': 2,
            'Question': 'Q3.Who was the whole four year roomate of shree?',
            'option1': 'prajwal',
            'option2': 'Suyog',
            'option3': 'Ningappa',
            'option4': 'None ',
            'answer': 'option4'
        },
        {
            'Qno': 3,
            'Question': 'Q4.How Shree scored in PUC?',
            'option1': '87',
            'option2': '88',
            'option3': '89',
            'option4': '90 ',
            'answer': 'option2'
        },
        {
            'Qno': 4,
            'Question': 'Q5.Favourite starter of shree?',
            'option1': 'chicken 65',
            'option2': 'gobi',
            'option3': 'finger chips',
            'option4': 'mutton 65',
            'answer': 'option1'
        },
        {
            'Qno': 5,
            'Question': 'Q6.Which instrument does shree play?',
            'option1': 'Harmonium',
            'option2': 'Piano',
            'option3': 'Flute',
            'option4': 'Mridanga ',
            'answer': 'option4'
        },
        {
            'Qno': 6,
            'Question': 'Q7.What shree likes the most?',
            'option1': 'Tea',
            'option2': 'Hot Coffee',
            'option3': 'Cold coffee',
            'option4': 'Black tea ',
            'answer': 'option1'
        },
        {
            'Qno': 7,
            'Question': 'Q8.Favourite cricketer ?',
            'option1': 'M.S.Dhoni',
            'option2': 'Rohit Sharma',
            'option3': 'Virat Kohli',
            'option4': 'Suresh Raina ',
            'answer': 'option1'
        },
        {
            'Qno': 8,
            'Question': 'Q9.How many members are there in family including him?',
            'option1': '3',
            'option2': '6',
            'option3': '4',
            'option4': '5 ',
            'answer': 'option3'
        },
        {
            'Qno': 9,
            'Question': 'Q10.All time favourite Movie?',
            'option1': 'PK',
            'option2': '3 idiots',
            'option3': 'Housefull series',
            'option4': 'Dhamal ',
            'answer': 'option2'
        },
    ]
    const onclick = () => {
        const ans = selectAnswer.selectedAnswer;
        setanswerArray(answerArray.concat(questionArray[pageNo][ans]))


        if (questionArray[pageNo].answer === selectAnswer.selectedAnswer) {
            setscore(score + 1);
            // store.push(pageNo);
            setstore(store.concat(1));

        }
        else {
            // store.push(pageNo);
            setstore(store.concat(0));
        }
        setpageNo(pageNo + 1);


    }
    const onchange = (e) => {
        setselectAnswer({ ...selectAnswer, [e.target.name]: e.target.value })
    }

    return (
        <div>
            {(pageNo <= 9) ?


                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"  >{questionArray[pageNo].Question}</h5>
                        <br />
                        <div className="row">
                            <div className='col'>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="selectedAnswer" id="exampleRadios1" value="option1" onChange={onchange} checked={1 === 2} />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        {questionArray[pageNo].option1}
                                    </label>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="selectedAnswer" id="exampleRadios2" value="option2" onChange={onchange} checked={1 === 2} />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        {questionArray[pageNo].option2}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className='col'>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="selectedAnswer" id="exampleRadios3" value="option3" onChange={onchange} checked={1 === 2} />
                                    <label className="form-check-label" htmlFor="exampleRadios3">
                                        {questionArray[pageNo].option3}
                                    </label>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="selectedAnswer" id="exampleRadios4" value="option4" onChange={onchange} checked={1 === 2} />
                                    <label className="form-check-label" htmlFor="exampleRadios4">
                                        {questionArray[pageNo].option4}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-info" type="button" onClick={onclick}> Next</button>
                        </div>
                    </div>
                </div>
                : <div className="card1">
                    <div className="card-body">
                        <h5 className="card-title">
                            <p>Take the screen shot and send it to shree</p><br />
                            <p style={{ color: 'red' }}>Note:You can play only Once</p><br />
                            Your Score {score}/10
                            {localStorage.setItem('shreescore', 1)}
                            {store.map((item) => {
                                let col = '';
                                item === 1 ? col = 'green' : col = 'red';
                                return <p style={{ color: col }}>{answerArray[i++]}</p>
                            })}
                        </h5>

                    </div>
                </div>}
        </div>
    )
}

export default Form