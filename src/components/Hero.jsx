
function Hero({Title, Img}){
    return(
       <div className="flex gap-4">
            <h1>{Title}</h1>
            <img src={Img} alt="" />
       </div>
    )
}
export default Hero;