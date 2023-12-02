import Image from 'next/image'
import CountdownBox from '@/components/layout/card_leiloes/countdown'
import DateInfoCard from './starts'

const startDate = "Inicio dia 20/12/23 16:00";

export default function Leiloes() {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <DateInfoCard startDate={startDate} />
            </div>
            <a href="#">
            <div className='flex justify-center items-center'>
                <Image
                    alt="Imagem de trabalho em progresso"
                    className="rounded-t-lg "
                    height="96"
                    src="/assets/work_progress.jpg"
                    width="96"
                    />
            </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center">Produto #</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className="flex justify-center items-center ">
            <CountdownBox number={20} />
            </div>
            <div className='flex justify-center items-center my-2'>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                    Lance
                </a>
            </div>
    </div>

)}