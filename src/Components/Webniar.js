import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link, useHistory, useParams } from 'react-router-dom';

export default function Webniar() {
    const axios = require('axios');
    const history = useHistory()
    const [pastWebinar, setPastWebinar] = useState([]);
    const [upcomingWebinar, setUpcomingWebinar] = useState([])
    const getAllPastWebinars = () => {
        axios.get('https://webicoun-backend-hajkn.run-ap-south1.goorm.io/webinars')
            .then(function (response) {
                // handle success
                setPastWebinar(response.data.webinars);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    const getAllUpcomingWebinars = () => {
        axios.get('https://webicoun-backend-hajkn.run-ap-south1.goorm.io/upcomingwebinars')
            .then(function (response) {
                // handle success
                setUpcomingWebinar(response.data.webinars);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    useEffect(() => {
        getAllPastWebinars()
        getAllUpcomingWebinars()

    }, [])


    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            <h2 style={{ marginLeft: 20 }}>Upcoming Webinars</h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {upcomingWebinar.map((each, index) =>

                    <img src={each.webiurl} alt={each.description} height="250px" width="250px"/>
                   
                )}
            </div>

            {/* {console.log(webniar)} */}

            <h2 style={{ marginLeft: 20 }}>Past Webinars</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {pastWebinar.map((each, index) =>


                    <iframe style={{ margin: 15 }} width="300" height="300" src={each.webiurl} title={each.title} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                )}
            </div>

        </div>
    )
}
