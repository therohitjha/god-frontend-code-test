export const base_url: string = "http://localhost:3000";

export async function getStaticProps({id}:{id:string}) {
  try {
    const res = await fetch(`${base_url}/api/cars.json`);
    const data = await res.json();
const carInfo = data.find((e:any)=>e.id===id)
    return {
      props: { carInfo },
    };
  } catch (error) {
    console.error(error);
  }
}
