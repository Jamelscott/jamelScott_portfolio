// next provides hooks for using params
import { useRouter } from "next/router";
function UserIdPage() {
    
    const router = useRouter()

    const {userId} = router.query



    return ( 
        <div>
            <h1>hello user with an id of {userId}</h1>
        </div>
     );
}

export default UserIdPage;