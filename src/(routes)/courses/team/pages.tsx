
import Achievements from "@/component/Achievements"
import TeamCard, { TeamProp } from "@/component/TeamCard"
import React from "react"


export default function Team(){
    const teamMembers:TeamProp[] = [
        {
            image:"/image/team1.svg",
            teamMem:"James Nduku",
            memTitle:"Marketing Coordinator"
        },
        {
            image:"/image/team2.svg",
            teamMem:"Joseph Munyambu",
            memTitle:"Nursing Assistant"
        },
        {
            image:"/image/team3.svg",
            teamMem:"Joseph Ngumbau",
            memTitle:"Medical Assistant"
        },
        {
            image:"/image/team4.svg",
            teamMem:"Erick Kipkemboi",
            memTitle:"Web Designer"
        },
        {
            image:"/image/team5.svg",
            teamMem:"Stephen Kerubo",
            memTitle:"President of Sales"
        },
        {
            image:"/image/team6 (2).svg",
            teamMem:"John Leboo",
            memTitle:"Dog Trainer"
        },
    ]
    return(
        <>
        <Achievements />
        <div className="flex w-full max-w-[1280px] bg-secondary flex-col min-h-screen items-center text-center py-12 px-4">
            <h1 className="text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-gray-600 mb-10 max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className="grid grid-cols md:grid-cols-3 space-y-8 md:gap-8 px-8 w-full max-w-6xl">
            {teamMembers.map((team, index)=>
            <TeamCard key={index} {...team}/>)}
        </div>
        </div></>
        
        
    )
}