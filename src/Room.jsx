import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  let { id } = useParams()
  let meetingRef = useRef(null)
  useEffect(() => {
    if (meetingRef.current) {
      const myMeeting = async (element) => {
        const appID = 1229998797;
        const serverSecret = "3e40b008bc1c7abd753b86aecb510d5d";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), 'Garv');

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        if (zp) {
          zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Personal link',
                url:
                  `https://zegovideocall.vercel.app/room/${id}`
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
          })

        }else{
          console.error('Failed to initialize ZegoUIKitPrebuilt');
        }
      }

      myMeeting(meetingRef.current)
    }

  })

  return (
    <div ref={meetingRef}>

    </div>
  )
}

export default Room
