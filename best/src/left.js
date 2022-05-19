import React from 'react';
import One from "@heroicons/react/solid/StopIcon"
import Two from "@heroicons/react/solid/MinusSmIcon"
import Apps from "@material-ui/icons/Apps"
import ArtRrack from '@material-ui/icons/ArtTrackOutlined';
import Collection from "@heroicons/react/solid/CashIcon"
import Market from "@material-ui/icons/TableChart"
import Shop from "@heroicons/react/solid/ShoppingBagIcon"
import Down from "@material-ui/icons/KeyboardArrowDown"
import Clock from "@material-ui/icons/QueryBuilder"
import MessageIcon from "@heroicons/react/solid/ChatAlt2Icon"
import HelpIcon from "@material-ui/icons/Chat"
import MoreIcon from "@material-ui/icons/MoreHoriz"
import Duplicate from "@heroicons/react/solid/DuplicateIcon"
import FireIcon from "@heroicons/react/solid/FireIcon"
import Middle from './middle';
import Right from './right';

function Left ()
{
    function Item (icon, statement, secondIcon)
    {
        return (
            <div className='active:bg-blue-100 rounded-2xl active:text-blue-600  h-9 w-52 ml-5 text-gray-500 '>
                <div className='ml-2 pt-2 flex flex-row justify-between'>

                    <div className='flex flex-row'>
                        {icon}
                        <h1 className='font-semibold ml-5'>{statement}</h1>
                    </div>
                    {secondIcon}
                </div>

            </div>)

    }
    return <div className='bg-blue-50   mx-20 mt-5  my-6 h-fit rounded-2xl flex-row flex w-fit '>
        <div className='bg-zinc-50 w-80  rounded-tl-xl rounded-bl-xl'>

            <div>
                <div className='h-10 w-10 rounded-3xl ml-7 bg-gray-900 shadow-gray-500 shadow-md relative top-5 '>
                    <One className='h-7 ml-1.5 relative top-1 text-white' />
                    <Two className='h-7 relative bottom-3 ml-1.5 mt-1 text-white' />
                </div>
                <div className='flex flex-col ml-20 relative bottom-5'>
                    <div className='flex flex-row'>
                        <h1 className='font-bold text-xl'>Ofspace LLC</h1>
                        <img src='crown.jpg' className='h-10  rounded-3xl w-10 ml-3 relative bottom-1 ' alt='' />
                    </div>
                    <h1 className='font-semibold opacity-50 relative bottom-4'>Creator</h1>
                </div>
            </div>
            {Item(<Apps fontSize='small' />, "Overview", " ")}
            {Item(<ArtRrack fontSize='medium' />, "Active Birds", " ")}
            {Item(<Collection className='h-6' />, "My Collection", "")}
            {Item(<Market fontSize='small' />, "Market", "")}
            {Item(<Shop className='h-6' />, "Sales", <Down fontSize='small' className='relative right-2' />)}
            {Item(<Clock fontSize='small' />, "Schedule", "")}
            {Item(<h1 className='opacity-50 font-semibold'>HELP</h1>, "", "")}
            {Item(<MessageIcon className='h-6' />, "Message", <h1 className='rounded-3xl bg-red-700 h-5 w-5 relative right-3'><span className='relative left-1.5 bottom-0.5 text-zinc-50'>2</span></h1>)}
            {Item(<HelpIcon fontSize='small' />, "Support", "")}
            <div >
                <div className='bg-white mx-5 rounded-xl  mt-20 relative bottom-6  shadow-sm shadow-zinc-200  h-60 '>
                    <div className='mx-3'>

                        <div className='flex flex-row justify-between'>
                            <h1 className='text-xl font-semibold'>Your Balance</h1>
                            <MoreIcon className='reltaive right-2 opacity-50' fontSize='small' />
                        </div>
                        <div className='flex flex-row opacity-50'>
                            <p>crgkulvbbn...</p>
                            <Duplicate className='h-6' />
                        </div>
                        <h1 className='text-2xl font-bold mt-3'>$ 687,299.10</h1>
                        <div className='bg-gray-200 w-32 h-8 relative  rounded-3xl mt-5' >
                            <h1 className='flex flex-row relative bottom-1.5 rounded-md  ml-1'> <FireIcon className='h-5 bg-white rounded-3xl text-orange-300 my-3 ' /><span className='font-bold text-gray-500 ml-2 my-3 '>9.04</span> <span className='text-gray-500 ml-2 my-3'>ETHE</span></h1>

                        </div>
                        <div className=' w-56  mt-5 h-11 borde-2 border border-blue-400 rounded-3xl relative '>
                            <h1 className='text-blue-400 ml-10 mt-2  font-semibold  '>Topup Your balance</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Middle />
        <Right />
    </div>

}

export default Left;
