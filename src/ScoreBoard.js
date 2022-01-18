const ScoreBoard = ({score,bestScore}) => {
    return(
        <div className="scoreboard">
            <p>current score: {score}</p>
            <p>best score: {bestScore}</p>
        </div>
    )
}
export default ScoreBoard