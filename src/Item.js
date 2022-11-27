import React from 'react'

export default function Item(props) {
        const {info} = props

        return (<>
            <div className="">
                <h1 className="text-3xl text-black dark:text-green-200">{info.title}</h1>
                <p className="text-black dark:text-green-200 text-1xl">{info.description}</p>
                <img className="max-w-xs rounded-md border border-double border-yellow-200" src={info.image} alt="" />
                <p className="text-2xl underline text-black dark:text-green-200">Price: {info.price}</p>
            </div>
        </>)
}
