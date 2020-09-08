import React ,{useState,useEffect}from 'react';
import Link from 'next/link';

export default function List({ownersList}) {
//       const [owners, setOwners] = useState([]);
//       const [ownersList, setOwnersList] = useState([]);

//   useEffect(() => {
//     async function loadData() {
//       const response = await fetch('http://localhost:4001/vehicles');
//       const ownersList = await response.json();
//       setOwners(ownersList);
//     }

//     loadData();
//   }, []);
    return (
        <div>
      {ownersList.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {e.ownerName}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
    )
}
//[Alternative to useState , useEffect HOOKS] Nextjs gives us  getinitialprops which return anything .. and this thing can be passed as props 
List.getInitialProps = async () => {
    const response = await fetch('http://localhost:4001/vehicles');
    const ownersList = await response.json();
    return {ownersList: ownersList}
}
