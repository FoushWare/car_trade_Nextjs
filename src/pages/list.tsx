import React ,{useState,useEffect}from 'react';
import Link from 'next/link';
import {VehiclePerson} from '../api/VechiclePerson';

//🔥There is a convention Here for the Prop in tyescript ..Because 
// {ownersList }: VehiclePerson[] | undefined    will be understod 🤔 as destructioning of the object VehiclePerson
export interface ListProps {
  ownersList: VehiclePerson[] | undefined;
} 
export default function List({ownersList }:ListProps) {
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
      {ownersList?.map((e, index) => (
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
    const ownersList:VehiclePerson[] | undefined = await response.json();
    return {ownersList: ownersList}
}
