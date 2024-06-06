
function Hero({Title, Img}){
    return(
       <div className="flex gap-2">
            <h1 className='text-3xl font-semibold p-4'>{Title} </h1>
            <img src={Img} alt="" />
       </div>
    )
}
export default Hero;