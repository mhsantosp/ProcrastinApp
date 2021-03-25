import React, { useState, useEffect } from 'react'

export default function GoogleCalendar(props) {
    
    let gapi = window.gapi;
    let CLIENT_ID = "777338621702-f9as6dj9dh0imj7f8led4s69h5bee5qn.apps.googleusercontent.com";
    let API_KEY = "AIzaSyA_mvZK1V_bZK4hkvDCcvp0VzJuS4YeA-8";
    let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    let SCOPES = "https://www.googleapis.com/auth/calendar.events"

    const handleClick = () =>{
        gapi.load('client:auth2', ()=>{
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scopes: SCOPES
            })

            gapi.client.load('calendar', 'v3', ()=> console.log('calendar'))

            gapi.auth2.getAuthInstance().signIn()
            .then(()=>{
                var event = {
                    'summary': 'Google I/O 2015',
                    'location': '800 Howard St., San Francisco, CA 94103',
                    'description': 'A chance to hear more about Google\'s developer products.',
                    'start': {
                      'dateTime': '2015-05-28T09:00:00-07:00',
                      'timeZone': 'America/Los_Angeles',
                    },
                    'end': {
                      'dateTime': '2015-05-28T17:00:00-07:00',
                      'timeZone': 'America/Los_Angeles',
                    },
                    'recurrence': [
                      'RRULE:FREQ=DAILY;COUNT=2'
                    ],
                    'attendees': [
                      {'email': 'lpage@example.com'},
                      {'email': 'sbrin@example.com'},
                    ],
                    'reminders': {
                      'useDefault': false,
                      'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},
                        {'method': 'popup', 'minutes': 10},
                      ],
                    },
                  };


                  let request = gapi.client.calendar.events.insert({
                      'calendarId': 'primary',
                      'resource': event,
                  })

                  request.execute(event =>{
                      window.open(event.htmlLink)
                  })
            })
        })
    }



    return(
        <div></div>
    )
}