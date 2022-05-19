import React from 'react';
import LightBulbIcon from '@heroicons/react/solid/LightBulbIcon';
import FireIcon from "@heroicons/react/solid/FireIcon"
import CheckIcon from "@material-ui/icons/CheckCircle"
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Logout from "@heroicons/react/outline/LogoutIcon"
function Right ()
{
    function Creators (number, name, amount, line, percentage, image)
    {
        return (<div className='flex flex-row justify-between relative mt-2 border-b-zinc-100 border-b-2'>
            <div className='flex flex-row'>

                <div className='mt-3 '>
                    <div className='h-4 w-4 rounded-3xl absolute bg-red-100 border-2 border-red-700 -ml-1 '><span className='relative bottom-2 left-0.5 text-xs'>{number}</span></div>
                    <img alt='' src={image} className='h-8 w-8 rounded-3xl' />
                </div>
                <div className=''>
                    <h1 className='font-semibold mt-1 ml-1.5'>{name}</h1>
                    <h1 className='flex flex-row relative bottom-1.5 rounded-md  ml-1 text-xs'> <FireIcon className='h-4 bg-orange-100 rounded-3xl text-orange-600 my-3.5 ' /><span className='font-bold text-gray-500 ml-1 my-3 '>{amount}</span></h1>
                </div>
            </div>
            <div className='flex flex-row mr-3 mt-1.5'>
                <img src={line} alt='' className='h-12   relative mt-1.5 ' />
                <h1 className='mt-3'>+{percentage}</h1>
            </div>
        </div>
        )
    }
    return <div className='bg-zinc-50 ml-10 w-80 rounded-tr-xl rounded-br-xl'>
        <div className='flex flex-row justify-between px-2 py-2'>
            <h1 className='text-zinc-500'>Light mode</h1>
            <div className='bg-zinc-300 w-14 rounded-3xl'>
                <LightBulbIcon className='h-4 bg-white rounded-3xl text-blue-400  mt-1 ml-1 ' fontSize="small" />
            </div>
        </div>
        <h1 className='text-2xl font-semibold ml-2 mt-6 '>Top Creators</h1>
        <div className='ml-4 flex flex-col px-2'>
            {Creators(1, "@carlie", "4 030,98", "line1.png", "38.09%", "avatar3.jpg")}
            {Creators(2, "@johhny", "7 125,01", "line2.png", "18.02%", "avatar4.jpg")}
            {Creators(3, "@thiery", "6 951,12", "line3.png", "48.12%", "avatar5.jpg")}
            {Creators(4, "@yasikov", "1 330,20", "line2.png", "18.02%", "avatar6.jpg")}
        </div>
        <div className=' w-72 rounded-2xl ml-5 mt-3 '>
            <img className='rounded-2xl' src='prism.jpg' alt='' />
            <div className='absolute bottom-11 shadow-zinc-200 shadow-sm rounded-br-xl rounded-bl-xl '>
                <div className='bg-white w-72 h-48   rounded-br-xl rounded-bl-xl '>
                    <div className='border-white border-4 absolute -top-14 ml-28 rounded-full'>

                        <img className='h-16 w-16 rounded-full ' src='avatar.jpg' alt='' />
                    </div>
                    <div className=' flex flex-row relative top-4 left-16 font-bold text-xl'>
                        <h1 className='text-zinc-500'>MR Albert Flores</h1>
                        <CheckIcon fontSize='small' className='text-yellow-600 text-xs mt-0.5 ml-1 ' />

                    </div>
                    <h1 className='relative top-6 bg-zinc-100 w-28 h-7 rounded-3xl ml-20 left-2'><span className='ml-3'>0x1e69...f6d9</span></h1>
                    <div className='top-10 relative'>
                        <h1 className='text-zinc-500 text-xs ml-8'>I am or lipsum as it sometimes is dummy</h1>
                        <h1 className='text-zinc-500 text-xs ml-24'>text our print.</h1>
                    </div>
                    <div className='flex flex-row mt-12 ml-12'>
                        <div className='flex flex-row bg-blue-700 rounded-3xl h-8'>
                            <h1 className='text-white px-2 font-semibold mt-1'>Follow +</h1>
                        </div>
                        <MoreHoriz className=' bg-white border-2 border-zinc-500 rounded-3xl border-opacity-30 ml-1 opacity-30' fontSize='large' />
                        <Logout className="h-9 rounded-3xl border-2 px-1 py-1 border-zinc-500 border-opacity-30 ml-1 bg-white opacity-30 -rotate-90" />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Right;
