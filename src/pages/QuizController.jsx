import axios from "axios";
import { useState } from "react";
import Quiz from "../components/quizHandler/Quiz";
import Result from "../components/quizHandler/Result";

function App() {
    const [questions, setQuestions] = useState();
    const [name, setName] = useState();
    const [score, setScore] = useState(0);

    const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);


    return (
        <BrowserRouter>
            <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home
                            name={name}
                            setName={setName}
                            fetchQuestions={fetchQuestions}
                        />
                    </Route>
                    <Route path="/quiz">
                        <Quiz
                            name={name}
                            questions={questions}
                            score={score}
                            setScore={setScore}
                            setQuestions={setQuestions}
                        />
                    </Route>
                    <Route path="/result">
                        <Result name={name} score={score} />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;