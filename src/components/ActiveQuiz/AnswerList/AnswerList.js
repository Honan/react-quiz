import React, { useLayoutEffect } from 'react';
import classes from './AnswerList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswerList = props => (
    <ul className={classes.AnswerList}>
        {props.answers.map((answer, index) => {
            return(
                <AnswerItem
                    answer={answer}
                    key={index}
                    onAnswerClick={props.onAnswerClick}
                />
            )
        })}
    </ul>
)

export default AnswerList;