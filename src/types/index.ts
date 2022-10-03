export type GameType = {
    title: string;
    createdAt: Date;
    modifiedAt: Date;
    author: string;
    isPublic: Boolean;
    startingGpsCoordinates: number[];
    stepsContent: {
        type: string;
        title: string;
        message: string;
        key: string;
        coordinates: number[];
        answerType: string;
    }[];
};

// enum AnswerTypes {
//     '',
// }

// enum StepTypes {}
