import React from 'react'
import {useRouter} from 'next/router';
// [person].js mean it's dynamic route 
export default function Person() {
   
        const router = useRouter();
        console.log('🔥🐧',router );
    return <h1>{router.query.person}'s {router.query.vechicle}</h1>
}
