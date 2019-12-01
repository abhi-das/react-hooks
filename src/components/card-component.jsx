
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import './card.css';

import { useCustomHttp } from '../hooks/useCustomHttp';


const CardComponent = (props) => {

    // console.log(props);
    const url = "https://jsonplaceholder.typicode.com/posts";

    const [currentVal, setCurrentVal] = useState(0);
    const [currentSelectionId, setCurrentSelectionId] = useState(0);

    // Custome Hook
    const [isLoading, dataFetched] = useCustomHttp(url, []);

    const obj = [{
        title: "Adipisicing Occaecat",
        desc: "Laboris id enim velit dolor anim officia sit adipisicing consequat minim. Voluptate tempor aliquip quis non. Fugiat magna ut veniam ullamco commodo minim excepteur mollit pariatur velit ex officia ex. Anim elit voluptate proident excepteur veniam elit irure est est elit nulla. Voluptate qui velit officia consequat qui duis minim. Anim incididunt commodo culpa pariatur id aliqua nulla officia cillum labore ad consequat est."
    }, {
        title: "Magna Aliqua",
        desc: "Esse amet nisi et qui sit esse mollit veniam nostrud voluptate non. Laboris ullamco ex labore irure tempor ut incididunt ad in ad. Proident veniam exercitation duis voluptate aute id cillum velit qui irure enim duis anim. Eiusmod enim enim et officia ut duis. Adipisicing sit pariatur velit dolore culpa laboris irure incididunt aute eiusmod excepteur. Ad quis labore consequat culpa eu exercitation."
    }];

    const changeHandler = (e) => {
        setCurrentVal((e.target.value));
        setCurrentSelectionId(e.target.selectedIndex)
    }

    return (
        <div>
            <select name="car" id="car" onChange={changeHandler} value={currentVal}>
                <option value="select" >Select</option>
                <option value="fiat" >FIAT</option>
                <option value="toyota" >TOYOTA</option>
            </select>
            <Card className={currentVal}>
                {
                    currentVal !== "select" && currentSelectionId !== 0 &&
                    <div>
                        <Card.Header>{currentVal.toUpperCase()}</Card.Header>
                        <Card.Body>
                            <Card.Title>{obj[currentSelectionId - 1].title}</Card.Title>
                            <Card.Text>{obj[currentSelectionId - 1].desc}</Card.Text>
                        </Card.Body>
                    </div>
                }
                {
                    currentVal === "select" &&
                    <div>
                        <Card.Header>Select</Card.Header>
                        <Card.Body>
                            <Card.Title>No selection made!</Card.Title>
                        </Card.Body>
                    </div>
                }
            </Card>
        </div>
    )
}

export default React.memo(CardComponent);