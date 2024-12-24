import { auth } from '@/auth';
import { fetchAllProducts } from '../actions/action';
import ProductCard from '../components/index';
import { redirect } from 'next/navigation';

export default async function Home() {
  
  const getSession = await auth();
  

  if(!getSession?.user) {
      redirect('/unauth-page');
  }

  const getAllProducts = await fetchAllProducts();
  

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 m-5">
        {
          getAllProducts && 
          getAllProducts.data && 
          getAllProducts.data.length > 0 ?
            getAllProducts.data.map((product) => {
              return <ProductCard key={product.id} product={product} />
            }) : <p>No products found</p>
        }
      </div>
    </div>
  );
}
