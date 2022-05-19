import React from 'react';
import SearchIcon from "@material-ui/icons/SearchOutlined"
import FireIcon from "@heroicons/react/solid/FireIcon"
import CheckIcon from "@material-ui/icons/CheckCircle"
import Down from "@material-ui/icons/KeyboardArrowDown"
import Plus from "@material-ui/icons/AddOutlined"

function Middle ()
{
    function DownRow (group, fire, volume, percent, icon, floorPrice, Items, owners)
    {
        return (<div className='  px-5 '>
            <div className='border-b-blue-50 border-t-2 flex flex-row justify-between py-1.5'>

                {group}
                <div className='flex flex-row text-zinc-500'>{fire} <span className='mt-1'>{volume}</span></div>
                <h1 className='text-md text-red-600 mt-1'>{percent}</h1>
                <h1 className='flex flex-row text-zinc-500'>{icon}<span className='mt-1'>{floorPrice}</span> </h1>
                <h1 className='mt-1 text-zinc-500'>{Items}</h1>
                <h1 className='text-zinc-500'>{owners}</h1>

            </div>

        </div>)
    }
    function Prism (name, avatar)
    {
        return (
            <div className='ml-9 mt-5 bg-white rounded-3xl'>
                <div className='px-2 py-2'>

                    <div className='h-44 w-44 '>

                        <img className=' rounded-xl' alt='' src={name} />
                    </div>
                    <div className='bg-gray-200 w-20 h-6 absolute  rounded-3xl -mt-8 ml-20     ' >
                        <h1 className='flex flex-row relative bottom-1.5 rounded-md  ml-1 text-xs'> <FireIcon className='h-3 bg-white rounded-3xl text-blue-400 my-3.5 ' /><span className='font-bold text-gray-500 ml-1 my-3 '>9.04</span> <span className='text-gray-500 ml-1 my-3'>ETHE</span></h1>

                    </div>
                    <div className='flex flex-row justify-between mt-2'>
                        <div className='flex flex-row text-xs text-zinc-500'>

                            <h1 className='opacity-50'>Offspace NFT</h1>
                            <CheckIcon fontSize='small' className='text-yellow-600 text' />

                        </div>
                        <h1 className='opacity-50 text-xs text-zinc-500'>120 Likes</h1>

                    </div>
                    <h1 className='text-xs font-bold mt-2'>NFT Cube Design #92</h1>

                    <div className='flex flex-row justify-between mt-1 '>
                        <img alt='' src={avatar} className='h-5 w-5 rounded-3xl' />
                        <h1 className='opacity-50 text-zinc-500 text-xs'>@ofspace99</h1>
                    </div>
                </div>
            </div>

        )
    }
    return <div>


        <form className='bg-white rounded-3xl w-48 ml-10 mt-5 flex flex-row h-8 '>
            <SearchIcon fontSize='medium' className='ml-2 mt-1' />

            <input className=' border-none outline-none' type={"text"} placeholder='Search...' />
        </form>

        <div className='flex flex-row justify-between ml-10 mt-5'>
            <h1 className='text-xl font-bold  '>Top Collectibles</h1>
            <h1 className='text-xs font-semibold text-zinc-500 mr-3'>View All</h1>

        </div>
        <div className='flex flex-row'>
            {Prism("prism1.jpg", "avatar7.jpg")}
            {Prism("prism2.jpg", "avatar8.jpg")}
            {Prism("prism3.jpg", "avatar9.jpg")}
        </div>
        <div className='bg-white rounded-2xl ml-10'>

            <div className='flex flex-row justify-between mt-3 ml-1.5 px-3'>
                <h1 className='text-xl font-semibold '>Top NFTS</h1>
                <div className='flex flex-row justify-evenly mt-2 mr-2'>
                    <h1 className='bg-blue-50 rounded-3xl text-sm mr-3 '><span className='py-1 px-2'>All categories </span><Down className='text-sm' fontSize='small' /> </h1>
                    <h1 className='bg-blue-50 rounded-3xl text-sm'><span className='py-1 px-2'>Last 7 Days </span> <Down className='text-sm' fontSize='small' /> </h1>
                </div>
            </div>
            <div className='  px-5 mt-2'>
                <div className=' flex flex-row justify-between'>

                    <h1 className='text-zinc-500'>#</h1>
                    <h1 className='mt-1 relative left-24 text-zinc-500'>Volume</h1>
                    <h1 className='text-md  mt-1  relative left-24 ml-5  text-zinc-500'>24h%</h1>
                    <h1 className='flex flex-row  relative left-20 ml-4 text-zinc-500 '>Floor Price </h1>
                    <h1 className='mt-1  relative left-11 text-zinc-500'>Items</h1>
                    <h1 className=' relative left-3 text-zinc-500   '>Owners</h1>
                </div>

            </div>
            {DownRow(<div className='flex flex-row'>
                <div className='mt-1'>
                    <div className='h-4 w-4 rounded-3xl absolute bg-red-100 border-2 border-red-700 -ml-1 '><span className='relative bottom-2 left-0.5 text-xs'>1</span></div>
                    <img alt='' src='avatar16.jpg' className='h-8 w-8 rounded-3xl' />
                </div>
                <h1 className='font-semibold mt-1 ml-1.5'>@ofspace</h1>
            </div>,

                <h1 className='flex flex-row relative bottom-1.5 rounded-md  ml-1 text-xs'> <FireIcon className='h-4 bg-orange-100 rounded-3xl text-orange-600 my-3.5 ' /><span className='font-bold text-gray-500 ml-1 my-3 '></span></h1>
                , "4 030,98", "-26.99",
                <h1 className='flex flex-row relative bottom-1.5 rounded-md  ml-1 text-xs'> <FireIcon className='h-4 bg-orange-100 rounded-3xl text-orange-600 my-3.5 ' /><span className='font-bold text-gray-500 ml-1 my-3 '></span></h1>
                , 0.99, 99, "12.0K")}
            {DownRow(<div className='flex flex-row'>
                <div className='mt-1'>
                    <div className='h-4 w-4 rounded-3xl absolute bg-red-100 border-2 border-red-700 -ml-1 '><span className='relative bottom-2 left-0.5 text-xs'>2</span></div>
                    <img alt='' src='avatar2.jpg' className='h-8 w-8 rounded-3xl' />
                </div>
                <h1 className='font-semibold mt-1 ml-1.5'>@ofcolors</h1>
            </div>,

                <h1 className='flex flex-row relative bottom-1.5 rounded-md  ml-1 text-xs'> <FireIcon className='h-4 bg-orange-100 rounded-3xl text-orange-600 my-3.5 ' /><span className='font-bold text-gray-500 ml-1 my-3 '></span></h1>
                , "2 108,54", "-57.02",
                <h1 className='flex flex-row relative bottom-1.5 rounded-md  ml-1 text-xs'> <FireIcon className='h-4 bg-orange-100 rounded-3xl text-orange-600 my-3.5 ' /><span className='font-bold text-gray-500 ml-1 my-3 '></span></h1>
                , 0.87, 79, "34.0K")}
        </div>
        <div className='flex flex-row px-2 justify-between ml-9 mt-6'>
            <h1 className='text-md font-bold'>Popular Creators</h1>
            <h1 className='text-xs font-semibold text-zinc-500'>View All</h1>
        </div>
        <div className=' flex flex-row ml-10 mt-1.5 '>
            <div className='flex flex-col bg-blue-700 rounded-2xl w-72'>

                <div className='flex flex-row bg-white rounded-2xl  mt-0.5 mx-0.5'>
                    <img alt='' src='avatar18.jpg' className='h-8 w-8 rounded-3xl mt-2 ml-0.5' />
                    <div className='flex flex-col ml-2'>
                        <div className='flex flex-row  '>
                            <h1 className=' font-semibold'>Leslie Alexander</h1>
                            <CheckIcon fontSize='small' className='text-yellow-600 text-xs mt-0.5 ml-1 ' />
                        </div>
                        <h1 className='text-zinc-500'>130 Items</h1>
                    </div>
                </div>
                <div className='flex flex-row justify-between py-3 px-1 '>
                    <div className='flex flex-row ml-1'>
                        <img alt='' src='avatar10.jpg' className='h-5 w-5 rounded-3xl relative ' />
                        <img alt='' src='avatar11.jpg' className='h-5 w-5 rounded-3xl  relative right-1.5' />
                        <img alt='' src='avatar12.jpg' className='h-5 w-5 rounded-3xl  relative right-2.5' />

                    </div>
                    <div className='flex flex-row bg-white rounded-3xl'>
                        <h1 className='text-blue-400 px-2 font-semibold'>Follow</h1>
                        <Plus fontSize='medium' className='pr-2 text-blue-400 font-bold' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-zinc-200 rounded-2xl w-72 ml-16'>

                <div className='flex flex-row bg-white rounded-2xl  mt-0.5 mx-0.5'>
                    <img alt='' src='avatar17.jpg' className='h-8 w-8 rounded-3xl mt-2 ml-0.5' />
                    <div className='flex flex-col ml-2'>
                        <div className='flex flex-row  '>
                            <h1 className=' font-semibold'>Kelly spinner</h1>
                            <CheckIcon fontSize='small' className='text-yellow-600 text-xs mt-0.5 ml-1 ' />
                        </div>
                        <h1 className='text-zinc-500'>130 Items</h1>
                    </div>
                </div>
                <div className='flex flex-row justify-between py-3 px-1 '>
                    <div className='flex flex-row ml-1'>
                        <img alt='' src='avatar13.jpg' className='h-5 w-5 rounded-3xl relative ' />
                        <img alt='' src='avatar14.jpg' className='h-5 w-5 rounded-3xl  relative right-1.5' />
                        <img alt='' src='avatar15.jpg' className='h-5 w-5 rounded-3xl  relative right-2.5' />

                    </div>
                    <div className='flex flex-row bg-blue-700 rounded-3xl'>
                        <h1 className='text-white px-2 font-semibold'>Follow</h1>
                        <Plus fontSize='medium' className='pr-2 text-white' />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Middle;
