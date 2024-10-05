type Quiz = {
    questions: Array<{
        question: string;
        options: Array<{
            text: string;
            correct: boolean;
        }>;
    }>;
    finalScore: number;
}

export default Quiz;