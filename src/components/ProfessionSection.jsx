import React, {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";

const TECHS = ["HTML     ", "CSS      ", "JS     ", "React     "];

var blinking = () => keyframes`50% {opacity: 0;}`;

const ProfessionDescription = styled.span`
    :after{
        content: "";
        position: absolute;
        top: 0; bottom: 0; right: -2px;
        width: 2px;
        background-color: white;
        animation: ${props => props.animationState === "running" ? blinking : "none"};
        animation-iteration-count: infinite;
        animation-duration: 1s;
    }
    position: relative;
`;

function ProfessionSection(){
    const [{currentTechIndex, currentCharIndex, direction, animationState}, setCurrentIndex] = useState({
        currentTechIndex: 0,
        currentCharIndex: 0,
        direction: 1, // right
        animationState: "paused"
    });    

    useEffect(() => {
        setTimeout(() => {
            // moving right
            if(direction === 1){
                // word is written, fake pause, cursor starts blinking 
                if(currentCharIndex >= TECHS[currentTechIndex].trimRight().length){
                    setCurrentIndex(state => ({ ...state, animationState: "running"}));
                } // else keep staying paused
            }
            else{ // moving left
                // word starts being deleted, cursor stops blinking
                if(currentCharIndex <= TECHS[currentTechIndex].trimRight().length){
                    setCurrentIndex(state => ({ ...state, animationState: "paused"}));
                }
            }
            if(currentCharIndex >= TECHS[currentTechIndex].length && direction === 1){
                setCurrentIndex({
                    currentTechIndex: currentTechIndex,
                    currentCharIndex: currentCharIndex - 1, 
                    direction: -1,
                    animationState: "running"
                });
            }
            else if(currentCharIndex === 0 && direction === -1){
                setCurrentIndex({
                    currentTechIndex: (currentTechIndex + 1) % TECHS.length,
                    currentCharIndex: currentCharIndex + 1, 
                    direction: +1,
                    animationState: "paused"
                });
            }
            else{
                setCurrentIndex(state => ({ ...state, currentCharIndex: currentCharIndex + direction}));
            }
        }, 500);
    }, [currentTechIndex, currentCharIndex, direction, animationState]);

    return (
        <div className="profession-container">
            <p className="tag-container">
                &lt;
                <ProfessionDescription
                    delay={TECHS[currentTechIndex].trimRight().length}
                    animationState={animationState}>
                    {TECHS[currentTechIndex].substring(0, currentCharIndex).trimRight()}
                </ProfessionDescription>
                &gt;
            </p>
            <p>&emsp;Frontend Dev</p>
            <p className="tag-container">
                &lt;/
                <ProfessionDescription
                    delay={TECHS[currentTechIndex].trimRight().length}
                    animationState={animationState}>
                    {TECHS[currentTechIndex].substring(0, currentCharIndex).trimRight()}
                </ProfessionDescription>
                &gt;
            </p>
        </div>
    );
}

export default ProfessionSection;
