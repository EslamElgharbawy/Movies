import { Link } from 'react-router-dom'

export default function RecommendCard({ Recommendation }) {
     if (!Recommendation) return null;
    const { id, name, image } = Recommendation
    
    return <>
        <Link to={`/GenreMovies/${id}`}
            className="bg-[#1A1A1A] border-2 border-borderColor rounded-xl p-4 cursor-pointer text-white shadow-md"
        >
            <span className='fadeShow-bottom relative'>
                <img
                    src={image}
                    alt={name}
                    className="rounded-lg w-full object-cover"
                />
            </span>
            <div className="flex justify-between items-center text-white text-[16px] pt-2">
                <span>{name}</span>
                <i className="fa-solid fa-arrow-right cursor-pointer"></i>
            </div>


        </Link>
       

    </>
}
