import axios from "axios";
// when we get data from the server it is available as props
function Animals({data}) {
    return ( 
        <>
        <h1>Random Animal: {data.randomAnimal}</h1>
        </>
     );
}
//export a function called 'getStaticProps'
// whatever is returned from this function becomes the data prop in our component
export async function getStaticProps(){
    //we can do all of our ajax/axios/fetch here
    //we can call external apis, express backends, or next backends
    const {data} = await axios.get(`${process.env.SERVER_URL}/api/animals`)
    console.log(data)


    //these props are available to us in the ocmponent
    return {
        props: {
            data,
            otherProp: "hi"
        }
    }
}
export default Animals;