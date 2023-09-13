"use client"

import { useContext } from "react"
import { SearchContext } from "./SearchContext"
import LocationSelection from "./LocationSelection"
import DataSelection from "./DataSelection"
import HoursSelection from "./HoursSelection"

export default function Search() {
    const {searchActive} = useContext(SearchContext)
    return (
    
    <div className={`${searchActive ? 'bg-white rounded-none xl:h-[80px]' :
     'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px] shadow-lg'} 
    hidden xl:block w-full relative shadown-lg`}>
        <div className={` flex h-full ${searchActive && 'container mx-auto'}`}>

        <LocationSelection/>
        <DataSelection/>
        <HoursSelection/>
        
            <div className="xl:h-full flex items-center px-6 xl:px-0">
                <button className={`${searchActive ?  'btn btn-sm btn-accent xl:w-[164px]' : 'btn btn-sm btn-accent xl:w-[184px]'}`}>
                    Search
                </button>
            </div>
        </div>
    </div>
    )
}