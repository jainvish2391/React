import React from 'react'
import './Avatar.css'
import 'tachyons'
import AvatarList from './AvatarList'

const Avatar = (props) => {

    const ArrayList = [ 
                {
                id :1,
                name:'Vishaha',
                work: 'SDE 1'
            
                },
                {
                    id :2,
                    name:'Utarsh',
                    work: 'BUSINESSMAN'
            
                },
                {
                    id :3,
                    name:'Badal',
                    work: 'SDE 2'
            
                },
                {
                    id :4,
                    name:'Nikki',
                    work: 'CA '
            
                }
    ]

    //Map to pass the value
   const arrayAvatarCard= ArrayList.map( (avatarCard,i) => {
        return <AvatarList id={ArrayList[i].id}
                    name={ArrayList[i].name} 
                    work={ArrayList[i].work}
                    />
    })

    return(
        <div >
            <h1>Welcome to my page</h1>
            {arrayAvatarCard}
            <button>Subscribe</button>
        </div>
    )
}


export default Avatar