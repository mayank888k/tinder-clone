import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./tindercard.css"
import database from '../firebase.js'

const TinderCards = () => {

    const [people,setPeople] = useState([])

    useEffect(()=>{
        database.collection('people').onSnapshot(snapshot =>(setPeople(snapshot.docs.map(doc => (doc.data())))))
    },[])

    return (
        <div className="tinderCrads">
            {
                people.map(person =>(
                    <div key={person.name}  className="card__container">
                    <TinderCard className="swipe" preventSwipe={['up','down']}>

                        <div style={{backgroundImage:`url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                    </div>
                ))
            }
        </div>
    )
}

export default TinderCards
