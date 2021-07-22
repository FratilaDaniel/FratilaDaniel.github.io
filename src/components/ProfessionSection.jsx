import React, {useState, useEffect} from "react";

const TECHS = ["HTML     ", "CSS      ", "JS     ", "React     "];

function ProfessionSection(){
    const [{currentTechIndex, currentCharIndex, direction}, setCurrentIndex] = useState({
        currentTechIndex: 0,
        currentCharIndex: 0,
        direction: 1 // right
    });
    

    useEffect(() => {
        setTimeout(() => {
            console.log(currentTechIndex, currentCharIndex, direction);
            if(currentCharIndex >= TECHS[currentTechIndex].length && direction === 1){
                setCurrentIndex({
                    currentTechIndex: currentTechIndex,
                    currentCharIndex: currentCharIndex - 1, 
                    direction: -1
                });
            }
            else if(currentCharIndex === 0 && direction === -1){
                setCurrentIndex({
                    currentTechIndex: (currentTechIndex + 1) % TECHS.length,
                    currentCharIndex: currentCharIndex + 1, 
                    direction: +1
                });
            }
            else{
                setCurrentIndex(state => ({ ...state, currentCharIndex: currentCharIndex + direction}));
            }
        }, 500);
    }, [currentTechIndex, currentCharIndex, direction]);

    return (
        <div>
            <p>&lt;{TECHS[currentTechIndex].substring(0, currentCharIndex).trimRight()}&gt;</p>
            <p>&emsp;Frontend Dev</p>
            <p>&lt;/{TECHS[currentTechIndex].substring(0, currentCharIndex)}&gt;</p>
        </div>
    );
}

export default ProfessionSection;
